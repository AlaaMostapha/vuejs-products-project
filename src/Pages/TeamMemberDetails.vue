<template>
  <div>
    Team member ({{ $route.params.id }}) details
      <p>Name: {{ member.name }}</p>
      <p>Job: {{ member.job }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamMemberDetails",
  inject: ["teams"],
  data() {
    return {
      member:{}
    };
  },
  created() {
    this.member = this.teams.find(user=>user.id==this.$route.params.id);
  },
  beforeRouteEnter() {
    console.log('beforeRouteEnter')
  },
  beforeRouteUpdate() {
    console.log('beforeRouteUpdate',this.$route.params.id)
  },
  beforeRouteLeave() {
    console.log('beforeRouteLeave',this.$route.params.id)
  }
};
</script>

<style scoped>
</style>