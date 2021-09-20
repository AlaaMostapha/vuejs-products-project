<template>
  <div>
    <div>Teams page</div>
    <div v-for="(member, index) in teams" :key="index" class="card">
      <p>{{ member.name }}</p>
      <p>{{ member.job }} - {{ member.id }}</p>
      <router-link :to="{ path: `/teams/${member.id}` }">
        view Details
      </router-link>
      <br />
      <router-link :to="{ name: 'teamsDetails', params: { id: member.id } }">
        view Details using name
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["teams"],
  name: "Teams",
  data() {
    return {};
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    console.log(to, from, next);
    next();
  },
};
</script>

<style scoped>
.card {
  border: 2px solid;
  margin: 10px;
  display: inline-block;
  padding: 20px;
}
</style>
