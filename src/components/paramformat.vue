<script lang="ts" setup>
const strCode = `
/**
 * node环境下的formData格式 会使用"form-data"包
 */
  const params = {a: '1', b: '2'}
  const param1 = zztool.paramformat(params,'url');
  const param2 = zztool.paramformat(params,'json');
  const param3 = zztool.paramformat(params,'formData');
  console.log(param1);
  console.log(param2);
  console.log(param3);
`
</script>
<template>
    <InputText :contents="strCode" />
</template>