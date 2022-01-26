import { createRouter, createWebHashHistory } from "vue-router";

import page1 from "../pages/page1/index.vue";
import page2 from "../pages/page2/index.vue";
import page3 from "../pages/page3/index.vue";
import page4 from "../pages/page4/index.vue";
import page5 from "../pages/page5/index.vue";
import page6 from "../pages/page6/index.vue";
import page7 from "../pages/page7/index.vue";

const routes = [
  { path: "/", name: "page1", component: page1 },
  { path: "/page2",name: "/page2", component: page2 },
  { path: "/page3",name: "/page3", component: page3 },
  { path: "/page4",name: "/page4", component: page4 },
  { path: "/page5",name: "/page5", component: page5 },
  { path: "/page6",name: "/page6", component: page6 },
  { path: "/page7",name: "/page7", component: page7 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
