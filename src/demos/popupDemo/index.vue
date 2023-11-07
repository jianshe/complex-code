<template>
  <div>
    <button @click="showPopup">Show Popup</button>
    <Popup
      :visible="isPopupVisible"
      title="Sample Popup"
      message="This is a simple popup message."
      @closePopup="closePopup"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import Popup from "../../components/Popup.vue";
export default defineComponent({
  components: {
    Popup,
  },
  setup() {
    const isPopupVisible = ref(false);
    const showPopup = () => {
      isPopupVisible.value = true;
    };
    const closePopup = () => {
        isPopupVisible.value = false
    }
    return {
      showPopup,
      closePopup,
      isPopupVisible,
    };
  },
});
</script>