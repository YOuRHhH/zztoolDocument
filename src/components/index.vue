<template>
  <div style="height:100%;max-height:100%;">
    <h1>README</h1>
    <div style="height: 10px;"></div>
    <div class="md" @mousedown="handleMouseDown">
      <div class="markdown-body" v-html="readmeHtml"></div>
    </div>
    <h1>更新日志</h1>
    <div style="height: 10px;"></div>
    <div class="md" @mousedown="handleMouseDown">
      <div class="markdown-body" v-html="changelogHtml"></div>
    </div>
    <div style="height: 10px;"></div>
    
  </div>
  <CptDialog
    v-model="dialogVisible"
    :headShow="false"
    :enterShow="false"
    width="100%"
  >
    <div ref="container" style="height: calc(100vh - 96px);overflow: auto;">
      ceshi
    </div>
  </CptDialog>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import {CptDialog} from '../publicCom/dialog/index'
import {CptButton} from '../publicCom/button/index'
import 'highlight.js/styles/github.css'
import { CptScrollbar } from "../publicCom/scrollbar/index"

// 定义响应式变量
const changelogHtml = ref('');
const readmeHtml = ref('');
const dialogVisible = ref(false)
const container = ref()
// 生命周期钩子
onMounted(() => {
  loadLocalChangelog()
  loadLocalReadme()
})
const getel = (el) => {
  let dom = "";

  function fn(el) {
    if(el.className === 'markdown-body'){
      dom = el
    }else
    if (el.parentElement.className === 'markdown-body') {
      dom = el.parentElement
    } else {
      return fn(el.parentElement)
    }
  }
  fn(el)
  return dom
}
const handleMouseDown = (e) => {
  if (e.button === 2) {
    e.preventDefault()
    const dom = getel(e.target)
    const div = document.createElement('div')
    div.innerHTML = dom.outerHTML
    div.style.width = '100%'
    div.style.height = '100%'
    container.value.innerHTML = div.innerHTML
    dialogVisible.value = true
  }
}
function handleContextMenu(e) {
  e.preventDefault()
}
onMounted(() => {
  window.addEventListener('contextmenu', handleContextMenu)
})

onBeforeUnmount(() => {
  window.removeEventListener('contextmenu', handleContextMenu)
})
async function loadLocalChangelog() {
  try {
    const res = await fetch(`https://yourhhh.github.io/zztoolDocument/CHANGELOG.md?timestamp=${zztool.getTimeStamp()}`)
    if (!res.ok) throw new Error('无法加载 CHANGELOG.md')
    const markdown = await res.text()

    marked.setOptions({
      highlight: (code, lang) => {
        const validLang = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language: validLang }).value
      }
    })
    changelogHtml.value = marked.parse(markdown)
  } catch (err) {
    changelogHtml.value = `<p style="color: red;">${err.message}</p>`
  }
}
async function loadLocalReadme() {
  try {
    const res = await fetch(`https://yourhhh.github.io/zztoolDocument/README.md?timestamp=${zztool.getTimeStamp()}`)
    if (!res.ok) throw new Error('无法加载 README.md')
    const markdown = await res.text()

    marked.setOptions({
      highlight: (code, lang) => {
        const validLang = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language: validLang }).value
      }
    })

    readmeHtml.value = marked.parse(markdown)
  } catch (err) {
    readmeHtml.value = `<p style="color: red;">${err.message}</p>`
  }
}


</script>

<style>
@import 'github-markdown-css/github-markdown.css';

.md {
  height: 500px;
  overflow: auto;
  box-shadow: 0px 0px 3px 1px #bfbfbf;
  border-radius: 10px;
}

.markdown-body {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  line-height: 1.6;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

.markdown-body pre {
  background: #f6f8fa;
  padding: 10px;
  border-radius: 6px;
}
</style>
