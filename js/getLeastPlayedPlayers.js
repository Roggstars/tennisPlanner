function getLeastPlayedPlayers(playersPlayedMatches, playersPlayingAtOnce) {
    // This function returns a selected amount of players that have played
    // the least amount of matches so far.
    let playersPlayStats = Array(playersPlayedMatches.length);
    for (let i = 0; i < playersPlayedMatches.length; i++) {
        playersPlayStats[i] = Array(2);
        playersPlayStats[i][0] = playersPlayedMatches[i];
        playersPlayStats[i][1] = i;
    }

    playersPlayStats = playersPlayStats.sort(function (a, b) {
        return a[0] - b[0];
    });

    playersPlayStats.shuffleEqualSorted();
    let playerSelectedIndices = getCol(playersPlayStats, 1);

    let playersSelected = playerSelectedIndices.slice(0, playersPlayingAtOnce);

    for (let j = 0; j < playersPlayedMatches.length; j++) {
        if (playersSelected.includes(j)) {
            playersPlayedMatches[j] += 1;
        }
    }

    let returnArray = Array(2);
    returnArray[0] = playersSelected;
    returnArray[1] = playersPlayedMatches;
    return returnArray;
}
