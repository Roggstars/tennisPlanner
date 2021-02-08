function getSeasonPlan(playerList, courtCount, subCount, matchDayCount, participantsPerMatch, playersPerMatch) {
    // This function returns the optimized season plan.
    let playersPlayingAtOnce = playersPerMatch * courtCount;

    // Preallocate player metrics
    let playersPlayedMatches = Array(playerList.length).fill(0);
    let mateWeights = Array.from(Array(playerList.length), _ => Array(playerList.length).fill(0));
    let opponentWeights = Array.from(Array(playerList.length), _ => Array(playerList.length).fill(0));

    // Preallocate substitute metrics
    let playersSubCount = Array.from(Array(subCount), _ => Array(playerList.length).fill(0));

    for (let i = 0; i < mateWeights.length; i++) {
        mateWeights[i][i] = Infinity;
        opponentWeights[i][i] = Infinity;
    }

    let duplicateList = Array.from(Array(playerList.length), _ => Array(matchDayCount - 1).fill(0));

    // Preallocate match/sub list
    let matchList = Array.from(Array(matchDayCount), _ => Array(playersPlayingAtOnce).fill(0));
    let subList = Array.from(Array(matchDayCount), _ => Array(subCount).fill(0));

    // Generate match plan and statistics
    let returnArray;
    for (let i = 0; i < matchDayCount; i++) {
        returnArray = getLeastPlayedPlayers(playersPlayedMatches, playersPlayingAtOnce);
        matchList[i] = returnArray[0];
        playersPlayedMatches = returnArray[1];
        returnArray = getLeastPlayedTogether(matchList[i], mateWeights);
        matchList[i] = returnArray[0];
        mateWeights = returnArray[1];
        if (playersPerMatch === 4) {
	    returnArray = getLeastPlayedAgainst(matchList[i], opponentWeights);
            matchList[i] = returnArray[0];
	}
        opponentWeights = returnArray[1];
        returnArray = getSubList(matchList[i], playersSubCount);
        subList[i] = returnArray[0];
        playersSubCount = returnArray[1];
    }

    return [matchList, playersPlayedMatches, mateWeights, opponentWeights, subList, playersSubCount];
}
