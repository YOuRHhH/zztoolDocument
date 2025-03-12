<script lang="ts" setup>
const strCode = `
/**
 * 根据某个字段找对应的数组或对象，如果有两个相同的数据会优先返回第一个
 * @param {*} data
 * @param {*} key
 * @param {*} value
 */
const obj = {
  name: 'zz',
  age: 18,
  sex: '男',
  height: 1.8,
  weight: 80,
  isMarried: false,
  hobby: ['reading', 'swimming', 'running'],
  address: {
    province: '北京',
    city: '北京',
    street: '西二旗',
  },
}
const data = zztool.dataFind(obj,'city','北京');
console.log(data)
`

</script>
<template>
  <InputText :contents="strCode" />
</template>