<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { obj } from "../static/utils.js";
import Tabbar from '../src/components/Tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  },
  mounted() {
    obj.setRem();
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
}
</style>
