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
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
@import "./assets/css/app.css";
</style>
