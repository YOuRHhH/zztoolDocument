<script lang="ts" setup>
const strCode = `
/**
 * 获取对应索引的value
 * @param obj 对象
 * @param index 索引
 * @param parentKey 父级key
 * @returns
 */
  const obj = {a:2,b:1,c:{d:1,e:[],a:'xxx'}};
  const data = zztool.getSameIndexValue(obj,'a');
  console.log(data);
`
</script>
<template>
  <InputText :contents="strCode" />
</template>