<script lang="ts" setup>
const strCode = `
/**
 * 深度比较两个对象或数组，返回是否相等或不一致的 key
 * @param {Object|Array} obj1 - 第一个对象/数组
 * @param {Object|Array} obj2 - 第二个对象/数组
 * @param {Object} options - 配置项
 * @param {boolean} options.returnKeys - 是否返回不一致的 key（默认 false）
 * @param {boolean} options.arrayDiff - 是否检查数组内差异（默认 true）
 * @returns {boolean | string[]} - 相等返回 false，不相等返回 true 或不同 key
 */
// 会对比每一项
  const obj1 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
      name: "zhangsan",
      age: 18,
      sex: 1,
      address: "xxxx", 
      hobby: ["打游戏", "看电影"],
      arr:{
        name: "zhangsan",
        age:'1'
      },
      info: null,
    },
    prople:[
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "xxx", age: 25 },
    ],
    arr: [
      {
        name: "git",
        lng:10,
      },
      {
        name: "hub",
        lng:30,
      }
    ],
    arrs:[1,2,3,4,5],
  }
  const obj2 = {
    name: "z",
    age: 18,
    sex: 1,
    address: "中国",
    hobby: ["打游戏", "看电影"],
    info: {
      name: "zhangsan",
      age: 18,
      sex: 1,
      address: "xxxx", 
      hobby: ["打游戏", "看电影"],
      arr:{
        name: "zhangsan",
        age:'1'
      },
      info: null,
    },
    prople: [
      { name: "Alice", age: 30 },
      { name: "Charlie", age: 25 }
    ],
    arr: [
      {
        name: "hub",
        lng:20,
      },
      {
        name: "git",
        lng:10,
      }
    ],
    arrs:[1,2,3,4,5],
  }
  // 第一个参数为修改后的数据，第二个参数为修改前的数据
  const data = zztool.dataEqual(obj1,obj2);
  const data1 = zztool.dataEqual(obj1,obj2,{returnKeys:true});
  /**
   * data1值为
   * ["prople.1.name","arr.0.name","arr.0.lng","arr.1.name","arr.1.lng"];
   * 可以使用getValue获取值
   */
  console.log(data)
  console.log(data1)

  for(let i = 0; i < data1.length; i++){
    console.log(zztool.getValue(obj1,data1[i]))
  }
`
</script>
<template>
  <InputText :contents="strCode" />
</template>