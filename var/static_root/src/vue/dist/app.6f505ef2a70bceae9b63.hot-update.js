webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Matiere.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar elements = document.getElementsByClassName(\"color-item\");\n\nvar myFunction = function myFunction() {};\n\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].addEventListener('click', myFunction, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nom: 'Matiere',\n  props: {\n    num: Number,\n    part: String\n  },\n  data: function data() {\n    return {\n      Active: false,\n      codeHex: '#FFFFFF',\n      Cuir: 'Vrai-Cuir'\n    };\n  },\n  emits: [\"AddMatiere\", \"RemoveMatiere\", \"SendMatiere\"],\n  methods: {\n    ChangeColor: function ChangeColor(event) {\n      var codeHex = event.target.dataset.hex;\n\n      if (typeof codeHex != 'undefined') {\n        this.codeHex = codeHex;\n      }\n    },\n    ChangeMatiereCuir: function ChangeMatiereCuir(event) {\n      this.Cuir = event.target.innerHTML;\n      this.$emit('SendMatiere', this.num, this.part, {\n        color: this.codeHex,\n        cuir: this.Cuir\n      });\n    },\n    AddMatiere: function AddMatiere(event) {\n      var button = event.target;\n      var itag = event.target;\n\n      if (button.tagName === \"I\") {\n        button = button.parentElement;\n      } else {\n        itag = event.target.children;\n      }\n\n      console.log(\"itag\", itag);\n      var matiere = button.previousSibling;\n      this.Active = !this.Active;\n\n      if (this.Active) {\n        matiere.style.opacity = 1;\n        matiere.style.pointerEvents = \"auto\";\n        itag.classList.remove(\"fa-plus\");\n        itag.classList.add(\"fa-close\");\n        this.$emit('AddMatiere');\n        this.$emit('SendMatiere', this.num, this.part, {\n          color: this.codeHex,\n          cuir: this.Cuir\n        });\n      } else {\n        matiere.style.opacity = 0.2;\n        matiere.style.pointerEvents = \"none\";\n        itag.classList.remove(\"fa-close\");\n        itag.classList.add(\"fa-plus\");\n        this.$emit('RemoveMatiere');\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYXRpZXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdGllcmUudnVlPzY5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImRpdm1hdGllcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuaWNlLXNlbGVjdCBpbnB1dF9fZmlsdGVyXCIgdGFiaW5kZXg9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+VnJhaS1DdWlyPC9zcGFuPjx1bCBjbGFzcz1cImxpc3RcIj48bGkgZGF0YS12YWx1ZT1cIlwiIGNsYXNzPVwib3B0aW9uIHNlbGVjdGVkXCIgQGNsaWNrPVwiQ2hhbmdlTWF0aWVyZUN1aXJcIj5WcmFpLUN1aXI8L2xpPjxsaSBkYXRhLXZhbHVlPVwiXCIgY2xhc3M9XCJvcHRpb25cIiBAY2xpY2s9XCJDaGFuZ2VNYXRpZXJlQ3VpclwiPlNpbWlsaS1DdWlyPC9saT48L3VsPjwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3Itd3JhcHBlclwiICA+XHJcbiAgPGRpdiBjbGFzcz1cImNvbG9yLWhvbGRlciBjYWxsLXBpY2tlclwiID48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyXCIgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIEBjbGljaz1cIkNoYW5nZUNvbG9yXCI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG5pY29uXCIgQGNsaWNrPVwiQWRkTWF0aWVyZVwiPlxyXG48aSBjbGFzcz1cImZhIGZhLXBsdXNcIiA+PC9pPlxyXG48L2J1dHRvbj5cclxuICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbnZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xvci1pdGVtXCIpO1xyXG52YXIgbXlGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5mb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15RnVuY3Rpb24sIGZhbHNlKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBub206J01hdGllcmUnLFxyXG4gICAgcHJvcHM6e1xyXG4gICAgICAgIG51bSA6IE51bWJlcixcclxuICAgICAgICBwYXJ0IDogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEFjdGl2ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb2RlSGV4IDogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICBDdWlyIDogJ1ZyYWktQ3VpcidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW1pdHM6IFtcIkFkZE1hdGllcmVcIixcIlJlbW92ZU1hdGllcmVcIixcIlNlbmRNYXRpZXJlXCJdLFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICBDaGFuZ2VDb2xvcihldmVudCl7XHJcbiAgICAgICAgdmFyIGNvZGVIZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5oZXhcclxuICAgICAgICBpZiAodHlwZW9mIGNvZGVIZXggIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5jb2RlSGV4ID0gY29kZUhleFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICBDaGFuZ2VNYXRpZXJlQ3VpcihldmVudCl7XHJcbiAgICAgICAgdGhpcy5DdWlyID0gZXZlbnQudGFyZ2V0LmlubmVySFRNTFxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ1NlbmRNYXRpZXJlJyx0aGlzLm51bSx0aGlzLnBhcnQse2NvbG9yOnRoaXMuY29kZUhleCxjdWlyOnRoaXMuQ3Vpcn0pO1xyXG4gICAgfSxcclxuICAgIEFkZE1hdGllcmUoZXZlbnQpe1xyXG4gICAgICAgIHZhciBidXR0b24gPSBldmVudC50YXJnZXRcclxuICAgICAgICB2YXIgaXRhZyA9IGV2ZW50LnRhcmdldFxyXG5cclxuICAgICAgICAgICAgIGlmKGJ1dHRvbi50YWdOYW1lPT09XCJJXCIpe1xyXG4gICAgICAgICAgICAgYnV0dG9uID0gYnV0dG9uLnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0YWcgPSBldmVudC50YXJnZXQuY2hpbGRyZW5cclxuICAgICAgICAgICAgIH1cclxuY29uc29sZS5sb2coXCJpdGFnXCIsaXRhZylcclxuICAgICB2YXIgIG1hdGllcmUgPSAgYnV0dG9uLnByZXZpb3VzU2libGluZ1xyXG5cclxuICAgICAgICB0aGlzLkFjdGl2ZSA9ICF0aGlzLkFjdGl2ZVxyXG4gICAgICAgIGlmICh0aGlzLkFjdGl2ZSl7XHJcbiAgICAgICAgbWF0aWVyZS5zdHlsZS5vcGFjaXR5PTE7XHJcbiAgICAgICAgbWF0aWVyZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gIFwiYXV0b1wiO1xyXG4gICAgICAgIGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZhLXBsdXNcIik7XHJcbiAgICAgICAgaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmEtY2xvc2VcIik7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnQWRkTWF0aWVyZScpO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ1NlbmRNYXRpZXJlJyx0aGlzLm51bSx0aGlzLnBhcnQse2NvbG9yOnRoaXMuY29kZUhleCxjdWlyOnRoaXMuQ3Vpcn0pO1xyXG5cclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIG1hdGllcmUuc3R5bGUub3BhY2l0eT0wLjI7XHJcbiAgICAgbWF0aWVyZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gIFwibm9uZVwiO1xyXG4gICAgIGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZhLWNsb3NlXCIpO1xyXG4gICAgIGl0YWcuY2xhc3NMaXN0LmFkZChcImZhLXBsdXNcIik7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnUmVtb3ZlTWF0aWVyZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSA+XHJcbi5kaXZtYXRpZXJlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG59XHJcbiAuYnRuaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xyXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlcnMgKi9cclxuICBjb2xvcjogZ3JheVx0OyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgcGFkZGluZzogMXB4IDNweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgZm9udC1zaXplOiAxOXB4OyAvKiBTZXQgYSBmb250IHNpemUgKi8gIFx0XHRcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggZ3JheTtcclxuICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7OztBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUE1Q0E7QUFkQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js\n");

/***/ })

})