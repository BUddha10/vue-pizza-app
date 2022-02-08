<template>
  <div class="container newsl_container">
    <h2>Join to our newsletter</h2>

    <div class="form">
      <input type="text" v-model="email" />
      <button @click.prevent="submit_handler">Subscribe</button>
    </div>

    <div class="error_label">
      <div>{{ error }}</div>
    </div>

    <div class="success_label">
      <div>{{ success }}</div>
    </div>

    <div class="small">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        nulla earum inventore suscipit eveniet natus quasi ratione quo
        repudiandae mollitia quam, cupiditate eaque blanditiis neque nisi
        veritatis commodi ducimus atque.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsLetter",
  data() {
    return {
      email: "",
      error: "",
      success: "",
    };
  },
  methods: {
    validate(email) {
      let valid = [true, "success"];
      if (!/\S+@\S+\.\S+/.test(email)) {
        valid = [false, "Enter a valid email."];
      }
      if (email === "") {
        valid = [false, "its empty"];
      }
      return valid;
    },
    submit_handler() {
      let valid = this.validate(this.email);
      if (valid[0]) {
        this.error = "";
        this.success = valid[1];
        this.email = "";
      } else {
        this.error = valid[1];
      }
    },
  },
};
</script>
