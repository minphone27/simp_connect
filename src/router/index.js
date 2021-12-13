import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Home",
    component: () => 
    import(/* webpackChunkName: "Home" */ "@/views/Index.vue"),
    meta: {title: "Home"}
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      meta: {title: "About"}
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Dashboard.vue"),
    meta: {title: "Dashboard"}
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  document.title = `${to.meta.title}`;
})

export default router;
