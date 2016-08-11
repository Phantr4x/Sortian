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
  // 交换元素位置
  function swap(array, i, k) {
    var temp = array[i];
    array[i] = array[k];
    array[k] = temp;
  }
  // 数组分区，左小右大
  function partition(array, left, right) {
    var storeIndex = left;
    var pivot = array[right]; // 直接选最右边的元素为基准元素
    for (var i = left; i < right; i++) {
      if (array[i] < pivot) {
        swap(array, storeIndex, i);
        storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
      }
    }
    swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
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

    // 交换位置
    temp = array[i];
    array[i] = minValue;
    array[minIndex] = temp;
  }
  return array;
};


Sortian.heapSort = function(array) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function maxHeapify(array, index, heapSize) {
    var iMax,
      iLeft,
      iRight;
    while (true) {
      iMax = index;
      iLeft = 2 * index + 1;
      iRight = 2 * (index + 1);

      if (iLeft < heapSize && array[index] < array[iLeft]) {
        iMax = iLeft;
      }

      if (iRight < heapSize && array[iMax] < array[iRight]) {
        iMax = iRight;
      }

      if (iMax != index) {
        swap(array, iMax, index);
        index = iMax;
      } else {
        break;
      }
    }
  }

  function buildMaxHeap(array) {
    var i,
      iParent = Math.floor(array.length / 2) - 1;

    for (i = iParent; i >= 0; i--) {
      maxHeapify(array, i, array.length);
    }
  }

  function sort(array) {
    buildMaxHeap(array);

    for (var i = array.length - 1; i > 0; i--) {
      swap(array, 0, i);
      maxHeapify(array, 0, i);
    }
    return array;
  }

  return sort(array);
};


// Version.
Sortian.VERSION = '0.2.0';


// Export to the root, which is probably `window`.
root.Sortian = Sortian;
