<h1 align="center">Art & Biro Recreated</h1>

<a href="https://www.artbirocomic.com/">
  <img src="https://user-images.githubusercontent.com/94678583/162478439-1e5d9cbd-b2ae-4943-a4aa-abc05cc1adaf.png" alt="Full comic cover">
</a>

<p align="center">
  My attempt at recreating the <a href="https://www.artbirocomic.com">artbirocomic.com</a> site using
  Vue 3 and TypeScript.
</p>

## Disclaimer

This is not a source code or a one-to-one copy of the site whatsoever. This is just an attempt to
 update the website using the Vue.js framework since it wasn't updated since 2018.

## Problems

> TL;DR: This site has poor performance due to a crap load of CSS and JavaScript code loaded.

Upon dev-tooling [artbirocomic.com](https://www.artbirocomic.com/), including running Lighthouse report
and code coverage via Chrome DevToosl rises a lot of issues relating performance, unused code, and
some level of compatibility from mobile devices since it was generated via Divi, a WordPress site
builder -- hence the `wp-content` seen on some image assets and some CSS stylesheets and scripts.

![artbiro_lighthouseresults](https://user-images.githubusercontent.com/94678583/163832830-07a45e0c-5bf7-4d5d-bcad-b508ce89c46b.png)

__The code coverage of artbirocomic.com__
![code_coverage](https://user-images.githubusercontent.com/94678583/163832960-3f1f2bf9-1c2e-46b0-8b16-cf54cc38a5be.png)

### Analysis and issues

- Firstly, running Lighthouse test via Chrome DevTools has scored horribly on performance test.
This is due to unused and bulky CSS and JS code being loaded before being rendered.

- The site doesn't use HTTPS. But it'll be redirected to the secure HTTPS instead of HTTP.

- There were also a lot of issues in terms of cosmetics; for example, Art in a seesaw from the main
cover of the comic, when the site initially loads will snap from the element and start another
animation loop, is probably handled via JS since most of the animations from the hero elements
are mostly handled via JavaScript.

- A lot of JavaScript will be loaded all at once before rendering the DOM, thus increasing the
heap memory. When it starts rendering from the DOM, all the initial heap memory gets cut off
but gradually climbs up until all the elements have been loaded. This is bad as this can 
cause the website to slow down due to a really huge heap memory, accompanied with a crap load
of CSS and JS.

- A lot of inline elements *still* animate even when not shown on the viewport (or in other words
, when you scroll down the page), but the use of the InteractionObserver API is great despite being a
no-code site builder.

- There's a LOT of nested `<div>` elements, with at least being 4 or 7 on average for a certain
element. And although, it doesn't affect performance, but it varies from different browsers or
computers. The most nested element contains 54 divs!

Obviously, I cannot point most of the stuff generated from the Lighthouse report, but these are
the ones that are worth pointing out, you can find it via generating a Lighthouse report yourself.

## Other related projects

- [pandapaco drawing stats](https://github.com/OpenFurs/pandapaco-drawing-stats)
