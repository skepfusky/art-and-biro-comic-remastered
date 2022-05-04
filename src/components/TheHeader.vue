<script setup lang="ts">
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import NavLinks from "./NavLinks.vue";
import { faBars } from "@fortawesome/free-solid-svg-icons";

onMounted(() => {
  const headerScroll: any = document.querySelector("header");

  window.onscroll = () => {
    if (window.matchMedia("(min-width: 720px)").matches) {
      window.scrollY > 150 ? headerScroll.classList.add("scroll-down") : headerScroll.classList.remove("scroll-down");
    } else {
      if (headerScroll.classList.contains("scroll-down")) return headerScroll.classList.remove("scroll-down");
    }
  }
});
</script>

<template>
  <header>
    <div id="wrapper" class="header-desktop">
      <div id="header-logo">
        <router-link to="/">
          <img src="/static/logo.png" alt="Site logo">
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

$headerHeight: 5em;
$headerHeightScroll: 6em;
$headerLogo: 6.25em;
$headerLogoScroll: 5em;

$logoTop: -1rem;
$logoTopScroll: -1.35rem;

header {
  position: fixed;
  display: flex;
  z-index: 10;
  height: $headerHeight;
  transition: all 290ms ease;
  color: #f5f5f5;

  #wrapper {
    padding: 0 1.75rem;
    position: relative;
    margin: auto;
    width: 95em;
    justify-content: space-between;
    align-items: center;
  }
}

#header-logo img {
  width: $headerLogo;
  position: absolute;
  top: $logoTop;
  transition: width 300ms ease, top 300ms ease;
}

.comic-view {
  opacity: 0.55;
  box-shadow: none !important;
  background: #0000;

  &:hover {
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
  height: $headerHeightScroll;
  background-color: #f5f5f5;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.7);

  #header-logo img {
    top: $logoTopScroll;
    width: $headerLogoScroll;
  }

  a {
    color: #202020;
  }
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
</style>
