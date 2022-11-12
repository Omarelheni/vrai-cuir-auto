webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Matiere.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar elements = document.getElementsByClassName(\"color-item\");\n\nvar myFunction = function myFunction() {};\n\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].addEventListener('click', myFunction, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nom: 'Matiere',\n  props: {\n    num: Number,\n    part: String\n  },\n  data: function data() {\n    return {\n      Active: false,\n      codeHex: String\n    };\n  },\n  emits: [\"AddMatiere\", \"RemoveMatiere\", \"SendMatiere\"],\n  methods: {\n    ChangeColor: function ChangeColor(event) {\n      var codeHex = event.target.dataset.hex;\n\n      if (typeof codeHex != 'undefined') {\n        this.codeHex = codeHex;\n      }\n    },\n    AddMatiere: function AddMatiere(event) {\n      var button = event.target;\n      var itag = event.target;\n\n      if (button.tagName === \"I\") {\n        button = button.parentElement;\n      } else {\n        itag = event.target.children;\n      }\n\n      var matiere = button.previousSibling;\n      this.Active = !this.Active;\n\n      if (this.Active) {\n        matiere.style.opacity = 1;\n        matiere.style.pointerEvents = \"auto\";\n        itag.classList.remove(\"fa-plus\");\n        itag.classList.add(\"fa-close\");\n        this.$emit('AddMatiere');\n        this.$emit('SendMatiere', this.num, this.part, {\n          color: this.codeHex\n        });\n      } else {\n        matiere.style.opacity = 0.2;\n        matiere.style.pointerEvents = \"none\";\n        itag.classList.remove(\"fa-close\");\n        itag.classList.add(\"fa-plus\");\n        this.$emit('RemoveMatiere');\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYXRpZXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdGllcmUudnVlPzY5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImRpdm1hdGllcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuaWNlLXNlbGVjdCBpbnB1dF9fZmlsdGVyXCIgdGFiaW5kZXg9XCIwXCI+PHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+VnJhaS1DdWlyPC9zcGFuPjx1bCBjbGFzcz1cImxpc3RcIj48bGkgZGF0YS12YWx1ZT1cIlwiIGNsYXNzPVwib3B0aW9uIHNlbGVjdGVkXCI+VnJhaS1DdWlyPC9saT48bGkgZGF0YS12YWx1ZT1cIlwiIGNsYXNzPVwib3B0aW9uXCI+U2ltaWxpLUN1aXI8L2xpPjwvdWw+PC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvci13cmFwcGVyXCIgID5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItaG9sZGVyIGNhbGwtcGlja2VyXCIgPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvci1waWNrZXJcIiAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgQGNsaWNrPVwiQ2hhbmdlQ29sb3JcIj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0bmljb25cIiBAY2xpY2s9XCJBZGRNYXRpZXJlXCI+XHJcbjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiID48L2k+XHJcbjwvYnV0dG9uPlxyXG4gICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbG9yLWl0ZW1cIik7XHJcbnZhciBteUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXlGdW5jdGlvbiwgZmFsc2UpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5vbTonTWF0aWVyZScsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgICAgbnVtIDogTnVtYmVyLFxyXG4gICAgICAgIHBhcnQgOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQWN0aXZlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvZGVIZXggOiBTdHJpbmcsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbWl0czogW1wiQWRkTWF0aWVyZVwiLFwiUmVtb3ZlTWF0aWVyZVwiLFwiU2VuZE1hdGllcmVcIl0sXHJcbiAgICBtZXRob2RzOntcclxuICAgIENoYW5nZUNvbG9yKGV2ZW50KXtcclxuICAgICAgICB2YXIgY29kZUhleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmhleFxyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZUhleCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmNvZGVIZXggPSBjb2RlSGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgQWRkTWF0aWVyZShldmVudCl7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxyXG4gICAgICAgIHZhciBpdGFnID0gZXZlbnQudGFyZ2V0XHJcblxyXG4gICAgICAgICAgICAgaWYoYnV0dG9uLnRhZ05hbWU9PT1cIklcIil7XHJcbiAgICAgICAgICAgICBidXR0b24gPSBidXR0b24ucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRhZyA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICB2YXIgIG1hdGllcmUgPSAgYnV0dG9uLnByZXZpb3VzU2libGluZ1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5BY3RpdmUgPSAhdGhpcy5BY3RpdmVcclxuICAgICAgICBpZiAodGhpcy5BY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgIG1hdGllcmUuc3R5bGUub3BhY2l0eT0xO1xyXG4gICAgIG1hdGllcmUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICBcImF1dG9cIjtcclxuICAgICBpdGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1wbHVzXCIpO1xyXG4gICAgIGl0YWcuY2xhc3NMaXN0LmFkZChcImZhLWNsb3NlXCIpO1xyXG4gICAgICAgICB0aGlzLiRlbWl0KCdBZGRNYXRpZXJlJyk7XHJcbiAgICAgICAgIHRoaXMuJGVtaXQoJ1NlbmRNYXRpZXJlJyx0aGlzLm51bSx0aGlzLnBhcnQse2NvbG9yOnRoaXMuY29kZUhleH0pO1xyXG5cclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIG1hdGllcmUuc3R5bGUub3BhY2l0eT0wLjI7XHJcbiAgICAgbWF0aWVyZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gIFwibm9uZVwiO1xyXG4gICAgIGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZhLWNsb3NlXCIpO1xyXG4gICAgIGl0YWcuY2xhc3NMaXN0LmFkZChcImZhLXBsdXNcIik7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnUmVtb3ZlTWF0aWVyZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSA+XHJcbi5kaXZtYXRpZXJlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG59XHJcbiAuYnRuaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xyXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlcnMgKi9cclxuICBjb2xvcjogZ3JheVx0OyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgcGFkZGluZzogMXB4IDNweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgZm9udC1zaXplOiAxOXB4OyAvKiBTZXQgYSBmb250IHNpemUgKi8gIFx0XHRcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggZ3JheTtcclxuICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7OztBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBeENBO0FBZEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js\n");

/***/ })

})