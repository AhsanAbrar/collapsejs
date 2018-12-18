(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.collapsejs = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

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
        this.header.classList.add('open');
        this.isActive = true;
      }
      /**
       * Close
       */

    }, {
      key: "close",
      value: function close() {
        this.body.style.height = 0;
        this.header.classList.remove('open');
        this.isActive = false;
      }
    }]);

    return Item;
  }();

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
          this.items.push(new Item(this, this.headers[i], this.bodies[i]));
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
      /**
       * Open All
       */

    }, {
      key: "openAll",
      value: function openAll() {
        this.openCloseAll('open');
      }
      /**
       * Close All
       */

    }, {
      key: "closeAll",
      value: function closeAll() {
        this.openCloseAll();
      }
    }]);

    return Collapse;
  }();

  return Collapse;

})));
//# sourceMappingURL=collapsejs.js.map
