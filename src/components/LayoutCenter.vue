<!--如何让容器内部的元素水平垂直居中-->
<template>
  <div class="parent">
    <div class="child"></div>
  </div>
</template>
  
  
  <style lang="scss" scoped>
.parent {
  width: 100%;
  height: 80vh;
  background: #ccc;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  .child {
    align-items: center;
    width: 200px;
    height: 200px;
    background: #ff7400;
  }
}
</style>