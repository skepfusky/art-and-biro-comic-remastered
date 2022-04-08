<script setup lang="ts">
import { ref, onMounted } from 'vue'

const slogan = "test"

const currentSection = ref('')

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute('id')
      }
    })
  })
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
});

</script>

<template>
  <section>
    <!-- hero, embed pixijs canvas -->
    <div class="mq-wrapper">
      <!-- logotip and slogan -->
      <h2>{{ slogan }}</h2>
    </div>
    <div id="hero" class="prevent-select">
      <canvas id="canvas"></canvas>
    </div>
  </section>
  <section>
    <div class="mq-wrapper">
      <!-- synopsis -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam
        corrupti maxime corporis suscipit, repudiandae laboriosam reiciendis
        libero nesciunt, dicta, id ab alias. Numquam ducimus cumque voluptate,
        facere necessitatibus esse?
      </p>
    </div>
  </section>
  <section>
    <!-- characters -->
  </section>
  <section>
    <!-- author/developments/kickstarter -->
  </section>
</template>

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
