<script lang="ts" setup>
const strCode = `
/**
 * 获取两个日期之间的日期
 * @param {*} date
 * @param {*} date1
 * @param {Boolean} days 返回天数
 * @returns {Array}
 */
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15',true))
console.log(zztool.getBetweenDate('2024-06-01', '2024-06-15'))
`
</script>
<template>
  <InputText :contents="strCode"></InputText>
</template>