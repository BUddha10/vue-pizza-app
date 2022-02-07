<template>
  <!-- eslint-disable  -->
  <div class="call_us_container">
    <div class="container">
      <div class="first" v-scroll-reveal.reset="{ delay: 200, scarle: 2 }">
        <h1>Hungry ?</h1>
      </div>

      <div
        class="second"
        v-scroll-reveal.reset="{
          delay: 300,
          afterReveal: () => {
            secondAnim = true;
          },
        }"
      >
        <div v-if="secondAnim">
          <call-us-anim />
        </div>
      </div>

      <div class="third" v-scroll-reveal.reset="{ delay: 600, scarle: 2 }">
        <span>Give us a call</span>
        <span> 9841000000</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import CallUsAnim from "./Anim.vue";
export default {
  name: "callUsIndex",
  data() {
    return {
      secondAnim: false,
    };
  },
  components: {
    CallUsAnim,
  },
};
</script>

<style lang="scss" scoped></style>
