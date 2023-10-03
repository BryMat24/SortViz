const mergeSortAlgorithm = (mainArray, startIdx, endIdx, auxiliaryArray, animations) => {
    if (startIdx === endIdx) return;

    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    mergeSortAlgorithm(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortAlgorithm(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);

    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
};

const merge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
        animations.push({ comparison: [i, j], swap: false });
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push({ comparison: [i, k], swap: true });
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push({ comparison: [j, k], swap: true });
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middleIdx) {
        animations.push({ comparison: [i, k], swap: true });
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIdx) {
        animations.push({ comparison: [j, k], swap: true });
        mainArray[k++] = auxiliaryArray[j++];
    }
};

export const mergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;

    const auxiliaryArray = [...array];
    mergeSortAlgorithm(array, 0, array.length - 1, auxiliaryArray, animations);

    return animations;
};

