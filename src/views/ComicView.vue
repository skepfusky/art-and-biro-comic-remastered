<script setup lang="ts">
import { onMounted } from 'vue';
import TheHeader from '../components/TheHeader.vue';
import ModalItem from '../components/ModalItem.vue';

</script>

<template>
  <TheHeader :isComic=true />
  <main>
    <!-- <ModalItem>
      It's working
    </ModalItem> -->
    <h2>Comic page</h2>
    <div class="current-comic-info">
      <span>
        Page <strong>1</strong> of <strong>69</strong>
      </span>
      <span>
        <!--
          Use an icon to visualize the instructions for simplicity;
          If users had to click this part of this then a modal will
          open with the detailed instructions
        -->
        Press the up down arrow keys to navigate through the pages
      </span>
    </div>
  </main>
</template>

<style lang="scss">
.current-comic-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: green;
  padding: 1.2ex 1.25rem;
  display: flex;
  justify-content: space-between;
}
</style>
