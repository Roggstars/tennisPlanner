function addItem() {
    // This function adds an item to the playerList.
    let li = document.createElement("LI");
    li.classList.add("list-group-item");
    li.classList.add("list-group-item-action");
    let input = document.getElementById("playerToAdd");
    if (input.value !== "") {
        li.innerHTML = input.value;
        input.value = "";
        document.getElementById("playerList").prepend(li);
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
}
function addItemEnter(e) {
    if (e.key === "Enter") {
        addItem();
    }
}