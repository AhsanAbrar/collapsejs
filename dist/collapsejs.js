(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("collapsejs", [], factory);
	else if(typeof exports === 'object')
		exports["collapsejs"] = factory();
	else
		root["collapsejs"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/js/item.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Collapse =
/*#__PURE__*/
function () {
  /**
   * Instantiate the collapse class
   */
  function Collapse() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Collapse);

    this.items = [];
    this.assignOptions(options);
    this.initCollapse();
    this.assignItems();
    this.init();
  }
  /**
   * Default Options
   */


  _createClass(Collapse, [{
    key: "defaultOptions",
    value: function defaultOptions() {
      return {
        container: '',
        header: '.collapse__header',
        body: '.collapse__body',
        closed: false,
        multiple: false,
        collapsible: false,
        defaultOpen: 1
      };
    }
    /**
     * Initialize options
     */

  }, {
    key: "assignOptions",
    value: function assignOptions(options) {
      var userOptions = Object.assign(this.defaultOptions(), options);

      for (var key in userOptions) {
        this[key] = userOptions[key];
      }
    }
    /**
     * Fetch collapse items
     */

  }, {
    key: "initCollapse",
    value: function initCollapse() {
      this.headers = document.querySelectorAll("".concat(this.container, " ").concat(this.header));
      this.bodies = document.querySelectorAll("".concat(this.container, " ").concat(this.body));
    }
    /**
     * Initialize collapse items
     */

  }, {
    key: "assignItems",
    value: function assignItems() {
      for (var i = 0; i < this.headers.length; i++) {
        this.items.push(new _item__WEBPACK_IMPORTED_MODULE_0__["default"](this, this.headers[i], this.bodies[i]));
      }
    }
    /**
     * Initialize default
     */

  }, {
    key: "init",
    value: function init() {
      if (this.closed || !this.multiple) this.openCloseAll();
      if (!this.multiple) this.openDefault();
    }
    /**
     * Open Default Tab
     */

  }, {
    key: "openDefault",
    value: function openDefault() {
      this.items[this.defaultOpen - 1].open();
    }
    /**
     * Open/Close All
     */

  }, {
    key: "openCloseAll",
    value: function openCloseAll() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'close';

      for (var i = 0; i < this.items.length; i++) {
        this.items[i][type]();
      }
    }
  }]);

  return Collapse;
}();

/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ "./src/js/item.js":
/*!************************!*\
  !*** ./src/js/item.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Item =
/*#__PURE__*/
function () {
  /**
   * Instantiate the collapse item class
   */
  function Item(collapse, header, body) {
    _classCallCheck(this, Item);

    this.collapse = collapse;
    this.header = header;
    this.body = body;
    this.isActive = true;
    this.assignEvents();
  }
  /**
   * Initialize Event Listeners
   */


  _createClass(Item, [{
    key: "assignEvents",
    value: function assignEvents() {
      this.header.addEventListener('click', this.onClick.bind(this));
    }
    /**
     * Handle OnClick Event
     */

  }, {
    key: "onClick",
    value: function onClick() {
      if (!this.collapse.multiple && !this.collapse.collapsible || this.collapse.collapsible && !this.isActive) this.collapse.openCloseAll();
      this.toggle();
    }
    /**
     * Toggle
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.isActive ? this.close() : this.open();
    }
    /**
     * Open
     */

  }, {
    key: "open",
    value: function open() {
      this.body.style.height = this.body.scrollHeight + 'px';
      this.isActive = true;
    }
    /**
     * Close
     */

  }, {
    key: "close",
    value: function close() {
      this.body.style.height = 0;
      this.isActive = false;
    }
  }]);

  return Item;
}();

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/sass/style.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\laragon\www\collapsejs\src\js\index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! D:\laragon\www\collapsejs\src\sass\style.sass */"./src/sass/style.sass");


/***/ })

/******/ })["default"];
});