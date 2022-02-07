import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { MdButton, MdDrawer, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import VueScrollReveal from "vue-scroll-reveal";

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px'
});

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
