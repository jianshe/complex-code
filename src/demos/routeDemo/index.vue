<template>
  <div>
    <h1>Vue Router Example</h1>
    <router-link to="/page1/1">Go to Page 1</router-link>
    <router-link to="/page2/2">Go to Page 2</router-link>

    <router-view></router-view>
  </div>
</template>
  
  <script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("Before entering the route component");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Before updating the route component");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Before leaving the route component");
    next();
  },
};
</script>
  