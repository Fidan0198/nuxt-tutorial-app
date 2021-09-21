<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <nav class="nav">
      <div class="nav__link">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/About">About</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/List">List</nuxt-link>
      </div>
    </nav>
  </header>
</template>
<script>
import logo from "~/components/Logo.vue";
export default {
  name: "nav-bar",
  components: {
    logo
  }
};
</script>
<style>
</style>


