<template>
  <form-demo></form-demo>
</template>

<script>
import { ref } from "vue";
import FormDemo from "./demos/formDemo/index.vue";
import Layout from "./components/Layout.vue"
export default {
  components: {
    Layout,
    FormDemo,
  },
  setup() {
    const formData = ref({
      username: "",
      password: "",
    });

    const onSubmit = () => {
      // 在这里执行表单提交逻辑
      // 可以在这里验证和提交formData数据
      console.log("Form submitted with data:", formData.value);
    };

    return {
      formData,
      onSubmit,
    };
  },
};
</script>

<style scoped>
</style>
