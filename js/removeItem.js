function removeItem() {
    // This function removes an item from the player list if the list is not empty.
    let playerList = document.getElementById("playerList");
    if (playerList.innerHTML !== "") {
        playerList.removeChild(playerList.firstElementChild);
    }
}

document.getElementById("removePlayer").addEventListener('click', removeItem);