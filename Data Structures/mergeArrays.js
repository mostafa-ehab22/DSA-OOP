const mergeArrays = function (array1, array2) {
  console.log(array1.concat(array2).sort((a, b) => a - b));
};

const mergeArrays2 = (array1, array2) => {
  console.log([...array1, ...array2].sort((a, b) => a - b));
};

mergeArrays([1, 2, 5], [4, 2, 3]);
mergeArrays([11, 55, 44], [66, 99, 100]);
