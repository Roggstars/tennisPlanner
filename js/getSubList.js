function getSubList(playersSelected, playersSubCount) {
    // This function returns the players with the least amount of sub at a specific position without duplicates.
    let subList = Array(playersSubCount.length);
    for (let i = 0; i < playersSubCount.length; i++) {
        let subStats = [];
        for (let j = 0; j < playersSubCount[0].length; j++) {
            if (playersSelected.indexOf(j) === -1) {
                subStats.push([playersSubCount[i][j], j]);
            }
        }

        // Sort subStats
        subStats = subStats.sort(function (a, b) {
            return a[0] - b[0];
        });

        // Shuffle subStats
        subStats.shuffleEqualSorted();
        for (let j = 0; j < subStats.length + 1; j++) {
            if (subList.indexOf(subStats[j][1]) == -1) {
                subList[i] = subStats[j][1];
                playersSubCount[i][subList[i]] += 1;
                break;
            } else {
                continue;
            }
        }
    }
    let returnArray = Array(2);
    returnArray[0] = subList;
    returnArray[1] = playersSubCount;
    return returnArray;
}