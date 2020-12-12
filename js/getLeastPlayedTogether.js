function getLeastPlayedTogether(playersSelected, mateWeights) {
    // This function sorts a list of players according to whom they played the least with.
    let playersPlayStats = Array(playersSelected.length);
    let playersLeastPlayedTogether = [];

    // Generate players stats array
    for (let i = 0; i < playersSelected.length; i++) {
        playersPlayStats[i] = Array(2);
        playersPlayStats[i][0] = Array(playersSelected.length);
        for (let j = 0; j < playersSelected.length; j++) {
            playersPlayStats[i][0][j] = Array(2);
            playersPlayStats[i][0][j][0] = mateWeights[playersSelected[i]][playersSelected[j]];
            playersPlayStats[i][0][j][1] = playersSelected[j];
        }
        playersPlayStats[i][0] = playersPlayStats[i][0].sort(function (a, b) {
            return a[0] - b[0];
        });
        playersPlayStats[i][1] = playersSelected[i];
    }

    // Select least played together
    while (playersSelected.length > 0) {
        // Select lucky player and partner according to least matches played of all selectable players
        let luckyIndex = Math.floor(Math.random() * playersSelected.length);
        let luckyPlayer = playersSelected[luckyIndex];
        let indexColumn = getCol(playersPlayStats, 1);
        let findIndex = indexColumn.indexOf(luckyPlayer);
        playersPlayStats[findIndex][0].shuffleEqualSorted();
        let playersIndices = getCol(playersPlayStats[findIndex][0], 1)

        // Remove luckyPlayer
        playersSelected.removeElement(luckyPlayer);

        // Select partner that is in selectedPlayers
        let luckyPlayerPartner;
        for (let i = 0; i < playersIndices.length; i++) {
            if (playersSelected.indexOf(playersIndices[i]) !== -1) {
                luckyPlayerPartner = playersIndices[i];
                break;
            }
        }

        // Increase mate weights
        mateWeights[luckyPlayer][luckyPlayerPartner] += 1;
        mateWeights[luckyPlayerPartner][luckyPlayer] += 1;

        // Remove luckyPlayerPartner
        playersSelected.removeElement(luckyPlayerPartner);

        // Add players to playersLeastPlayedTogether
        playersLeastPlayedTogether.push(luckyPlayer);
        playersLeastPlayedTogether.push(luckyPlayerPartner);
    }

    let returnArray = Array(2);
    returnArray[0] = playersLeastPlayedTogether;
    returnArray[1] = mateWeights;
    return returnArray;
}