<template>
  <div>
    <app-header />
    <app-featured />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import AppFeatured from "@/components/Featured/Index.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppFeatured,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
