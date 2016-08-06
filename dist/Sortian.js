(function(root, undefined) {

  "use strict";


/* Sortian main */

// Base function.
var Sortian = function() {
  // Add functionality here.


  return true;
};

Sortian.bubble = function(array) {
  var length = array.length;
  var i,
    j,
    temp;
  for (i = length - 1; 0 < i; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

Sortian.quickSort = function(array) {
  function swap(array, i, k) {
    var temp = array[i];
    array[i] = array[k];
    array[k] = temp;
  }
  function partition(array, left, right) {
    var storeIndex = left;
    var pivot = array[right];
    for (var i = left; i < right; i++) {
      if (array[i] < pivot) {
        swap(array, storeIndex, i);
        storeIndex++;
      }
    }
    swap(array, right, storeIndex);
    return storeIndex;
  }
  function sort(array, left, right) {
    if (left > right) {
      return;
    }
    var storeIndex = partition(array, left, right);
    sort(array, left, storeIndex - 1);
    sort(array, storeIndex + 1, right);
  }
  sort(array, 0, array.length - 1);
  return array;
};

Sortian.selectionSort = function(array) {
  var length = array.length,
    i,
    j,
    minIndex,
    minValue,
    temp;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    minValue = array[minIndex];
    for (j = i + 1; j < length; j++) {
      if (array[j] < minValue) {
        minIndex = j;
        minValue = array[minIndex];
      }
    }
    temp = array[i];
    array[i] = minValue;
    array[minIndex] = temp;
  }
  return array;
};


// Version.
Sortian.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.Sortian = Sortian;


}(this));
