# CollapseJs

[![NPM version][npm-image]][npm-url]
[![MIT License][license-image]][license-url]

Lightweight Vanilla Javascript Collapse No Need any Dependency.

[See demo](https://ahsanabrar.github.io/collapse/)

## Installation

````
npm i collapsejs --save-dev
````

or use cdn

````
<script src="https://unpkg.com/collapsejs/dist/collapsejs.min.js"></script>
````

## Quick Usage

````
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
````


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
