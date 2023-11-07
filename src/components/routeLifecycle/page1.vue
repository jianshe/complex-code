<template>
  <div>
    <h2>Page 1</h2>
    <p>Current ID: {{ currentId }}</p>
  </div>
</template>
  

<script>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  beforeCreate() {
    console.log("beforeCreate");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  beforeRouteEnter(to, from, next) {
    console.log("Before entering Page 1");
    next(() => {
      console.log("method2");
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Before updating Page 1");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Before leaving Page 1");
    next();
  },
  mounted() {
    console.log("mounted");
  },

  setup() {
    const route = useRoute();
    const currentId = route.params.id;
    return {
      currentId,
    };
  },
});
</script>

  