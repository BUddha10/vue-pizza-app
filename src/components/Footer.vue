<template>
  <footer>
    <div class="container">
      <div>
        <img :src="logoIcon" />
        <div class="contact">
          <div>Call Us</div>
          <div>9841000000</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "@/assets/images/logo.png";
export default {
  name: "Footer",
  data() {
    return {
      logoIcon: Logo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
