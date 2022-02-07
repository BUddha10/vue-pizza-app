<template>
<!-- eslint-disable prettier/prettier -->
  <div class="container menu_container">
    <div class="top" v-scroll-reveal.reset>
      <h2>Menu</h2>
    </div>
    <div class="buttons" v-scroll-reveal.reset="{ delay: 250 }">
      <md-button
        v-for="(button, i) in buttons"
        :key="i"
        :class="button.active ? 'md-raised' : ''"
        @click="changeMenu(button.name)"
      >
        {{ button.name }}
      </md-button>
    </div>
    <div class="products_items" v-scroll-reveal.reset="{ delay: 500 }">
      <md-card
        v-for="(product, i) in products"
        :key="i"
        v-show="product.type === activeProduct"
      >
        <md-card-media md-ratio="16:9">
          <img :src="product.img" />
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{ product.name }}</div>
          <div class="md-subhead">${{ product.cost }}</div>
        </md-card-header>
        <md-card-content>{{ product.detail }}</md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
import burger_chicken from "./../assets/images/products/burger_chicken.png";
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
      products: [
        {
          name: "burger_chicken",
          type: "pizza",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "burger",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "salat",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "pizza",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "pizza",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "dessert",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "burger",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "pizza",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "salat",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_chicken",
          type: "burger",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
      ],
      activeProduct: "pizza",
    };
  },
  methods: {
    changeMenu(value) {
      this.buttons.forEach((item) => {
        if (item.name === value) {
          item.active = true;
          this.activeProduct = value;
        } else {
          item.active = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.md-card {
  width: 32%;
  margin-bottom: 20px;
}

.products_items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
