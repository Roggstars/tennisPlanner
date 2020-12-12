function getLeastPlayedAgainst(playersSelected, opponentWeights) {
    // This function sorts a list of players according to whom they played the least against.
    let optimalPlayers = [];
    while (playersSelected.length > 0) {
        let luckyTeamIndex = Math.floor(Math.random() * (playersSelected.length/2));
        optimalPlayers.push(playersSelected[2 * luckyTeamIndex]);
        optimalPlayers.push(playersSelected[2 * luckyTeamIndex + 1]);

        playersSelected.removeElement(playersSelected[2 * luckyTeamIndex + 1]);
        playersSelected.removeElement(playersSelected[2 * luckyTeamIndex]);

        let optimalTeam = Array(2);
        optimalTeam[0] = [];
        optimalTeam[1] = Infinity;
        for (let i = 0; i < playersSelected.length / 2; i++) {
            let team1 = Array(2);
            let team2 = Array(2);
            team1[0] = optimalPlayers[team1.length - 1];
            team1[1] = optimalPlayers[team1.length - 2];
            team2[0] = playersSelected[2 * i];
            team2[1] = playersSelected[2 * i + 1];

            let score = 0;
            for (let j = 0; j < 4; j++) {
                switch (j) {
                    case 0:
                        score += opponentWeights[team1[0]][team2[0]];
                        break;
                    case 1:
                        score += opponentWeights[team1[0]][team2[1]];
                        break;
                    case 2:
                        score += opponentWeights[team1[1]][team2[0]];
                        break;
                    case 3:
                        score += opponentWeights[team1[1]][team2[1]];
                        break;
                }
            }
            if (score === 0) {
                optimalTeam[0] = team2;
                optimalTeam[1] = score;
            } else if (score < optimalTeam[1]) {
                optimalTeam[0] = team2;
                optimalTeam[1] = score;
            }
        }

        optimalPlayers.push(optimalTeam[0][0]);
        optimalPlayers.push(optimalTeam[0][1]);
        playersSelected.removeElement(optimalTeam[0][0]);
        playersSelected.removeElement(optimalTeam[0][1]);

        for (let j = 0; j < 4; j++) {
            switch (j) {
                case 0:
                    opponentWeights[optimalPlayers[optimalPlayers.length - 4]][optimalPlayers[optimalPlayers.length - 2]] += 1;
                    opponentWeights[optimalPlayers[optimalPlayers.length - 2]][optimalPlayers[optimalPlayers.length - 4]] += 1;
                    break;
                case 1:
                    opponentWeights[optimalPlayers[optimalPlayers.length - 4]][optimalPlayers[optimalPlayers.length - 1]] += 1;
                    opponentWeights[optimalPlayers[optimalPlayers.length - 1]][optimalPlayers[optimalPlayers.length - 4]] += 1;
                    break;
                case 2:
                    opponentWeights[optimalPlayers[optimalPlayers.length - 3]][optimalPlayers[optimalPlayers.length - 2]] += 1;
                    opponentWeights[optimalPlayers[optimalPlayers.length - 2]][optimalPlayers[optimalPlayers.length - 3]] += 1;
                    break;
                case 3:
                    opponentWeights[optimalPlayers[optimalPlayers.length - 3]][optimalPlayers[optimalPlayers.length - 1]] += 1;
                    opponentWeights[optimalPlayers[optimalPlayers.length - 1]][optimalPlayers[optimalPlayers.length - 3]] += 1;
                    break;
            }
        }
    }

    let returnArray = Array(2);
    returnArray[0] = optimalPlayers;
    returnArray[1] = opponentWeights;
    return returnArray;
}