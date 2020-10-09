<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar v-if="tabbarShow"></Tabbar>
  </div>
</template>

<script>
import { obj } from "../static/utils.js";
import Tabbar from "./components/Tabbar";
console.log(obj);
export default {
  data() {
    return {
      tabbarShow: true,
    };
  },
  name: "App",
  mounted() {
    obj.setRem();
  },
  components: {
    Tabbar,
  },
  watch: {
    $route(to, from) {
      // console.log("watch $route(to,from), ", to, from);
      if (to.name == "login" || to.name == "login2") {
        this.tabbarShow = false;
      } else {
        this.tabbarShow = true;
      }
    },
  },
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
