const binarySearch = (array, value) => {
  let lowerIndex = 0;
  let greaterIndex = array.length - 1;

  let foundIndex = null;
  while (lowerIndex <= greaterIndex) {
    let middleIndex = Math.floor((lowerIndex + greaterIndex) / 2);

    currentItem = array[middleIndex];
    if (currentItem === value) {
      foundIndex = middleIndex;
      break;
    }

    if (currentItem > value) {
      greaterIndex = middleIndex - 1;
      continue;
    }

    if (currentItem < value) {
      lowerIndex = middleIndex + 1;
      continue;
    }
  }

  return foundIndex;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
// output: 3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
// output: null
