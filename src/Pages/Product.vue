<template>
  <div>
    <div v-if="isLoading" class='text-center'>loading...</div>
    <div v-else class="row product-details-card">
      <div class="col-md-6 align-self-center">
        <img :src="product.image" alt="product img" class="img-fluid" />
      </div>
      <div class="col-md-6 align-self-center">
        <p id="title">
          <b>{{ product.title }}</b>
        </p>
        <div class="row">
          <p class="col-md-6">
            <i>{{ product.category }}</i>
          </p>
          <p class="col-md-6">
            Rate : ⭐<i>{{ product.rating.rate }}</i>
          </p>
        </div>
        <div class="row">
          <p class="col-12">{{ product.description }}</p>
        </div>
        <div class="row justify-content-center">
          <p class="col-md-12">Price :$ {{ product.price }}</p>
          <Button
            v-if="!cart.find((item) => item.id == product.id)"
            class="col-md-8 add-to-cart-btn add-to-cart-padding"
            content="Add to Cart"
            :action="() => addItemToCart(product)"
          />
          <Quantity
            class="col-md-8"
            v-else
            :count="cart.find((item) => item.id == product.id).quantity"
            :item="product"
          ></Quantity>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "../components/Button.vue";
import Quantity from "../components/Quantity.vue";
import {addItemToCart} from "../utils/shared.js"
export default {
  name: "Product",
  components: {
    Button,
    Quantity,
  },
  methods: {
  },
  computed: {
    ...mapState("common", ["isLoading"]),
    ...mapState("product", ["product"]),
    ...mapState("cart", ["cart"]),
  },
  created() {
    this.$store.dispatch("product/RECIEVE_PRODUCT", this.$route.params.id);
    this.addItemToCart = addItemToCart
  },
};
</script>

<style lang="scss">
img {
  width: 300px;
  height: 300px;
  object-fit: contain;
}
.product-details-card {
  border: 2px solid yellow;
  padding: 20px 30px;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 33%);
}
.product-details-card {
  #title {
    font-size: 20px;
  }
  .add-to-cart-padding {
    padding: 9px;
  }
}
</style>
