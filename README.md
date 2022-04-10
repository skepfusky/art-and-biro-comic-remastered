<h1 align="center">Art & Biro Recreated</h1>

<a href="https://www.artbirocomic.com/">
  <img src="https://user-images.githubusercontent.com/94678583/162478439-1e5d9cbd-b2ae-4943-a4aa-abc05cc1adaf.png" alt="Full comic cover">
</a>

<p align="center">
  My attempt at recreating the <a href="https://www.artbirocomic.com">artbirocomic.com</a> site using Vue 3 and TypeScript.
</p>

## Disclaimer

This is not a source code or a one-to-one copy of the site whatsoever. This is just an attempt to 
update the website using the Vue.js framework since it wasn't updated since 2018.

## Problems

Upon dev-tooling [artbirocomic.com](https://www.artbirocomic.com/) rises a lot of issues relating to performance and
some level of compatibility from mobile devices since it was generated via Divi, a WordPress site
builder -- hence the `wp-content` seen on some image assets and some CSS stylesheets and scripts.

- There's a LOT of nested `<div>` elements, with at least being 4 or 7 for a certain element. And
although, it doesn't affect performance, but it varies from different browsers or computers.

- A lot of inline elements *still* animate even when not shown on the viewport (or in other words
, when you scroll down the page), but the use of the InteractionObserver is great despite being a
no-code site builder. And to top it all off, there's probably a lot of dead JS code that causes
a lot of heap memory.

## Other related projects

- [pandapaco drawing stats](https://github.com/OpenFurs/pandapaco-drawing-stats)
