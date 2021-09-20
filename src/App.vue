<template>
  <div id="app">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      teams: [
        { id: 1, name: "Ahmed", job: "Back-end" },
        { id: 2, name: "Mohamed", job: "Mobile" },
        { id: 3, name: "Alaa", job: "Front-end" },
        { id: 4, name: "Amera", job: "Front-end" },
        { id: 1, name: "Ahmed", job: "Back-end" },
        { id: 2, name: "Mohamed", job: "Mobile" },
        { id: 3, name: "Alaa", job: "Front-end" },
        { id: 4, name: "Amera", job: "Front-end" },
        { id: 1, name: "Ahmed", job: "Back-end" },
        { id: 2, name: "Mohamed", job: "Mobile" },
        { id: 3, name: "Alaa", job: "Front-end" },
        { id: 4, name: "Amera", job: "Front-end" },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
    };
  },
  methods: {},
};
</script>

<style scoped>
main {
  padding: 5% 15%;
}
</style>
