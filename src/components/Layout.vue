<!--左侧固定右侧自适应-->
<template>
  <div class="container">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>


<style lang="scss" scoped>
// 1. flex + flex-grow
// .container {
//   width: 100%;
//   height: 120px;
//   background: #ccc;
//   margin-bottom: 20px;
//   display: flex;
//   .left {
//     width: 200px;
//     height: 80%;
//     background: palegreen;
//   }

//   .right {
//     height: 100%;
//     background: peru;
//     flex-grow: 1;
//   }
// }
// 2. float + overflow:hiden (bfc)
// .container {
//   width: 100%;
//   height: 120px;
//   background: #ccc;
//   margin-bottom: 20px;
//   .left {
//     width: 200px;
//     height: 80%;
//     background: palegreen;
//     float: left;
//   }

//   .right {
//     height: 100%;
//     background: peru;
//     overflow: hidden;
//   }
// }
// 3. flat + margin-left
// .container {
//   width: 100%;
//   height: 120px;
//   background: #ccc;
//   margin-bottom: 20px;
//   .left {
//     width: 200px;
//     height: 80%;
//     background: palegreen;
//     float: left;
//   }

//   .right {
//     height: 100%;
//     background: peru;
//     margin-left: 200px;
//   }
// }

/* 4. float + padding-left */
//  .container {
//   width: 100%;
//   height: 120px;
//   background: #ccc;
//   margin-bottom: 20px;
//   .left {
//     width: 200px;
//     height: 80%;
//     background: palegreen;
//     float: left;
//   }

//   .right {
//     height: 100%;
//     background: peru;
//     padding-left: 200px;
//   }
// }
// 5. calc .left .right float:left
.container {
  width: 100%;
  height: 120px;
  background: #ccc;
  margin-bottom: 20px;
  .left {
    width: 200px;
    height: 80%;
    background: palegreen;
    float: left;
  }

  .right {
    height: 100%;
    background: peru;
    float: left;
    width: calc(100% - 200px);
  }
}
</style>