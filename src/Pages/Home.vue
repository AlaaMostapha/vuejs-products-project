<template>
  <div>
    <div>Home page</div>
    <button @click='setCounnt'>Set count</button>
    <div v-if='isLoading'>loading...</div>
    <div v-for="(product, index) in products" :key="index">
    {{product.title}}
    </div>
  </div>
</template>

<script>
import { mapState ,mapGetters } from "vuex";
export default {
  name: "Home",
  data(){
    return{
    }
  },
  computed: {
    ...mapState("common",["isLoading"]),
    ...mapState("products",["products"]),
    ...mapGetters(["products/products"]),
  },
  methods: {
    setCounnt(){
      this.$store.dispatch('products/RECIEVE_PRODUCTS')
    }
  }
};
</script>

<style scoped></style>
