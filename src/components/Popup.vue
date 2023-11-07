<template>
  <div class="popup" v-if="visible">
    <div class="popup-content">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title", "string", "visible"],
  emits: ["closePopup"],
  setup(props, { emit }) {
    const closePopup = () => {
      emit("closePopup", false);
    };
    return {
      closePopup,
    };
  },
});
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

button {
  margin-top: 10px;
}
</style>
