<script lang="ts" setup>
const strCode = `
// false 0 -1 不会为空
  const obj1 = {a:2,b:-1,c:{d:0,e:false}};
  const obj2 = {a:2,b:1,c:{d:1,e:[]}};
  const data1 = zztool.dataEmpty(obj1);
  const data2 = zztool.dataEmpty(obj2);
  console.log(data1);
  console.log(data2);
`
</script>
<template>
  <InputText :contents="strCode" />
</template>