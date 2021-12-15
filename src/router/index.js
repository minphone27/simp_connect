import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";



const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {title: "Login"}
  },
  {
    path: "/",
    name: "Home",
    alias: "/home",
    component: () => 
    import(/* webpackChunkName: "Home" */ "@/views/Index.vue"),
    meta: {
      requiredAuth:true,
      title: "Home"
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      meta: {
        requiredAuth:true,
        title: "About"
      }
  },
  {
    path: "/dashboard/:id",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Dashboard.vue"),
    meta: {
      requiredAuth:true,
      title: "Dashboard"
    }
  },
  {
    path: "/form-responses/:id",
    name: "SimpConnect",
    component: () => 
      import("@/views/SimpConnect.vue"),
    meta: {title: "Form-responses"}
  },
  {
    path: "/dashboard/student-detail/:id",
    name: "StudentDetail",
    component: () =>
      import("@/views/StudentDetail.vue"),
    meta: {title: "Student-Detail"}
  },
  {
    path: "/dashboard/record-detail/:id",
    name: "RecordDetail",
    component: () =>
      import("@/views/RecordDetail.vue"),
    meta: {title: "Record-Detail"}
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
    import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
    meta: {
      title: "Page not Found"
    }
  }
]

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


export default router;
