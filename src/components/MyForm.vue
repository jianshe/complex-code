<!--处理表单整体校验(收集所有my-form-item的Validate)、表单data维护，表单rules校验规则维护 -->
<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
// 核心功能：
// 接受model，保存表单数据  接受校验规则  提供表单整体校验方法validate，调用子组件my-form-item的校验方法。

import { provide, reactive, toRefs, getCurrentInstance } from "vue";
export default {
  name: "my-form",
  props: {
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const fields = reactive([]);

    const validate = (cb) => {
      const tasks = fields.map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => {
          console.log("catch-false");
          cb(false);
        });
    };
    proxy.$sub("ti.form.addField", (field) => {
      field && fields.push(field[0]);
    });

    const tiForm = reactive({
      ...toRefs(props),
    });
    provide("tiForm", tiForm);

    return { fields, validate };
  },
};
</script>