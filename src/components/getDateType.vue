<script lang="ts" setup>
const strCode = `
/**
 * 获取日期类型
 * @param date
 * @param type
 * @returns
 */
const date = zztool.getDateType('2023-6-15',"Y/M/D")
console.log(date)
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>