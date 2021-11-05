<template>
  <div class="container" >
    <div v-if="isLoading" class="text-center">loading...</div>
    <div v-else class="row products">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="col-md-4 mb-4"
      >
        <Card class="card">
          <template v-slot:title>
            <router-link :to="{ path: `/products/${product.id}` }">
              <p class="text-center">{{ product.category }}</p>
              <img
                :src="product.image"
                alt="product img"
                class="w-100 mb-2 img-fluid"
              />
            </router-link>
          </template>
          <template v-slot:body class='card'>
            <p class="title">
              {{ product.title }}
            </p>
            <div class="row justify-content-center">
              <span class="col-md-6 mb-2"> $ {{ product.price }}</span>
               <p class="col-md-6 text-right">
                Rate : ⭐<i>{{ product.rating.rate }}</i>
              </p>
              <Button
                v-if="!cart.find((item) => item.id == product.id)"
                class="col-10 add-to-cart-btn"
                content="Add to Cart"
                :action="() => addItemToCart(product)"
              />
              <Quantity
                class="col-10 justify-content-center"
                v-else
                :count="cart.find((item) => item.id == product.id).quantity"
                :item="product"
              ></Quantity>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
import Quantity from "../components/Quantity.vue";
import {addItemToCart} from "../utils/shared.js"

export default {
  name: "Home",
  components: {
    Card,
    Button,
    Quantity,
  },
  data() {
    return {
      item:{}
    };
  },
  computed: {
    ...mapState("common", ["isLoading"]),
    ...mapState("products", ["products"]),
    ...mapState("cart", ["cart"]),
  },
  methods: {
  },
  created() {
    this.$store.dispatch("products/RECIEVE_PRODUCTS");
    this.addItemToCart = addItemToCart
  },
};
</script>

<style lang="scss" scoped>
.products {
  .card {
    border: 2px solid yellow;
    padding:10px;
  }
  p {
    font-size: 12px;
    font-weight: bold;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
 
}
</style>
