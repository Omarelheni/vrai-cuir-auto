webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/Matiere.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar elements = document.getElementsByClassName(\"color-item\");\n\nvar myFunction = function myFunction() {};\n\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].addEventListener('click', myFunction, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  nom: 'Matiere',\n  data: function data() {\n    return {\n      Active: false\n    };\n  },\n  emits: [\"AddMatiere\"],\n  methods: {\n    ChangeColor: function ChangeColor(event) {\n      var codeHex = event.target.dataset.hex;\n\n      if (typeof codeHex != 'undefined') {}\n    },\n    AddMatiere: function AddMatiere(event) {\n      var button = event.target;\n\n      if (button.tagName === \"I\") {\n        var itag = event.target;\n        button = button.parentElement;\n      } else {\n        var itag = event.target.children;\n      }\n\n      var matiere = button.previousSibling;\n      matiere.style.opacity = 1;\n      matiere.style.pointerEvents = \"auto\";\n      this.Active = !this.Active;\n\n      if (this.Active) {\n        itag.classList.remove(\"fa-plus\");\n        itag.classList.add(\"fa-close\");\n      } else {\n        itag.classList.remove(\"fa-plus\");\n      }\n\n      this.$emit('AddMatiere');\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9NYXRpZXJlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdGllcmUudnVlPzY5MDEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImRpdm1hdGllcmVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmljZS1zZWxlY3QgaW5wdXRfX2ZpbHRlclwiIHRhYmluZGV4PVwiMFwiPjxzcGFuIGNsYXNzPVwiY3VycmVudFwiPlZyYWktQ3Vpcjwvc3Bhbj48dWwgY2xhc3M9XCJsaXN0XCI+PGxpIGRhdGEtdmFsdWU9XCJcIiBjbGFzcz1cIm9wdGlvbiBzZWxlY3RlZFwiPlZyYWktQ3VpcjwvbGk+PGxpIGRhdGEtdmFsdWU9XCJcIiBjbGFzcz1cIm9wdGlvblwiPlNpbWlsaS1DdWlyPC9saT48L3VsPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3Itd3JhcHBlclwiICA+XHJcbiAgPGRpdiBjbGFzcz1cImNvbG9yLWhvbGRlciBjYWxsLXBpY2tlclwiID48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyXCIgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIEBjbGljaz1cIkNoYW5nZUNvbG9yXCI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJidG5pY29uXCIgQGNsaWNrPVwiQWRkTWF0aWVyZVwiPlxyXG48aSBjbGFzcz1cImZhIGZhLXBsdXNcIiA+PC9pPlxyXG48L2J1dHRvbj5cclxuICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbnZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xvci1pdGVtXCIpO1xyXG52YXIgbXlGdW5jdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxufVxyXG5mb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15RnVuY3Rpb24sIGZhbHNlKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBub206J01hdGllcmUnLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEFjdGl2ZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVtaXRzOiBbXCJBZGRNYXRpZXJlXCJdLFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICBDaGFuZ2VDb2xvcihldmVudCl7XHJcbiAgICAgICAgdmFyIGNvZGVIZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5oZXhcclxuICAgICAgICBpZiAodHlwZW9mIGNvZGVIZXggIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgQWRkTWF0aWVyZShldmVudCl7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldFxyXG4gICAgICAgICAgICAgaWYoYnV0dG9uLnRhZ05hbWU9PT1cIklcIil7XHJcbiAgICAgICAgICAgICAgIHZhciBpdGFnID0gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgICAgICBidXR0b24gPSBidXR0b24ucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICB2YXIgaXRhZyA9IGV2ZW50LnRhcmdldC5jaGlsZHJlblxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICB2YXIgIG1hdGllcmUgPSAgYnV0dG9uLnByZXZpb3VzU2libGluZ1xyXG5cclxuICAgICBtYXRpZXJlLnN0eWxlLm9wYWNpdHk9MTtcclxuICAgICBtYXRpZXJlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAgXCJhdXRvXCI7XHJcbiAgICAgICAgdGhpcy5BY3RpdmUgPSAhdGhpcy5BY3RpdmVcclxuICAgICAgICBpZiAodGhpcy5BY3RpdmUpe1xyXG4gICAgIGl0YWcuY2xhc3NMaXN0LnJlbW92ZShcImZhLXBsdXNcIik7XHJcbiAgICAgaXRhZy5jbGFzc0xpc3QuYWRkKFwiZmEtY2xvc2VcIik7XHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICBpdGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJmYS1wbHVzXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB0aGlzLiRlbWl0KCdBZGRNYXRpZXJlJyk7XHJcblxyXG4gICAgfVxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSA+XHJcbi5kaXZtYXRpZXJlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZVxyXG59XHJcbiAuYnRuaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xyXG4gIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlcnMgKi9cclxuICBjb2xvcjogZ3JheVx0OyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgcGFkZGluZzogMXB4IDNweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgZm9udC1zaXplOiAxOXB4OyAvKiBTZXQgYSBmb250IHNpemUgKi8gIFx0XHRcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggZ3JheTtcclxuICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6IkFBb0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFoQ0E7QUFSQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Matiere.vue?vue&type=script&lang=js\n");

/***/ })

})