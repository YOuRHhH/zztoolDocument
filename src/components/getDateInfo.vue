<script lang="ts" setup>
const strCode = `
/**
 * 获取日期信息
 * @param str 日期字符串或 Date 对象，可为空
 * @returns {year,month,day,hour,minute,second}
 */
const date = zztool.getDateInfo('2023-6-15')
console.log(date)
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>