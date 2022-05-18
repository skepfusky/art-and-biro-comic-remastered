<template>
  <footer>
    <div id="base-wrapper">
      <span>&copy; {{ new Date().getFullYear() }}; redesigned by @skepfuskyjs.</span>
      <span id="social-row">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-patreon"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-deviantart"></i></a>
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
#base-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#social-row {
  display: flex;
  column-gap: 1rem;

  a {
    padding: 0.33rem;
  }
}
</style>
