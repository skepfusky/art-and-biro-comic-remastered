<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div id="wrapper">
      <div id="header-logo">
        <img src="" alt="Site logo">
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/comic">Comic</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#wrapper {
  padding: 2.25ex 1.75rem;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  column-gap: 1rem;
}

.router-link-active {
  color: orange;
  transition: color 200ms ease-in-out;
}
</style>
