import { createStore } from "vuex";
<<<<<<< HEAD
import ContextMenu from "@/store/modules/ContextMenu.js"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    ContextMenu
  },
=======
import auth from './modules/auth'
export default createStore({
  modules: {auth},
>>>>>>> 9bacaec1cd6fc809ecfdbeed5c2598f6f4f2e134
});
