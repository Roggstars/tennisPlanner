function generateMatchPlan() {
    removeOldTables();

    // Get values from inputs
    let playerList = document.getElementById("playerList");
    let playerListItems = playerList.getElementsByTagName("li");
    let matchWeekCount = document.getElementById("matchWeekCount").valueAsNumber;
    let courtCount = document.getElementById("courtCount").valueAsNumber;

    // Extract clear names from players
    let playerListText = Array(playerListItems.length)
    for (let i = 0; i < playerListItems.length; i++) {
        playerListText[i] = playerListItems[i].innerText;
    }

    // Generate match dates dateArray
    let weekDayArray = getSelectedWeekDays();
    let startDate = new Date(document.getElementById("startDate").value);
    let dateArray = getDateArray(startDate, weekDayArray, matchWeekCount);

    // Participants calculation
    let playersPerMatch = 4;
    let subCount = playerListItems.length - playersPerMatch * courtCount;
    let participantsPerMatchDay = playersPerMatch * courtCount + subCount;

    // Setup table variables
    let cell;
    let row;
    let text;

    let inputError;
    if (isNaN(courtCount)) {
        inputError = 1;
    } else if (!(startDate instanceof Date) || isNaN(startDate)) {
        inputError = 2;
    } else if (isNaN(matchWeekCount)) {
        inputError = 3;
    } else if (!document.getElementById("selectMon").checked &&
        !document.getElementById("selectTue").checked &&
        !document.getElementById("selectWed").checked &&
        !document.getElementById("selectThu").checked &&
        !document.getElementById("selectFri").checked &&
        !document.getElementById("selectSat").checked &&
        !document.getElementById("selectSun").checked) {
        inputError = 4;
    } else if (playerListItems.length === 0) {
        inputError = 5;
    } else if (subCount < 0) {
        inputError = 6;
    } else {
        inputError = 0;
    }

    if (!inputError) {
        // Setup matchListTable
        let matchListTable = document.getElementById("matchListTable");
        row = matchListTable.insertRow(0);
        cell = row.insertCell(0);
        text = document.createTextNode("Date");
        cell.appendChild(text);
        for (let i = 0; i < courtCount; i++) {
            text = document.createTextNode("Court " + (i + 1).toString());
            cell = row.insertCell(i + 1);
            cell.appendChild(text);
            cell.colSpan = playersPerMatch;
        }
        if (subCount > 0) {
            text = document.createTextNode("Substitutes");
            cell = row.insertCell(courtCount + 1);
            cell.appendChild(text);
            cell.colSpan = subCount;
        }
        document.getElementById("matchListTable").className += " pageBreakAfter";

        // Setup playersPlayedMatchesTable
        let playersPlayedMatchesTable = document.getElementById("playersPlayedMatchesTable");
        row = playersPlayedMatchesTable.insertRow(0);
        cell = row.insertCell(0);
        text = document.createTextNode("Player");
        cell.appendChild(text);
        cell = row.insertCell(1);
        text = document.createTextNode("Games played");
        cell.appendChild(text);
        document.getElementById("playersPlayedMatchesTable").className += " pageBreakAfter";

        // Setup playersPlayedTogetherTable
        let playersPlayedTogetherTable = document.getElementById("playersPlayedTogetherTable");
        row = playersPlayedTogetherTable.insertRow(0);
        cell = row.insertCell(0);
        text = document.createTextNode("");
        cell.appendChild(text);
        for (let j = 0; j < playerListItems.length; j++) {
            cell = row.insertCell(j + 1);
            text = document.createTextNode(playerListText[j]);
            cell.appendChild(text);
        }
        document.getElementById("playersPlayedTogetherTable").className += " pageBreakAfter";

        // Setup playersPlayedTogetherTable
        let playersPlayedAgainstTable = document.getElementById("playersPlayedAgainstTable");
        row = playersPlayedAgainstTable.insertRow(0);
        cell = row.insertCell(0);
        text = document.createTextNode("");
        cell.appendChild(text);
        for (let j = 0; j < playerListItems.length; j++) {
            cell = row.insertCell(j + 1);
            text = document.createTextNode(playerListText[j]);
            cell.appendChild(text);
        }

        // Setup subCountTable
        if (subCount > 0) {
            let subCountTable = document.getElementById("subCountTable");
            row = subCountTable.insertRow(0);
            cell = row.insertCell(0);
            text = document.createTextNode("Player");
            cell.appendChild(text);
            for (let i = 0; i < subCount; i++) {
                cell = row.insertCell(i + 1);
                text = document.createTextNode("Substitute " + (i + 1).toString());
                cell.appendChild(text);
            }
        }

        // Get results of optimization
        let seasonStats = getSeasonPlan(playerListText, courtCount, subCount, dateArray.length, participantsPerMatchDay);

        // Insert results in matchListTable
        let appendDate;
        for (let i = 0; i < dateArray.length; i++) {
            row = matchListTable.insertRow(i + 1);
            cell = row.insertCell(0);
            if ((dateArray[i].getMonth() + 1) < 10) {
                if (dateArray[i].getDate() < 10) {
                    appendDate = document.createTextNode("0" + dateArray[i].getDate() + ".0" + (dateArray[i].getMonth() + 1).toString() + ".");
                } else {
                    appendDate = document.createTextNode(dateArray[i].getDate() + ".0" + (dateArray[i].getMonth() + 1).toString() + ".");
                }
            } else {
                if (dateArray[i].getDate() < 10) {
                    appendDate = document.createTextNode("0" + dateArray[i].getDate() + "." + (dateArray[i].getMonth() + 1).toString() + ".");
                } else {
                    appendDate = document.createTextNode(dateArray[i].getDate() + "." + (dateArray[i].getMonth() + 1).toString() + ".");
                }
            }
            cell.appendChild(appendDate);
            let formattingIndex = 0;
            for (let j = 0; j < participantsPerMatchDay; j++) {
                if (j < participantsPerMatchDay - subCount) {
                    cell = row.insertCell(j + 1);
                    text = document.createTextNode(playerListText[seasonStats[0][i][j]]);
                    cell.appendChild(text);
                } else {
                    cell = row.insertCell(j + 1);
                    text = document.createTextNode(playerListText[seasonStats[4][i][j - (participantsPerMatchDay - subCount)]]);
                    cell.appendChild(text);
                }
            }
        }

        // Insert results in playersPlayedMatchesTable
        for (let i = 0; i < seasonStats[1].length; i++) {
            row = playersPlayedMatchesTable.insertRow(i + 1);
            cell = row.insertCell(0);
            text = document.createTextNode(playerListText[i]);
            cell.appendChild(text);
            cell = row.insertCell(1);
            text = document.createTextNode(seasonStats[1][i].toString());
            cell.appendChild(text);
        }

        // Insert results in playersPlayedTogetherTable
        for (let i = 0; i < seasonStats[2].length; i++) {
            row = playersPlayedTogetherTable.insertRow(i + 1);
            cell = row.insertCell(0);
            text = document.createTextNode(playerListText[i]);
            cell.appendChild(text);
            for (let j = 0; j < seasonStats[2].length; j++) {
                cell = row.insertCell(j + 1);
                if (i === j) {
                    text = document.createTextNode("");
                } else {
                    text = document.createTextNode(seasonStats[2][i][j].toString());
                }
                cell.appendChild(text);
            }
        }
        // Insert results in playersPlayedAgainstTable
        for (let i = 0; i < seasonStats[3].length; i++) {
            row = playersPlayedAgainstTable.insertRow(i + 1);
            cell = row.insertCell(0);
            text = document.createTextNode(playerListText[i]);
            cell.appendChild(text);
            for (let j = 0; j < seasonStats[2].length; j++) {
                cell = row.insertCell(j + 1);
                if (i === j) {
                    text = document.createTextNode("");
                } else {
                    text = document.createTextNode(seasonStats[3][i][j].toString());
                }
                cell.appendChild(text);
            }
        }

        // Insert results in subCountTable
        if (subCount > 0) {
            for (let i = 0; i < seasonStats[5][0].length; i++) {
                row = subCountTable.insertRow(i + 1);
                cell = row.insertCell(0);
                text = document.createTextNode(playerListText[i]);
                cell.appendChild(text);
                for (let j = 0; j < subCount; j++) {
                    cell = row.insertCell(j + 1);
                    text = document.createTextNode(seasonStats[5][j][i].toString());
                    cell.appendChild(text);
                }
            }
        }

        let scrollElement = document.getElementById("matchListTable");
        scrollElement.scrollIntoView();
    } else {
        switch (inputError) {
            case 1:
                alert("Please enter a court count.");
                break;
            case 2:
                alert("Please enter a start date.");
                break;
            case 3:
                alert("Please enter a week count for the season.");
                break;
            case 4:
                alert("No match dates selected.");
                break;
            case 5:
                alert("Player list is empty.");
                break;
            case 6:
                alert("Insufficient amount of players to fill all courts.");
                break;
            default:
                break;
        }
    }
}