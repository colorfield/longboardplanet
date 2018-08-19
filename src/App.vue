<template>
  <div id="app">
    <app-header/>
    <app-menu/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppMenu from "@/components/AppMenu";
import AppFooter from "./components/AppFooter";

export default {
  name: 'App',
  components: {
    AppFooter,
    AppMenu,
    AppHeader
  }
}
</script>

<style>
@import "./assets/css/prismic-edit-button.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
