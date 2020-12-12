function shuffle2D(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp0 = array[i][0];
        let temp1 = array[i][1];
        array[i][0] = array[j][0];
        array[i][1] = array[j][1];
        array[j][0] = temp0;
        array[j][1] = temp1;
    }
}

Array.prototype.shuffleEqualSorted = function () {
    // sort values [0], Indices [1]
    let arrayToShuffle = this;

    // Get array parts to shuffle
    let sortSeparationIndices = [];
    for (let i = 0; i < arrayToShuffle.length - 1; i++) {
        if (arrayToShuffle[i][0] !== arrayToShuffle[i+1][0]) {
            sortSeparationIndices.push(i);
        }
    }
    sortSeparationIndices.push(arrayToShuffle.length - 1);

    // Shuffle array parts
    let startSortIndex = 0;
    for (let i = 0; i < sortSeparationIndices.length; i++) {
        shuffle2D(arrayToShuffle.slice(startSortIndex, sortSeparationIndices[i] + 1))
        startSortIndex = sortSeparationIndices[i] + 1;
    }
}
