<template>
  <div class="card">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-action">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card-title {
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
}
.card {
  background-color: #fff;
  padding: 15px;
  box-shadow: 1px 1px 10px 2px rgb(0 0 0 / 33%);
}

.card-body {
  padding: 0.5rem !important;
}
</style>
