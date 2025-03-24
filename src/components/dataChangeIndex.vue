<script lang="ts" setup>
const strCode = `
// dataChangeIndex 不会修改源数据
  const obj = { arr: [{ oldKey: 'value1' }, { oldKey: 'value2' }] }
  const data = zztool.dataChangeIndex(obj, "arr", "Array");
  console.log(data);
  console.log('__________')
  console.log('__________')
  const data2 = zztool.dataChangeIndex(obj,'name,info','NAME,INFO');
  console.log(data2);
  console.log('__________')
  console.log('__________')
  const data3 = zztool.dataChangeIndex(obj, 'arr[0].oldKey,arr[1].oldKey', 'arr[0].newKey,arr[1].newKey');
  console.log(data3)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>