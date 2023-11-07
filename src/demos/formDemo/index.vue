<template>
  <div>
    <h2>表单form组件</h2>
    <my-form ref="form" :model="formData" :rules="rules">
      <my-form-item label="名称" prop="name">
        <my-input v-model="formData.name" />
      </my-form-item>
      <my-form-item>
        <button @click="onSubmit">提交</button>
      </my-form-item>
    </my-form>
    <hr />
  </div>
</template>
<script>
import { reactive, getCurrentInstance } from "vue";

import MyInput from "../../components/MyInput";
import MyForm from "../../components/MyForm";
import MyFormItem from "../../components/MyFormItem";
export default {
  components: {
    MyForm,
    MyFormItem,
    MyInput,
  },
  setup() {
    const formData = reactive({ name: "" });
    const rules = {
      name: [{ required: "true", message: "请输入名称" }],
    };
    const { proxy } = getCurrentInstance();
    const onSubmit = (e) => {
      e.preventDefault();
      proxy.$refs.form.validate((valid) => {
        console.log("valid", valid);
        if (valid) {
          console.log(formData);
        }
      });
    };
    return { formData, rules, onSubmit };
  },
};
</script>