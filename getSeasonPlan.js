function getSeasonPlan(playerList, courtCount, subCount, matchDayCount, participantsPerMatch) {
  // This function returns the optimized season plan.
  let playersPlayingAtOnce = 4*courtCount;

  // Preallocate player metrics
  let playersPlayedMatches = Array(playerList.length).fill(0);
  let mateWeights = Array.from(Array(playerList.length), _ => Array(playerList.length).fill(0));
  let opponentWeights = Array.from(Array(playerList.length), _ => Array(playerList.length).fill(0));
  let duplicateList = Array.from(Array(playerList.length), _ => Array(matchDayCount - 1).fill(0));

  // Preallocate match list
  let matchList = Array.from(Array(playersPlayingAtOnce), _ => Array(matchDayCount).fill(0))

  // Generate match plan and statistics
  for (i = 0; i < matchDayCount; i++) {
    matchList = getLeastPlayedPlayers(playersPlayedMatches, playersPlayingAtOnce);
  }

}
