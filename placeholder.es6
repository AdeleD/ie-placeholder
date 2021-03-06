/*jshint esnext:true */

(function () {
  'use strict';

  function support() {
    var input = document.createElement('input');
    return ('placeholder' in input);
  }

  class Placeholder {
    constructor(input, placeholderColor, placeholderFontStyle) {
      this.input = input;
      this.placeholderColor = placeholderColor || '#939393';
      this.placeholderFontStyle = placeholderFontStyle || 'italic';

      this.normalColor = this.input.style.color || '#000000';
      this.normalFontStyle = this.input.style['font-style'] || 'normal';

      if (!support()) {
        this.displayPlaceholder();
        this.attachEvents();
      }
    }

    displayPlaceholder() {
      this.placeholderStyle();

      var placeholder = this.input.getAttribute('placeholder');

      if (placeholder !== undefined && placeholder !== null && (this.input.value === null || this.input.value === '')) {
        this.input.value = placeholder;
      }
    }

    attachEvents() {
      this.input.addEventListener('click', (e) => {
        if (e.currentTarget.value === e.currentTarget.getAttribute('placeholder')) {
          e.currentTarget.value = '';

          this.normalStyle();
        }
      }.bind(this));

      this.input.addEventListener('onblur', (e) => {
        if (e.currentTarget.value === '') {
          this.placeholderStyle();
        }
      }.bind(this));
    }

    normalStyle() {
      this.input.style.color = this.normalColor;
      this.input.style['font-style'] = this.normalFontStyle;
    }

    placeholderStyle() {
      this.input.style.color = this.placeholderColor;
      this.input.style['font-style'] = this.placeholderFontStyle;
    }
  }

  window.Placeholder = Placeholder;
})();
