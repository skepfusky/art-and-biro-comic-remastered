<script setup lang="ts">
import NavLinks from "./NavLinks.vue";
</script>

<template>
  <header>
    <div id="wrapper">
      <div id="header-logo">
        <img src="" alt="Site logo">
      </div>
      <NavLinks />
    </div>
  </header>
</template>

<style>
header #wrapper {
  padding: 2.25ex 1.75rem;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
}
</style>
