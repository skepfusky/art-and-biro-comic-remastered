<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/comic">Comic</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  column-gap: 1rem;
}

.router-link-active {
  color: orange;
  transition: color 200ms ease-in-out;
}
</style>
