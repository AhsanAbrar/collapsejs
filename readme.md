# CollapseJs

[![NPM version][npm-image]][npm-url]
[![MIT License][license-image]][license-url]

Lightweight Vanilla Javascript Collapse No Need any Dependency.



> It's Easy as 123, No Dependency, No Conflicts

[See Live Demo](https://ahsanabrar.github.io/collapse/)

## Installation

```bash
npm i collapsejs --save-dev
```

or use cdn

```html
<script src="https://unpkg.com/collapsejs/dist/collapsejs.min.js"></script>
```

and include this style

```css
.collapse__body {
    overflow: hidden;
    transition: height .15s;
}
```

## Concept

```html
<!-- Default -->
<div class="collapse__header">Header 1</div>
<div class="collapse__body">Body 1</div>

<div class="collapse__header">Header 2</div>
<div class="collapse__body">Body 2</div>

...
```

if you have multiple collapse on one page you need to wrap like this

```html
<!-- Collapse 1 -->
<div class="collapse-1">
  <div class="collapse__header">Header 1</div>
  <div class="collapse__body">Body 1</div>

  <div class="collapse__header">Header 2</div>
  <div class="collapse__body">Body 2</div>
</div>


<!-- Collapse 2 -->
<div class="collapse-2">
  <div class="collapse__header">Header 1</div>
  <div class="collapse__body">Body 1</div>

  <div class="collapse__header">Header 2</div>
  <div class="collapse__body">Body 2</div>
</div>
```

here is the javascript initialize code for multiple

```javascript
new collapsejs({
  container: '.collapse-1'
})

new collapsejs({
  container: '.collapse-2'
})
```


## Quick Usage

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Styles -->
  <style type="text/css">
    .collapse__body {
      overflow: hidden;
      transition: height .15s;
    }
  </style>
</head>
<body>
  <div class="collapse__header">Header 1</div>
  <div class="collapse__body">Body 1</div>

  <div class="collapse__header">Header 2</div>
  <div class="collapse__body">Body 2</div>


  <!-- Scripts -->
  <script src="https://unpkg.com/collapsejs/dist/collapsejs.min.js"></script>
  <script type="text/javascript">
    new collapsejs
  </script>
</body>
</html>
```

## Options

here is the default options list:

```javascript
new collapsejs({
    container:      '', // collapse wrap id or class e.g. #collapse-1 or .collapse-1
    header:         '.collapse__header', // header class
    body:           '.collapse__body', // body class
    closed:         false, // if true initially all bodies will be closed
    multiple:       false, // multiple collapse expand
    collapsible:    false, // if true and multiple false then single item also collapsible.
    defaultOpen:    1 // default open tab #
})
```

## API

here is the example:

```javascript
var collapse = new collapsejs()

// Call this for close all items
collapse.closeAll()

// Call this for open all items
collapse.openAll()
```

## Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 10 and IE 11

## License

© 2018 [Ahsan Abrar](https://github.com/AhsanAbrar)
Released under the [MIT LICENSE](http://opensource.org/licenses/MIT)

<a href="https://www.buymeacoffee.com/ahsan" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

[npm-image]: https://img.shields.io/npm/v/collapsejs.svg
[npm-url]: https://npmjs.com/package/collapsejs

[license-image]: https://img.shields.io/npm/l/collapsejs.svg
[license-url]: LICENSE
