webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Matiere.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar elements = document.getElementsByClassName(\"color-item\");\n\nvar myFunction = function myFunction() {};\n\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].addEventListener('click', myFunction, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nom: 'Matiere',\n  props: {\n    num: Number,\n    part: String\n  },\n  data: function data() {\n    return {\n      Active: false,\n      codeHex: '#FFFFFF'\n    };\n  },\n  emits: [\"AddMatiere\", \"RemoveMatiere\", \"SendMatiere\"],\n  methods: {\n    ChangeColor: function ChangeColor(event) {\n      var codeHex = event.target.dataset.hex;\n\n      if (typeof codeHex != 'undefined') {\n        this.codeHex = codeHex;\n      }\n    },\n    GetMatiereCuir: function GetMatiereCuir() {\n      document.getElementsByClassName('option selected').innerHTML;\n    },\n    AddMatiere: function AddMatiere(event) {\n      var button = event.target;\n      var itag = event.target;\n\n      if (button.tagName === \"I\") {\n        button = button.parentElement;\n      } else {\n        itag = event.target.children;\n      }\n\n      var matiere = button.previousSibling;\n      this.Active = !this.Active;\n\n      if (this.Active) {\n        matiere.style.opacity = 1;\n        matiere.style.pointerEvents = \"auto\";\n        itag.classList.remove(\"fa-plus\");\n        itag.classList.add(\"fa-close\");\n        this.$emit('AddMatiere');\n        this.$emit('SendMatiere', this.num, this.part, {\n          color: this.codeHex\n        });\n      } else {\n        matiere.style.opacity = 0.2;\n        matiere.style.pointerEvents = \"none\";\n        itag.classList.remove(\"fa-close\");\n        itag.classList.add(\"fa-plus\");\n        this.$emit('RemoveMatiere');\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYXRpZXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdGllcmUudnVlPzY5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImRpdm1hdGllcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuaWNlLXNlbGVjdCBpbnB1dF9fZmlsdGVyXCIgdGFiaW5kZXg9XCIwXCI+PHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+VnJhaS1DdWlyPC9zcGFuPjx1bCBjbGFzcz1cImxpc3RcIj48bGkgZGF0YS12YWx1ZT1cIlwiIGNsYXNzPVwib3B0aW9uIHNlbGVjdGVkXCI+VnJhaS1DdWlyPC9saT48bGkgZGF0YS12YWx1ZT1cIlwiIGNsYXNzPVwib3B0aW9uXCI+U2ltaWxpLUN1aXI8L2xpPjwvdWw+PC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvci13cmFwcGVyXCIgID5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItaG9sZGVyIGNhbGwtcGlja2VyXCIgPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvci1waWNrZXJcIiAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgQGNsaWNrPVwiQ2hhbmdlQ29sb3JcIj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cImJ0bmljb25cIiBAY2xpY2s9XCJBZGRNYXRpZXJlXCI+XHJcbjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiID48L2k+XHJcbjwvYnV0dG9uPlxyXG4gICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbG9yLWl0ZW1cIik7XHJcbnZhciBteUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG59XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXlGdW5jdGlvbiwgZmFsc2UpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5vbTonTWF0aWVyZScsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgICAgbnVtIDogTnVtYmVyLFxyXG4gICAgICAgIHBhcnQgOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgQWN0aXZlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvZGVIZXggOiAnI0ZGRkZGRicsXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlbWl0czogW1wiQWRkTWF0aWVyZVwiLFwiUmVtb3ZlTWF0aWVyZVwiLFwiU2VuZE1hdGllcmVcIl0sXHJcbiAgICBtZXRob2RzOntcclxuICAgIENoYW5nZUNvbG9yKGV2ZW50KXtcclxuICAgICAgICB2YXIgY29kZUhleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmhleFxyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZUhleCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmNvZGVIZXggPSBjb2RlSGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgR2V0TWF0aWVyZUN1aXIoKXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb24gc2VsZWN0ZWQnKS5pbm5lckhUTUxcclxuICAgIH0sXHJcbiAgICBBZGRNYXRpZXJlKGV2ZW50KXtcclxuICAgICAgICB2YXIgYnV0dG9uID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgdmFyIGl0YWcgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICAgICAgICAgICBpZihidXR0b24udGFnTmFtZT09PVwiSVwiKXtcclxuICAgICAgICAgICAgIGJ1dHRvbiA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGFnID0gZXZlbnQudGFyZ2V0LmNoaWxkcmVuXHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgIHZhciAgbWF0aWVyZSA9ICBidXR0b24ucHJldmlvdXNTaWJsaW5nXHJcblxyXG5cclxuICAgICAgICB0aGlzLkFjdGl2ZSA9ICF0aGlzLkFjdGl2ZVxyXG4gICAgICAgIGlmICh0aGlzLkFjdGl2ZSl7XHJcbiAgICAgICAgbWF0aWVyZS5zdHlsZS5vcGFjaXR5PTE7XHJcbiAgICAgICAgbWF0aWVyZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gIFwiYXV0b1wiO1xyXG4gICAgICAgIGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZhLXBsdXNcIik7XHJcbiAgICAgICAgaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmEtY2xvc2VcIik7XHJcbiAgICAgICAgIHRoaXMuJGVtaXQoJ0FkZE1hdGllcmUnKTtcclxuICAgICAgICAgdGhpcy4kZW1pdCgnU2VuZE1hdGllcmUnLHRoaXMubnVtLHRoaXMucGFydCx7Y29sb3I6dGhpcy5jb2RlSGV4fSk7XHJcblxyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgbWF0aWVyZS5zdHlsZS5vcGFjaXR5PTAuMjtcclxuICAgICBtYXRpZXJlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAgXCJub25lXCI7XHJcbiAgICAgaXRhZy5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtY2xvc2VcIik7XHJcbiAgICAgaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmEtcGx1c1wiKTtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdSZW1vdmVNYXRpZXJlJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlID5cclxuLmRpdm1hdGllcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXHJcbn1cclxuIC5idG5pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogQmx1ZSBiYWNrZ3JvdW5kICovXHJcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xyXG4gIGNvbG9yOiBncmF5XHQ7IC8qIFdoaXRlIHRleHQgKi9cclxuICBwYWRkaW5nOiAxcHggM3B4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICBmb250LXNpemU6IDE5cHg7IC8qIFNldCBhIGZvbnQgc2l6ZSAqLyAgXHRcdFxyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDFweCBncmF5O1xyXG4gIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG59XHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7O0FBb0JBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUEzQ0E7QUFkQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js\n");

/***/ })

})