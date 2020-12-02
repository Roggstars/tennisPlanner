function calculateMatchPlan() {
  let oldTable = document.getElementById("matchListTable");
  if (oldTable) {
    oldTable.remove();
  }
  let matchListTable = document.createElement("TABLE");
  matchListTable.setAttribute("id", "matchListTable");
  let playerList = document.getElementById("playerList");
  playerListItems = playerList.getElementsByTagName("li");
  let matchWeekCount = document.getElementById("matchWeekCount").valueAsNumber;
  document.body.appendChild(matchListTable);
  let nameRow = matchListTable.insertRow(0);
  let startDate = new Date(document.getElementById("startDate").value);
  let dateCell = nameRow.insertCell(0);
  let text = document.createTextNode("Date");
  dateCell.appendChild(text);
  let playersPerMatch = 4;
  let courtCount = document.getElementById("courtCount").valueAsNumber;
  let subCount = document.getElementById("subCount").valueAsNumber;
  let participantsPerMatch = playersPerMatch*courtCount + subCount;

  let weekDayArray = getSelectedWeekDays();
  let dateArray = getDateArray(startDate, weekDayArray, matchWeekCount);

  for (i = 0; i < playerListItems.length; i++) {
    cell = nameRow.insertCell(i + 1);
    text = document.createTextNode(playerListItems[i].textContent);
    cell.appendChild(text);
  }
  for (i = 0; i < dateArray.length; i++) {
    row = matchListTable.insertRow(i + 1);
    cell = row.insertCell(0);
    let appendDate = document.createTextNode(dateArray[i].toDateString());
    cell.appendChild(appendDate);
    for (j = 0; j < participantsPerMatch; j++) {
      cell = row.insertCell(j + 1);
      text = document.createTextNode("0");
      cell.appendChild(text);
      console.log("Added item to table");
    }
  }
}
