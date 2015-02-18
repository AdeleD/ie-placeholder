"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/*jshint esnext:true */

(function (document, window) {
  "use strict";

  function support() {
    var input = document.createElement("input");
    return "placeholder" in input;
  }

  var Placeholder = (function () {
    function Placeholder(input, placeholderColor, placeholderFontStyle) {
      _classCallCheck(this, Placeholder);

      this.input = input;
      this.placeholderColor = placeholderColor || "#939393";
      this.placeholderFontStyle = placeholderFontStyle || "italic";

      this.normalColor = this.input.style.color || "#000000";
      this.normalFontStyle = this.input.style["font-style"] || "normal";

      if (!support()) {
        this.displayPlaceholder();
        this.attachEvents();
      }
    }

    _prototypeProperties(Placeholder, null, {
      displayPlaceholder: {
        value: function displayPlaceholder() {
          this.placeholderStyle();
          this.input.value = this.input.getAttribute("placeholder");
        },
        writable: true,
        configurable: true
      },
      attachEvents: {
        value: function attachEvents() {
          this.input.addEventListener("click", (function (e) {
            if (e.currentTarget.value === e.currentTarget.getAttribute("placeholder")) {
              e.currentTarget.value = "";

              this.normalStyle();
            }
          }).bind(this));

          this.input.addEventListener("onblur", (function (e) {
            if (e.currentTarget.value === "") {
              this.placeholderStyle();
            }
          }).bind(this));
        },
        writable: true,
        configurable: true
      },
      normalStyle: {
        value: function normalStyle() {
          this.input.style.color = this.normalColor;
          this.input.style["font-style"] = this.normalFontStyle;
        },
        writable: true,
        configurable: true
      },
      placeholderStyle: {
        value: function placeholderStyle() {
          this.input.style.color = this.placeholderColor;
          this.input.style["font-style"] = this.placeholderFontStyle;
        },
        writable: true,
        configurable: true
      }
    });

    return Placeholder;
  })();

  window.CustomEvent = Placeholder;
})();
