<script setup lang="ts">
import { ref, onMounted } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import CharacterItem from "../components/CharacterItem.vue";

const slogan = "test";

const currentSection: any = ref("");

onMounted(() => {
  // #region InteractionObserver crap
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute("id");
      }
    });
  });
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  // #endregion

  // #region Vanilla Parallax shit
  // const parallax = document.querySelectorAll("#comic-masonry-layout");

  // #endregion

});
</script>

<template>
  <TheHeader />
  <main>
    <section>
      <!-- parallax and masonry layout test -->
      <div class="mq-wrapper">

        <div id="character-container">
          <h2>Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            doloribus, nihil labore alias autem neque hic natus? In omnis atque
            rem?
          </p>
          <img src="" alt="" />
        </div>
      </div>
      <div id="comic-masonry-layout">
        <!-- TODO: Put comic pages, at least 6 randomly depending on the character -->
        <!-- TODO: Ugh, time to put this on a component lol -->
      </div>
    </section>
    <section>
      <div class="mq-wrapper">
        <!-- logotip and slogan -->
        <h2>{{ slogan }}</h2>
      </div>
      <div id="hero" class="prevent-select"></div>
    </section>
    <section>
      <div class="mq-wrapper">
        <!-- synopsis -->
        <!-- TODO: Make these fonts responsive to viewport via CSS clamp() -->
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aliquam corrupti maxime corporis suscipit, repudiandae laboriosam
          reiciendis libero nesciunt, dicta, id ab alias. Numquam ducimus cumque
          voluptate, facere necessitatibus esse?
          <CharacterItem imgUrl="/static/logo.png" imgAlt="asdasd"/>
        </p>
      </div>
    </section>
    <section>
      <!-- characters -->
    </section>
    <section>
      <!-- author/developments/kickstarter -->
    </section>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
p {
  text-align: center;
}

section {
  height: 40vh;
}
</style>
