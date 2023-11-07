import { createRouter, createWebHashHistory } from "vue-router";
import Page1 from "../components/routeLifecycle/page1.vue";
import Page2 from "../components/routeLifecycle/page2.vue";
const routes = [
  {
    path: "/",
    name: "page1",
    component: Page1,
  },
  {
    path: "/page1/:id",
    name: "page1",
    component: Page1,
  },
  {
    path: "/page2/:id",
    name: "page2",
    component: Page2,
  },
];

const index = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default index;
