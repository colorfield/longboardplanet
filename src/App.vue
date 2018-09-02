<template>
  <div id="app">
    <app-header/>
    <!-- @todo call to action -->
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from "./components/AppFooter";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import "./assets/css/prismic-edit-button.css";
@import "./assets/css/app.css";
</style>
