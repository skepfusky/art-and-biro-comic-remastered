<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<style lang="scss">
@use 'assets/styles/mixins' as *;

@import 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700;1,900&display=swap';

*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.64rem;
}

a {
  text-decoration: none;
  color: #f5f5f5;
}

main {
  padding: 0 1.15rem;
}

/**********************/
/*** GLOBAL LAYOUTS ***/
/**********************/
.prevent-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.mq-wrapper {
  @include centerMargin();
}

</style>
