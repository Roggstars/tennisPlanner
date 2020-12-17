document.getElementById("matchListTableHeading").style.visibility = "hidden";
document.getElementById("playersPlayedMatchesHeading").style.visibility = "hidden";
document.getElementById("playersPlayedTogetherHeading").style.visibility = "hidden";
document.getElementById("playersPlayedAgainstHeading").style.visibility = "hidden";
document.getElementById("subCountHeading").style.visibility = "hidden";

function addItem() {
    // This function adds an item to the playerList.
    let li = document.createElement("LI");
    li.classList.add("list-group-item");
    let input = document.getElementById("playerToAdd");
    if (input.value !== "") {
        li.appendChild(document.createTextNode(input.value));
        document.getElementById("playerList").prepend(li);
        input.value = "";
    }
}
function removeItem() {
    // This function removes an item from the player list if the list is not empty.
    let playerList = document.getElementById("playerList");
    if (playerList.innerHTML !== "") {
        playerList.removeChild(playerList.firstElementChild);
    }
}
function clearList() {
    document.getElementById("playerList").innerHTML = "";
    removeOldTables();
    document.getElementById("matchListTableHeading").style.visibility = "hidden";
    document.getElementById("playersPlayedMatchesHeading").style.visibility = "hidden";
    document.getElementById("playersPlayedTogetherHeading").style.visibility = "hidden";
    document.getElementById("playersPlayedAgainstHeading").style.visibility = "hidden";
    document.getElementById("subCountHeading").style.visibility = "hidden";
}
function addItemEnter(e) {
    if (e.key === "Enter") {
        addItem();
    }
}