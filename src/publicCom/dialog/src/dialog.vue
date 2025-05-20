<script lang="ts">
import {ref, defineComponent, onMounted, watch, onUnmounted} from 'vue';
import {dialogProps} from "./attribute"
import {CptButton} from "../../button/index"

export default defineComponent({
  name: 'CptDialog',
  props: dialogProps,
  emits: ['update:modelValue', 'close', 'enter'],
  comments: {
    CptButton
  },
  setup(prop, {emit}) {
    const pointX = ref();
    const pointY = ref();
    const is = ref(false)
    
    const width = ref(prop.width);
    
    const bg = ref();
    const content = ref();
    
    // const head = ref();
    function closeDialog(type = "") {
      if (type == 'bg' && !prop.bgClose) return;
      reset();
      close();
    }
    
    function enterTransitionFn() {
      content.value.style.transition = 'all 0.3s ease-in-out';
      // content.value.style.top = '20%';
      content.value.style.top = '0%';
      content.value.style.left = '50%';
      content.value.style.transform = "scale(1) translate(-50%, 0)";
      // 移除事件
      content.value.removeEventListener('transitionend', enterTransitionFn);
    }
    
    function leaveTransitionFn() {
      content.value.style.width = 0;
      content.value.style.left = 0;
      content.value.style.top = 0;
      content.value.style.transition = '';
      content.value.style.transform = ``;
      content.value.removeEventListener('transitionend', leaveTransitionFn);
      is.value = false;
      emit('update:modelValue', false);
    }
    
    function enter(x: any, y: any) {
      is.value = true;
      content.value.style.width = width + 'px';
      content.value.style.left = x + 'px';
      content.value.style.top = y + 'px';
      content.value.style.transition = 'all 1ms ease-in-out';
      content.value.style.transform = `scale(0) translate(${0}px,${0}px)`;
      content.value.addEventListener('transitionend', enterTransitionFn)
    }
    
    function documentDown(e: any) {
      if (is.value) return;
      pointX.value = e.clientX;
      pointY.value = e.clientY;
    }
    
    function documentKeydown(e: any) {
      if (e.keyCode == 27) {
        closeDialog()
      }
    }
    
    function changePoint() {
      document.body.addEventListener('mousedown', documentDown)
      // 监听按下esc
      document.body.addEventListener('keydown', documentKeydown)
    }
    
    function reset() {
      content.value.style.width = width + 'px';
      content.value.style.left = pointX.value + 'px';
      content.value.style.top = pointY.value + 'px';
      content.value.style.transform = "scale(0) translate(0px, 0px)";
      content.value.addEventListener('transitionend', leaveTransitionFn)
    }
    
    function close() {
      emit('close', true)
    }
    
    function BtnEnter() {
      emit('enter', true)
    }
    
    changePoint();
    onMounted(() => {
    
    })
    onUnmounted(() => {
      document.body.removeEventListener('mousedown', documentDown)
      document.body.removeEventListener('keydown', documentKeydown)
    })
    watch(() => prop.modelValue, (newVal) => {
      setTimeout(() => {
        if (newVal) {
          enter(pointX.value, pointY.value);
        }
      });
    })
    return {
      bg,
      content,
      closeDialog,
      BtnEnter,
      prop,
      reset
    }
  }
});
</script>
<template>
  <teleport to='body'>
    <div class="CptAlert" v-show="prop.modelValue">
      <div ref="bg" class="bg" @click="closeDialog('bg')"></div>
      <div ref="content" class="content" :style="{ width: width }">
        <div class="head" :style="{ background: headBg, color: headColor }" ref="head" v-if="headShow">
          {{ title }}
          <!-- <el-icon v-if="iconShow" @click="closeDialog"  class="icon"><Close /></el-icon> -->
        </div>
        <div class="body">
          <slot></slot>
        </div>
        <div class="btn" v-if="footShow">
          <Cpt-button :type="leaveType" v-if="leaveShow" :style="{ color: leaveColor }"
                      @click="closeDialog">{{ leaveText }}
          </Cpt-button>
          <Cpt-button :type="enterType" v-if="enterShow" :style="{ color: enterColor }"
                      @click="BtnEnter">{{ enterText }}
          </Cpt-button>
        </div>
      </div>
    </div>
  </teleport>
</template>
<style scoped>
@import "../style/style.css";
</style>