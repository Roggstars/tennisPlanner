function generateMatchPlan() {
    // Check if there is an old match plan present
    let oldTable = document.getElementById("matchListTable");
    if (oldTable) {
        oldTable.remove();
    }

    // Get values from inputs
    let matchListTable = document.createElement("TABLE");
    let playerList = document.getElementById("playerList");
    let matchWeekCount = document.getElementById("matchWeekCount").valueAsNumber;
    let courtCount = document.getElementById("courtCount").valueAsNumber;
    let subCount = document.getElementById("subCount").valueAsNumber;

    // Generate match dates dateArray
    let weekDayArray = getSelectedWeekDays();
    let startDate = new Date(document.getElementById("startDate").value);
    let dateArray = getDateArray(startDate, weekDayArray, matchWeekCount);

    // Participants calculation
    let playersPerMatch = 4;
    let participantsPerMatchDay = playersPerMatch * courtCount + subCount;

    // Setup matchListTable
    let nameRow = matchListTable.insertRow(0);
    let dateCell = nameRow.insertCell(0);
    let text = document.createTextNode("Date");
    matchListTable.setAttribute("id", "matchListTable");
    let playerListItems = playerList.getElementsByTagName("li");

    // Extract clear names from players
    let playerListText = Array(playerListItems.length)
    for (let i = 0; i < playerListItems.length; i++) {
        playerListText[i] = playerListItems[i].innerText;
    }

    document.body.appendChild(matchListTable);
    dateCell.appendChild(text);

    // Get results of optimization
    let seasonPlan = getSeasonPlan(playerListText, courtCount, subCount, dateArray.length, participantsPerMatchDay);

    // Insert results in matchListTable
    let cell;
    let row;
    let appendDate;
    for (let i = 0; i < dateArray.length; i++) {
        row = matchListTable.insertRow(i + 1);
        cell = row.insertCell(0);
        appendDate = document.createTextNode(dateArray[i].toDateString());
        cell.appendChild(appendDate);
        for (let j = 0; j < participantsPerMatchDay; j++) {
            cell = row.insertCell(j + 1);
            text = document.createTextNode(playerListText[seasonPlan[i][j]]);
            cell.appendChild(text);
        }
    }
}
