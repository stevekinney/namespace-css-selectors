# Namespace CSS Selectors

```js
const namespaceCSS = require('namespace-css-selectors');
const css = `div { color: red }`;

namespaceCSS(css, '.marshmallow');
// .marshmallow div { color: red }
```

This module provides you and your family with a function that prefixes CSS selector. It's useful when you want to accept user input for styles, but you don't want them to be applied globally.

Here is an example:

```html
<style>
  p { color: blue };
</style>

<p>Outside</p>

<div class="inside">
  <style>
    p { color: red; }
  </style>
  <p>Inside</p>
</div>
```

In this situation, both paragraphs are going to be red. Gross. What if we rewrote the CSS inside of the div so that the global `p` selector was `.inside p` instead?

```js
const scopeCSS = require('namespace-css-selectors');

const inside = document.querySelector('.inside style');

inside.innerText = scopeCSS(inside.innerText, '.inside');
```

The result would now be:

```html
<style>
  p { color: blue };
</style>

<p>Outside</p>

<div class="inside">
  <style>
    .inside p { color: red; }
  </style>
  <p>Inside</p>
</div>
```

Pretty cool.
