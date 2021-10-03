<template>
  <div class="d-flex">
    <Button :action="decrement" content="-" class="round-button" />
    <input
      type="text"
      v-model="counter"
      class="form-control w-50 text-center"
    />
    <Button :action="increment" content="+" class="round-button" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Quantity",
  props: ["count", "item"],
  components: {
    Button,
  },
  data() {
    return {
      counter: this.count,
    };
  },
  methods: {
    increment() {
      this.counter++;
      this.$store.dispatch("cart/INCREASE_ITEM_QUANTITY", this.item);
    },
    decrement() {
      this.counter--;
      this.$store.dispatch("cart/DECREASE_ITEM_QUANTITY", this.item);
    },
  },
};
</script>

<style scoped></style>
