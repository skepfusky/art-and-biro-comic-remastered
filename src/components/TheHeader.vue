<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
     <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
</template>