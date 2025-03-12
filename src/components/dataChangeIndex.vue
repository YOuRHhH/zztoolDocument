<script lang="ts" setup>
const strCode = `
// dataChangeIndex 不会修改源数据

  const obj = {
    name: "zztool",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
        name: "zztool",
        age: 18,
        sex: 1,
        address: "中国",
        hobby: ["打游戏", "看电影"],
        info: null,
    },
    arr: [
        {
        name: "zztool",
        },
        {
        name: "list",
        },
        1,2,3
    ]
  }
  const data = zztool.dataChangeIndex(obj, "name", "Name");
  console.log(data);
  console.log('__________')
  const data2 = zztool.dataChangeIndex(obj,'name,info','NAME,INFO');
  console.log(data2);
  console.log('源数据↓')
  console.log(obj)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>