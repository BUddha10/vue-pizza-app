<template>
  <div>
    <app-header />
    <app-featured />
    <app-menu />
    <app-call-us />
    <app-news-letter />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import AppFeatured from "@/components/Featured/Index.vue";
import AppMenu from "@/components/Menu.vue";
import AppCallUs from "@/components/CallUs/Index.vue";
import AppNewsLetter from "@/components/NewsLetter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppFeatured,
    AppMenu,
    AppCallUs,
    AppNewsLetter,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
