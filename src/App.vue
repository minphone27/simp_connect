<template @contextmenu="showContextMenu">
  <router-view />
</template>
<script>
import ContextMenu from "@/components/ContextMenu.vue"
import { mapMutations } from "vuex"
export default {
  name: 'App',
  components: {
    ContextMenu
  },
  methods: {
    ...mapMutations("auth", [
      "setAuthData"
    ])
  },
  mounted(){
    const data = {
      token: localStorage.getItem("access"),
      refreshToken: localStorage.getItem("refresh"),
      userId: localStorage.getItem("userId")
    }
    this.setAuthData(data)
  }
}
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/functions";
// custom scss variables goes here

@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "~bootstrap/scss/bootstrap";

html{
  font-size: 100%;
}

body{
  min-width: 100vw;
  min-height: 100vh;
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}

*{
 box-sizing: border-box;

 &::before, &::after{
   box-sizing: inherit;
 }
}
</style>
