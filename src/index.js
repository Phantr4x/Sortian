/*!
 * Sortian JavaScript Library v@VERSION
 * http://...
 *
 * Copyright Phantr4x
 * Released under the MIT license
 *
 * Date: @DATE
 */

(function ( global, factory ) {
  if ( typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "Sortian requires a window with a document" );
				}
				return factory( w );
			};
  } else {
    factory( global );
  }
}(typeof window !== "undefined" ? window : this, function ( window, noGlobal ) {

  var version = "0.1.0";

  var Sortian = function () {
    return Sortian.fn.init();
  };

  Sortian.fn = Sortian.prototype = function () {

  }

  var _Sortian = window.Sortian,
      _St = window.St,
      _st = window.st;

  Sortian.noConflict = function ( deepName ) {
    if ( window.St === Sortian ) window.St = _St;
    if ( window.st === Sortian ) window.st = _st;
    if ( deepName && window.Sortian === Sortian ) window.Sortian = _Sortian;
    return Sortian;
  }

  if ( !noGlobal ) {
    window.Sortian = window.St = window.st = Sortian;
  }

  return Sortian;
}));

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
