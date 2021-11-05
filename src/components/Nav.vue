<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Products</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/reviewOrder">
          <div class="text-center text-white">
            Cart
            <b-badge variant="light">{{ cart.length }}</b-badge>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Nav",
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
  created() {
    console.log("created", this.cart.length);
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #383d41 !important;
  .nav-link {
    color: rgba(255, 255, 255, 72%);
  }
  .nav-link.router-link-active.router-link-exact-active {
    color: #fff;
  }
}
</style>
