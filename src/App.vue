<template>
  <div>
    <app-header />
    <app-featured />
    <app-menu />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import AppFeatured from "@/components/Featured/Index.vue";
import AppMenu from "@/components/Menu.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppFeatured,
    AppMenu,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
