const partition = (array, start, end, animations) => {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; ++i) {
        if (array[i] < pivotValue) {
            animations.push({ comparison: [i, pivotIndex], swap: true })
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        } else {
            animations.push({ comparison: [i, pivotIndex], swap: false })
        }
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    return pivotIndex;
};

const quickSortAlgorithm = (array, start, end, animations) => {
    if (start >= end) {
        return;
    }

    let index = partition(array, start, end);
    quickSortAlgorithm(array, start, index - 1, animations);
    quickSortAlgorithm(array, index + 1, end, animations);
};

export const quickSort = (array) => {
    const animations = [];
    quickSort(array, 0, array.length - 1, animations);
    return animations;
}
