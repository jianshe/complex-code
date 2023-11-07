<template>
    <div>
      <h2>Page 2</h2>
    </div>
  </template>
  
  <script>
  export default {
    beforeRouteEnter(to, from, next) {
      console.log('Before entering Page 2');
      next();
    },
    beforeRouteUpdate(to, from, next) {
      console.log('Before updating Page 2');
      next();
    },
    beforeRouteLeave(to, from, next) {
      console.log('Before leaving Page 2');
      next();
    },
  };
  </script>
  