(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sortian"] = factory();
	else
		root["sortian"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*!
	 * Sortian JavaScript Library v@VERSION
	 * http://...
	 *
	 * Copyright Phantr4x
	 * Released under the MIT license
	 *
	 * Date: @DATE
	 */
	
	(function (global, factory) {
	  if (typeof module === "object" && typeof module.exports === "object") {
	    module.exports = global.document ? factory(global, true) : function (w) {
	      if (!w.document) {
	        throw new Error("Sortian requires a window with a document");
	      }
	      return factory(w);
	    };
	  } else {
	    factory(global);
	  }
	})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
	
	  var version = "0.1.0";
	
	  var Sortian = function () {
	    return Sortian.fn.init();
	  };
	
	  Sortian.fn = Sortian.prototype = function () {};
	
	  var _Sortian = window.Sortian,
	      _St = window.St,
	      _st = window.st;
	
	  Sortian.noConflict = function (deepName) {
	    if (window.St === Sortian) window.St = _St;
	    if (window.st === Sortian) window.st = _st;
	    if (deepName && window.Sortian === Sortian) window.Sortian = _Sortian;
	    return Sortian;
	  };
	
	  if (!noGlobal) {
	    window.Sortian = window.St = window.st = Sortian;
	  }
	
	  return Sortian;
	});
	
	// // 冒泡排序
	// bubbleSort: function (arr) {
	//   if (arr.length <= 1) return arr;
	//   for (var i = 0; i < arr.length; i++) {
	//     for (var j = 0; j < arr.length - i - 1; j++) {
	//       if (arr[j] > arr[j+1]) {
	//         var swap = arr[j];
	//         arr[j] = arr[j+1];
	//         arr[j+1] = swap;
	//       }
	//     }
	//   }
	//   return arr;
	// },
	// // 快速排序
	// quickSort: function (arr) {
	//   if (arr.length <= 1) {
	//     return arr;
	//   }
	//   var pivotIndex = Math.floor(arr.length / 2);
	//   var pivot = arr.splice(pivotIndex, 1)[0];
	//   var left = [];
	//   var right = [];
	//   for (var i = 0; i < arr.length; i++) {
	//     if (arr[i] < pivot) {
	//       left.push(arr[i]);
	//     } else {
	//       right.push(arr[i]);
	//     }
	//   }
	//   return quickSort(left).concat([pivot], quickSort(right));
	// }

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sortian.js.map