<script setup lang="ts">
definePageMeta({
  title: "Yes",
  layout: "default",
});

const backers = [
  "Hui",
  "Chanyeol",
  "Jae",
  "Jungkook",
  "Seokjin",
  "Jinho",
  "Jimin",
  "Namjoon",
  "Suga",
  "Hoseok",
];
</script>

<template>
  <div>
    <BaseHead :is-default-index="true" />
    <main>
      <section>
        <!-- Hero header -->
        <span class="font-memoir">font test</span>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <h4>heading 4</h4>
        <h5>heading 5</h5>
      </section>
      <section>
        <!-- Main content -->
      </section>
      <section>
        <!-- Characters -->
      </section>
      <section>
        <!-- Kickstarter -->
        <div v-for="backer in backers">
          {{ backer }}
        </div>
      </section>
      <section>
        <!-- other works -->
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@use "../assets/global.scss" as *;
</style>
