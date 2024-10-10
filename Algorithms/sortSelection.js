//* Searches for SMALLEST number

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    //! Set current index as minimum
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        //! Update minimum --> If current < previous
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
