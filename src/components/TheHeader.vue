<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import NavLinks from "./NavLinks.vue";
import { faBars } from "@fortawesome/free-solid-svg-icons";

defineProps<{ isComic?: boolean }>();

const headerReturn: any = document.querySelector("#header-return");
const headerReturnBtn: any = document.querySelector("#header-return-btn");


onMounted(() => {
  const headerDynamic: any = document.querySelector("header");
  window.onscroll = () => {
    if (window.matchMedia("(min-width: 720px)").matches) {
      window.scrollY > 150 ? headerDynamic.classList.add("scroll-down") : headerDynamic.classList.remove("scroll-down");
    } else {
      if (headerDynamic.classList.contains("scroll-down")) return headerDynamic.classList.remove("scroll-down");
    }
  }
});
</script>

<template>
  <header :class="isComic ? 'comic-view' : ''">
    <div id="wrapper" class="header-desktop">
      <div id="header-logo">
        <router-link to="/">
          <img src="" alt="Site logo">
        </router-link>
      </div>
      <div id="nav-wrapper">
        <NavLinks />
        <!-- <div id="lang-picker">test</div> -->
      </div>
    </div>
    <div id="wrapper" class="header-mobile">
      <button id="burger-menu-lol">
        <fa :icon="faBars" />
      </button>
      <div id="header-logo">
        <img src="" alt="Site logo">
      </div>
      <div class="mobile-menu">
        <NavLinks />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use '../assets/styles/variables.scss' as *;

header {
  position: fixed;
  display: flex;
  z-index: 10;
  height: 4.9em;
  // border: 2px solid orange;
  transition: all 300ms ease;

  &:not(.scroll-down) {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  }

  #wrapper {
    padding: 2.25ex 1.75rem;
    margin: auto;
    width: 95em;
    justify-content: space-between;
    align-items: center;
  }
}

.comic-view {
  opacity: 0.55;
  box-shadow: none !important;
  background: rgba(0, 0, 0, 0);

  &:hover{
    opacity: 1;
    background: rgba(0, 0, 0, 0.55);
  }
}

.header {
  &-desktop {
    display: flex;

    @media only screen and (max-width: $header-mq-breakpoint) {
      display: none !important;
    }
  }
  &-mobile {
    display: none;

    @media only screen and (max-width: $header-mq-breakpoint) {
      display: flex;
    }
  }
}

@supports (inset: 0 0 auto 0) {
  header {
    inset: 0 0 auto 0;
  }
}

@supports not (inset: 0 0 auto 0) {
  header {
    top: 0;
    left: 0;
    right: 0;
  }
}

.scroll-down {
  height: 4em;
  background-color: blueviolet;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.7);
}

/**
 * Mobile styles 
 */

#burger-menu-lol {
  padding: 0.5rem 0.75rem;
}

.mobile-menu {
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  nav {
    flex-direction: column;
    width: 100%;
    text-align: center;
    
    a {
      padding-block: 1.5rem;
    }

    .router-link-active {
      background: orange;
      color: #f5f5f5
    }
  }
}

@supports (inset: 0) {
  .mobile-menu {
    inset: 0;
  }
}

@supports not (inset: 0) {
  .mobile-menu {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

/**
 * Comic view styles
 */

#header-return {
  position: fixed;
  display: flex;
  z-index: 5;
  height: 4.9em;
  width: 100%;
  margin: 0 auto;
  transform: translateY(-100%);
  transition: all 300ms ease;

  &.main-header-hide {
    transform: translateY(0);
  }

  #wrapper {
    padding: 2.25ex 1.75rem;
    margin: auto;
    width: 95em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  button {
    padding: 1.5ex;
  }
}
</style>
