import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "nprogress/nprogress.css";

window.bootstrap = require("bootstrap")

createApp(App).use(store).use(router).mount("#app");
