import { createRouter, createWebHashHistory } from "vue-router";

import page1 from "../pages/page1.vue";
import page2 from "../pages/page2.vue";
import page3 from "../pages/page3.vue";
import page4 from "../pages/page4.vue";

const routes = [
  { path: "/", name: "page1", component: page1 },
  { path: "/page2", name: "page2", component: page2 },
  { path: "/page3", name: "page3", component: page3 },
  { path: "/page4", name: "page4", component: page4 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
