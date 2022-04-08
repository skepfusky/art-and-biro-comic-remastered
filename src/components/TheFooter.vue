<template>
  <footer>
    <div id="wrapper">
      <div id="content" class="prevent-select">
        <p>
          This site is an attempt of revamping the layout of
          <a
            href="https://www.artandbirocomic.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            artandbirocomic.com</a>.
          It is not affiliated with the author by any means, and is not a fan
          site. The source code for this website is available on
          <a href="https://github.com/skepfusky/art-and-biro-comic-vue3">GitHub</a>.
        </p>
      </div>
      <div id="social">
        <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
        <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: green;
}

#wrapper {
  padding: 2.25ex;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
}

#content {
  flex: 1;
}

#social {
  display: flex;
  column-gap: 0.66rem;
}

p {
  width: 50%;
}
</style>
