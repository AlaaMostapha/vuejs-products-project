<template>
  <div id="nav">
    <router-link to='/'>Home</router-link> |
    <router-link :to='{path:"/about"}'>About</router-link> |
    <router-link :to='{name:"teams"}'>Teams</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
}
#nav a {
  padding: 0 10px;
}
</style>