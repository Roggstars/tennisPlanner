function generateMatchPlan() {
    // Check if there is an old match plan present
    let oldTable = document.getElementById("matchListTable");
    if (oldTable) {
        oldTable.remove();
    }

    // Check if there is an old matches played table
    oldTable = document.getElementById("playersPlayedMatchesTable")
    if (oldTable) {
        oldTable.remove();
    }

    // Check if there is an old played together table
    oldTable = document.getElementById("playersPlayedTogetherTable")
    if (oldTable) {
        oldTable.remove();
    }

    // Get values from inputs
    let playerList = document.getElementById("playerList");
    let playerListItems = playerList.getElementsByTagName("li");
    let matchWeekCount = document.getElementById("matchWeekCount").valueAsNumber;
    let courtCount = document.getElementById("courtCount").valueAsNumber;
    let subCount = document.getElementById("subCount").valueAsNumber;

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
    let participantsPerMatchDay = playersPerMatch * courtCount + subCount;

    // Setup table variables
    let cell;
    let row;
    let text;

    let inputError;
    if (participantsPerMatchDay > playerListItems.length) {
        inputError = 1;
    } else if (!document.getElementById("selectMon").checked &&
        !document.getElementById("selectTue").checked &&
        !document.getElementById("selectWed").checked &&
        !document.getElementById("selectThu").checked &&
        !document.getElementById("selectFri").checked &&
        !document.getElementById("selectSat").checked &&
        !document.getElementById("selectSun").checked) {
        inputError = 2;
    } else if (playerList.innerHTML === "") {
        inputError = 3;
    } else if (isNaN(courtCount)) {
        inputError = 4;
    } else if (isNaN(subCount)) {
        inputError = 5;
    } else if (isNaN(matchWeekCount)) {
        inputError = 6;
    } else if (!(startDate instanceof Date) || isNaN(startDate)) {
        inputError = 7;
    } else {
        inputError = 0;
    }

    if (!inputError) {
        // Setup matchListTable
        let matchListTable = document.createElement("TABLE");
        matchListTable.setAttribute("id", "matchListTable");
        row = matchListTable.insertRow(0);
        cell = row.insertCell(0);
        text = document.createTextNode("Date");
        cell.appendChild(text);
        document.body.appendChild(matchListTable);

        // Setup playersPlayedMatchesTable
        let playersPlayedMatchesTable = document.createElement("TABLE");
        playersPlayedMatchesTable.setAttribute("id", "playersPlayedMatchesTable");
        row = playersPlayedMatchesTable.insertRow(0);
        cell = row.insertCell(0);
        text = document.createTextNode("Player");
        cell.appendChild(text);
        cell = row.insertCell(1);
        text = document.createTextNode("Games played");
        cell.appendChild(text);
        document.body.appendChild(playersPlayedMatchesTable);

        // Setup playersPlayedMatchesTable
        let playersPlayedTogetherTable = document.createElement("TABLE");
        playersPlayedTogetherTable.setAttribute("id", "playersPlayedTogetherTable");
        row = playersPlayedTogetherTable.insertRow(0);
        cell = row.insertCell(0);
        text = document.createTextNode("");
        cell.appendChild(text);
        for (let j = 0; j < playerListItems.length; j++) {
            cell = row.insertCell(j + 1);
            text = document.createTextNode(playerListText[j]);
            cell.appendChild(text);
        }
        document.body.appendChild(playersPlayedTogetherTable);

        // Get results of optimization
        let seasonStats = getSeasonPlan(playerListText, courtCount, subCount, dateArray.length, participantsPerMatchDay);

        // Insert results in matchListTable
        let appendDate;
        for (let i = 0; i < dateArray.length; i++) {
            row = matchListTable.insertRow(i + 1);
            cell = row.insertCell(0);
            appendDate = document.createTextNode(dateArray[i].toDateString());
            cell.appendChild(appendDate);
            for (let j = 0; j < participantsPerMatchDay; j++) {
                cell = row.insertCell(j + 1);
                text = document.createTextNode(playerListText[seasonStats[0][i][j]]);
                cell.appendChild(text);
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
    } else {
        switch (inputError) {
            case 1:
                alert("Insufficient amount of players to fill all courts.");
                break;
            case 2:
                alert("No match dates selected.");
                break;
            case 3:
                alert("Player list is empty.");
                break;
            case 4:
                alert("Please enter a court count.");
                break;
            case 5:
                alert("Please enter a substitute count (can be zero).");
                break;
            case 6:
                alert("Please enter a week count for the season.");
                break;
            case 7:
                alert("Please enter a start date.");
                break;
        }
    }
}
