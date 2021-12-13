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
    alias: "/home",
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
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
    import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
    meta: {title: "Page not Found"}
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }
  },
});

router.beforeEach((to, from) => {
  document.title = `${to.meta.title}`;
})

export default router;
