<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/comic">Comic</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <a href="#" target="_blank">Kickstarter <fa :icon="['fas', 'up-right-from-square']" size="xs" /></a>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  column-gap: 1rem;
}

a {
  transition: color 300ms ease;
}

.router-link-active {
  color: orange;
  transition: color 200ms ease-in-out;
}
</style>
