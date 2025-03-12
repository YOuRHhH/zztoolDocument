<script lang="ts" setup>
const strCode = `
/**
 * 获取url参数
 * @description node环境下参数必填
 * @param url url
 * @returns 参数
 */
  // 无参数则会获取url
  const url = "http://www.baidu.com?a=1&b=2";
  const param = zztool.getUrlParam(url);
  console.log(param) // {a: '1', b: '2'}
`
</script>
<template>
  <InputText :contents="strCode" />
</template>