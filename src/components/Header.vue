<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon" />
      </div>
      <div class="nav">
        <img :src="menuIcon" @click.prevent="openDrawer = !openDrawer" />
      </div>

      <md-drawer :md-active.sync="openDrawer" :md-right="true" />
    </div>
  </header>
</template>

<script>
import Logo from "@/assets/images/logo.png";
import Menu from "@/assets/images/menu.png";
export default {
  name: "Header",
  data() {
    return {
      logoIcon: Logo,
      menuIcon: Menu,
      openDrawer: false,
    };
  },
};
</script>
