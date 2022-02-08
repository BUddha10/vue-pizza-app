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
import burger_deluxe from "./../assets/images/products/burger_deluxe.png";
import burger_veggie from "./../assets/images/products/burger_veggie.png";
import desert_choco from "./../assets/images/products/desert_choco.png";
import desert_cream from "./../assets/images/products/desert_cream.png";
import desert_deluxe from "./../assets/images/products/desert_deluxe.png";
import pizza_bbq from "./../assets/images/products/pizza_bbq.png";
import pizza_deluxe from "./../assets/images/products/pizza_deluxe.png";
import pizza_hawai from "./../assets/images/products/pizza_hawai.png";
import pizza_meat from "./../assets/images/products/pizza_meat.png";
import pizza_pep from "./../assets/images/products/pizza_pep.png";
import pizza_veggie from "./../assets/images/products/pizza_veggie.png";
import salat_chicken from "./../assets/images/products/salat_chicken.png";
import salat_meat from "./../assets/images/products/salat_meat.png";
import salat_nuts from "./../assets/images/products/salat_nuts.png";
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
          type: "burger",
          img: burger_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_deluxe",
          type: "burger",
          img: burger_deluxe,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "burger_veggie",
          type: "burger",
          img: burger_veggie,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "desert_choco",
          type: "desert",
          img: desert_choco,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "desert_cream",
          type: "desert",
          img: desert_cream,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "desert_deluxe",
          type: "dessert",
          img: desert_deluxe,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "pizza_bbq",
          type: "pizza",
          img: pizza_bbq,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "pizza_deluxe",
          type: "pizza",
          img: pizza_deluxe,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "pizza_hawai",
          type: "pizza",
          img: pizza_hawai,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "pizza_meat",
          type: "pizza",
          img: pizza_meat,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "pizza_pep",
          type: "pizza",
          img: pizza_pep,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "pizza_veggie",
          type: "pizza",
          img: pizza_veggie,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "salat_chicken",
          type: "salat",
          img: salat_chicken,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "salat_meat",
          type: "salat",
          img: salat_meat,
          cost: 20,
          detail:
            "Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.",
        },
        {
          name: "salat_nuts",
          type: "salat",
          img: salat_nuts,
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
