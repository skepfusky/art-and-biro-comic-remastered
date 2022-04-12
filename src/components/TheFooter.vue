<template>
  <footer>
    <div id="wrapper">
      <div id="content" class="prevent-select">
        <p>
          This site is an attempt of revamping the layout of
          <a
            href="https://www.artbirocomic.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            artbirocomic.com</a>.
          It is not affiliated with the author by any means, and is not a fan
          site. The source code for this website is available on
          <a 
            href="https://github.com/skepfusky/art-and-biro-comic-vue3"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            </a>.
        </p>
        <br/>
        <p>Redesigned by @skepfuskyjs. Proudly made in Vue.js.</p>
      </div>
      <div id="social">
        <fa :icon="['fab', 'facebook']" size="lg" />
        <fa :icon="['fab', 'twitter']" size="lg" />
        <fa :icon="['fab', 'patreon']" size="lg" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables.scss' as *;

footer {
  background: green;
}

#wrapper {
  padding: 2.25ex;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;

  @media only screen and (max-width: $footer-mq-breakpoint) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

#content {
  flex: 1;
}

#social {
  display: flex;
  column-gap: 0.66rem;
}

p {
  width: 75%;
  line-height: 1.25rem;
  font-size: 0.85rem;

  @media only screen and (max-width: $footer-mq-breakpoint) {
    width: 100%;
  }
}
</style>
