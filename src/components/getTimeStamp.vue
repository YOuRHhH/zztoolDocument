<script lang="ts" setup>
const strCode = `
/**
 * 获取时间戳
 * @param {*} date
 * @param {*} mill 是否返回毫秒级时间戳
 * @returns
 */
console.log(zztool.getTimeStamp())
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>