<script lang="ts" setup>
const strCode = `
/**
 * 获取时间段
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} step 步长
 * @param {*} type hh:mm:ss hh:mm
 * @returns
 */
const arr = zztool.getTimeStep('01:00',"10:00");
const arr1 = zztool.getTimeStep('01:00',"10:00","00:30");
console.log("默认步长：" + arr)
console.log("步长半小时：" + arr1)
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>