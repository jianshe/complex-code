<template>
  <p>parent</p>
  <button @click="callChild">调用子组件的方法</button>
  <child ref="childRef"></child>
</template>

<script setup>
import { ref } from "vue";
import Child from "./child.vue";
const childRef = ref(null);
const callChild = () => {
  childRef.value.doSomething("随便传递的值 ");
};
</script>
