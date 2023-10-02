export const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; ++i) {
        for (let j = i + 1; j < array.length; ++j) {
            if (array[i] > array[j]) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }

    return [...array];
}