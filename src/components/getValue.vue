<script lang="ts" setup>
const strCode = `
/**
 * 获取索引值
 * 仅适用于对象嵌套，支持以下形式：
 * - 'xxx.xxx.xxx' 形式
 * - 'xxx[0].yyy' 形式
 * - [xxx, xxx, xxx] 形式
 * @param obj 目标对象
 * @param path 访问路径
 * @returns 目标值或空字符串
 */
const obj = {
    name: 'zz',
    age: 18,
    address: {
        city: 'beijing',
        street: 'chaoyang',
        house: [
            {
                room: '101',
                people: {
                    name: 'zz',
                    age: 18,
                },
            },
            {
                room: '102',
                people: {
                    name: 'zz',
                }
            }
        ]
    }
}
console.log(zztool.getValue(obj, 'address.house[0].people.name'))
`

</script>
<template>
    <InputText :contents="strCode"></InputText>
</template>