<script lang="ts" setup>
const strCode = `
/**
 * 字符串替换
 * @param str 字符串
 * @param start 开始位置
 * @param end 结束位置
 * @param icon 替换字符
 * @returns 替换后的字符串
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * strReplace('123456789', 3, 6) // 123***789
 */
const str = "15666666666"
const data = zztool.strReplace(str, 2, 9);
console.log(data)
const str1 = "15666666666"
const data1 = zztool.strReplace(str, 2, 1000);
console.log(data1)
`
</script>
<template>
  <InputText :contents="strCode" />
</template>