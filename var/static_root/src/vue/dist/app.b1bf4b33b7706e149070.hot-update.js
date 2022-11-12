webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Matiere.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar elements = document.getElementsByClassName(\"color-item\");\n\nvar myFunction = function myFunction() {};\n\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].addEventListener('click', myFunction, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nom: 'Matiere',\n  data: function data() {\n    return {\n      Active: false,\n      codeHex: String\n    };\n  },\n  emits: [\"AddMatiere\"],\n  methods: {\n    ChangeColor: function ChangeColor(event) {\n      var codeHex = event.target.dataset.hex;\n\n      if (typeof codeHex != 'undefined') {\n        this.codeHex = codeHex;\n      }\n    },\n    AddMatiere: function AddMatiere(event) {\n      var button = event.target;\n      var itag = event.target;\n\n      if (button.tagName === \"I\") {\n        button = button.parentElement;\n      } else {\n        itag = event.target.children;\n      }\n\n      var matiere = button.previousSibling;\n      this.Active = !this.Active;\n\n      if (this.Active) {\n        matiere.style.opacity = 1;\n        matiere.style.pointerEvents = \"auto\";\n        itag.classList.remove(\"fa-plus\");\n        itag.classList.add(\"fa-close\");\n        this.$emit('AddMatiere');\n      } else {\n        matiere.style.opacity = 0.2;\n        matiere.style.pointerEvents = \"none\";\n        itag.classList.remove(\"fa-close\");\n        itag.classList.add(\"fa-plus\");\n        this.$emit('RemoveMatiere');\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYXRpZXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdGllcmUudnVlPzY5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImRpdm1hdGllcmVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmljZS1zZWxlY3QgaW5wdXRfX2ZpbHRlclwiIHRhYmluZGV4PVwiMFwiPjxzcGFuIGNsYXNzPVwiY3VycmVudFwiPlZyYWktQ3Vpcjwvc3Bhbj48dWwgY2xhc3M9XCJsaXN0XCI+PGxpIGRhdGEtdmFsdWU9XCJcIiBjbGFzcz1cIm9wdGlvbiBzZWxlY3RlZFwiPlZyYWktQ3VpcjwvbGk+PGxpIGRhdGEtdmFsdWU9XCJcIiBjbGFzcz1cIm9wdGlvblwiPlNpbWlsaS1DdWlyPC9saT48L3VsPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3Itd3JhcHBlclwiICA+XHJcbiAgPGRpdiBjbGFzcz1cImNvbG9yLWhvbGRlciBjYWxsLXBpY2tlclwiID48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyXCIgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIEBjbGljaz1cIkNoYW5nZUNvbG9yXCI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG5pY29uXCIgQGNsaWNrPVwiQWRkTWF0aWVyZVwiPlxyXG48aSBjbGFzcz1cImZhIGZhLXBsdXNcIiA+PC9pPlxyXG48L2J1dHRvbj5cclxuICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbnZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xvci1pdGVtXCIpO1xyXG52YXIgbXlGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5mb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15RnVuY3Rpb24sIGZhbHNlKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBub206J01hdGllcmUnLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEFjdGl2ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb2RlSGV4IDogU3RyaW5nLFxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZW1pdHM6IFtcIkFkZE1hdGllcmVcIl0sXHJcbiAgICBtZXRob2RzOntcclxuICAgIENoYW5nZUNvbG9yKGV2ZW50KXtcclxuICAgICAgICB2YXIgY29kZUhleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmhleFxyXG4gICAgICAgIGlmICh0eXBlb2YgY29kZUhleCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmNvZGVIZXggPSBjb2RlSGV4XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgQWRkTWF0aWVyZShldmVudCl7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxyXG4gICAgICAgIHZhciBpdGFnID0gZXZlbnQudGFyZ2V0XHJcblxyXG4gICAgICAgICAgICAgaWYoYnV0dG9uLnRhZ05hbWU9PT1cIklcIil7XHJcbiAgICAgICAgICAgICBidXR0b24gPSBidXR0b24ucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRhZyA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICB2YXIgIG1hdGllcmUgPSAgYnV0dG9uLnByZXZpb3VzU2libGluZ1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5BY3RpdmUgPSAhdGhpcy5BY3RpdmVcclxuICAgICAgICBpZiAodGhpcy5BY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgIG1hdGllcmUuc3R5bGUub3BhY2l0eT0xO1xyXG4gICAgIG1hdGllcmUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICBcImF1dG9cIjtcclxuICAgICBpdGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1wbHVzXCIpO1xyXG4gICAgIGl0YWcuY2xhc3NMaXN0LmFkZChcImZhLWNsb3NlXCIpO1xyXG4gICAgICAgICB0aGlzLiRlbWl0KCdBZGRNYXRpZXJlJyk7XHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICBtYXRpZXJlLnN0eWxlLm9wYWNpdHk9MC4yO1xyXG4gICAgIG1hdGllcmUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICBcIm5vbmVcIjtcclxuICAgICBpdGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1jbG9zZVwiKTtcclxuICAgICBpdGFnLmNsYXNzTGlzdC5hZGQoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ1JlbW92ZU1hdGllcmUnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgPlxyXG4uZGl2bWF0aWVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcclxufVxyXG4gLmJ0bmljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBCbHVlIGJhY2tncm91bmQgKi9cclxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXHJcbiAgY29sb3I6IGdyYXlcdDsgLyogV2hpdGUgdGV4dCAqL1xyXG4gIHBhZGRpbmc6IDFweCAzcHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gIGZvbnQtc2l6ZTogMTlweDsgLyogU2V0IGEgZm9udCBzaXplICovICBcdFx0XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMXB4IGdyYXk7XHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbn1cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiJBQW9CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBdENBO0FBVkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js\n");

/***/ })

})