<template>
  <p>child</p>
</template>

<script setup>
 const doSomething = (str) => {
    console.log('子组件执行了doSomething', str)
 }
 defineExpose({
    doSomething
 })
</script>

<style>

</style>