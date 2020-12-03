function getRandomIndices(count) {
    const randomIndices = new Set();
    while(randomIndices.size !== count) {
        randomIndices.add(Math.floor(Math.random() * count) + 1);
    }
}
