<template>
  <div class="container menu_container">
    <div class="top">
      <h2>Menu</h2>
    </div>
    <div class="buttons">
      <md-button
        v-for="(button, i) in buttons"
        :key="i"
        :class="button.active ? 'md-raised' : ''"
        @click="changeMenu(button.name)"
      >
        {{ button.name }}
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      buttons: [
        {
          name: "pizza",
          active: true,
        },
        {
          name: "burger",
          active: false,
        },
        {
          name: "salat",
          active: false,
        },
        {
          name: "dessert",
          active: false,
        },
      ],
    };
  },
  methods: {
    changeMenu(value) {
      this.buttons.forEach((item) => {
        if (item.name === value) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
  },
};
</script>
