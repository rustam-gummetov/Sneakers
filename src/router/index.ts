import { createRouter, createWebHistory } from "vue-router";

// import { HomeView } from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/`,
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: `/products`,
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: `/cart`,
      component: () => import("@/views/CartView.vue"),
    },
  ],
});

export default router;
