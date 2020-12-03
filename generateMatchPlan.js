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
  let participantsPerMatchDay = playersPerMatch*courtCount + subCount;

  // Setup matchListTable
  let nameRow = matchListTable.insertRow(0);
  let dateCell = nameRow.insertCell(0);
  let text = document.createTextNode("Date");
  matchListTable.setAttribute("id", "matchListTable");
  playerListItems = playerList.getElementsByTagName("li");
  document.body.appendChild(matchListTable);
  dateCell.appendChild(text);
  for (i = 0; i < playerListItems.length; i++) {
    cell = nameRow.insertCell(i + 1);
    text = document.createTextNode(playerListItems[i].textContent);
    cell.appendChild(text);
  }

  // Get results of optimization
  let seasonPlan = getSeasonPlan(playerListItems, courtCount, subCount, dateArray.length, participantsPerMatchDay);

  // Insert results in matchListTable
  for (i = 0; i < dateArray.length; i++) {
    row = matchListTable.insertRow(i + 1);
    cell = row.insertCell(0);
    let appendDate = document.createTextNode(dateArray[i].toDateString());
    cell.appendChild(appendDate);
    for (j = 0; j < participantsPerMatchDay; j++) {
      cell = row.insertCell(j + 1);
      text = document.createTextNode("0"); // Results here
      cell.appendChild(text);
    }
  }
}
