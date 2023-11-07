<template>
  <!-- <form-demo></form-demo> -->
  <!-- <Layout></Layout> -->
  <!-- <LayoutCenter></LayoutCenter> -->
  <!-- <ParentComponent></ParentComponent> -->
  <!-- <Popup-demo></Popup-demo> -->
  <!-- <ParentComp></ParentComp> -->
  <RouteDemo></RouteDemo>
</template>

<script>
import { ref } from "vue";
import FormDemo from "./demos/formDemo/index.vue";
import PopupDemo from "./demos/popupDemo/index.vue";
import RouteDemo from "./demos/routeDemo/index.vue"
// import Layout from "./components/Layout.vue"
import LayoutCenter from "./components/LayoutCenter.vue";
import ParentComp from "./components/communite/ParentComp";

// import ParentComponent from "./components/iframe/ParentComponent.vue";
export default {
  components: {
    // Layout,
    RouteDemo,
    PopupDemo,
    LayoutCenter,
    FormDemo,
    ParentComp,
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
