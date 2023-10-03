const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const leftArr = mergeSort(array.slice(0, middle));
    const rightArr = mergeSort(array.slice(middle));

    return merge(leftArr, rightArr);
}

const merge = (leftArray, rightArray) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArray.length) {
        result.push(leftArray[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArray.length) {
        result.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return result;
}

const unsortedArray = [6, 2, 7, 3, 8, 1, 5, 4];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
