<script setup lang="ts">
const menu = [
  {
    name: "Home",
    path: "/",
  },
  // {
  //   name: "About",
  //   path: "/about",
  // },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Fan Art",
    path: "/fan-art",
  },
];
</script>

<template>
  <header>
    <div id="base-wrapper">
      <div id="site-logo">
        <NuxtLink to="/"><img src="" alt="Site logo" /></NuxtLink>
      </div>
      <ul role="navigation">
        <li v-for="item in menu">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
#base-wrapper {
  display: flex;
  justify-content: space-between;
}

ul {
  display: flex;
  justify-content: space-between;
  column-gap: 1.35rem;
}
</style>
