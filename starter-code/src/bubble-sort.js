/*jshint esversion:6*/
function bubbleSort(array) {
    let length = array.length;
    for (let i = (length - 1); i > 0; i--) {
        // Number of passes
        for (let j = (length - i); j > 0; j--) {
            // Compare the adjacent positions
            if (array[j] < array[j - 1]) {
                // Swap the numbers
                let tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;
