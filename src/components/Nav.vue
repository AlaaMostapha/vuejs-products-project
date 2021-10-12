<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Products</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <DropDown>
         <template v-slot:button-content>
            <img
              class="img-fluid p-2"
              :src="`https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg`"
              width="50"
            />
          </template>
          <template v-slot:menu>
            <b-dropdown-item :to="{ path: '/reviewOrder' }">
              <div class="text-center">
                Cart
                <b-badge variant="light">{{ cart.length }}</b-badge>
              </div>
            </b-dropdown-item>
          </template>
        </DropDown>
        <DropDown title="menu" id="dropdown-right" right="{true}">
          <template v-slot:button-content>
            <img
              class="img-fluid p-2"
              :src="`https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg`"
              width="50"
            />
          </template>
          <template v-slot:menu>
            <b-dropdown-item>
              View/Edit profile
            </b-dropdown-item>
            <b-dropdown-item>
              Sign out
            </b-dropdown-item>
          </template>
        </DropDown>
        <DropDown>
          <template v-slot:button-content>
            <img
              class="img-fluid p-2"
              :src="`https://lipis.github.io/flag-icon-css/flags/4x3/ar.svg`"
              width="50"
            />
          </template>
          <b-dropdown-item @click.prevent="currentLang = 'nl'">
            <img
              class="img-fluid p-2"
              src="https://lipis.github.io/flag-icon-css/flags/4x3/nl.svg"
            />
            NL
          </b-dropdown-item>
          <b-dropdown-item @click.prevent="currentLang = 'de'">
            <img
              class="img-fluid p-2"
              src="https://lipis.github.io/flag-icon-css/flags/4x3/de.svg"
            />
            DE
          </b-dropdown-item>
        </DropDown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";
import DropDown from "./DropDown";
export default {
  name: "Nav",
  components: {
    DropDown,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("cart", ["cart"]),
  },
  created() {
    console.log("created", this.cart.length);
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
}
</style>
