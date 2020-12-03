function getLeastPlayedPlayers(playersPlayedMatches, playersPlayingAtOnce) {
    // This function returns a selected amount of players that have played
    // the least amount of matches so far.
    let playersPlayStats = Array(playersPlayedMatches.length);
    for (let i = 0; i < playersPlayedMatches.length; i++) {
        playersPlayStats[i] = Array(2);
        playersPlayStats[i][0] = playersPlayedMatches[i];
        playersPlayStats[i][1] = i;
    }

    playersPlayStats = playersPlayStats.sort(function(a,b) {
        return a[0] - b[0];
    });

    function getCol(matrix, col){
        let column = [];
        for(let i=0; i<matrix.length; i++){
            column.push(matrix[i][col]);
        }
        return column;
    }

    playersPlayStats.shuffleEqualSorted();
    let playerSelectedIndices = getCol(playersPlayStats, 1)
    return playerSelectedIndices.slice(0, playersPlayingAtOnce);
}
