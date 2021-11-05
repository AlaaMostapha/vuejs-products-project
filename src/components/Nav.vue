<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Products</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/cart">
          <div class="text-white cart-parent">
            <b-icon icon="cart-fill"></b-icon>
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
  .cart-parent {
    position: relative;
    text-align: center;
    .badge {
      position: absolute;
      left: 12px;
      bottom: 12px;
      border: 3px solid;
      padding: 0.09em 0.3em;
      font-size: 70%;
    }
  }
}
@media (max-width: 992px) {
  .cart-parent {
    text-align: left!important;
  }
}
</style>
