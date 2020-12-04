function removeItem() {
    // This function removes an item from the player list if the list is not empty.
    let playerList = document.getElementById("playerList");
    if (playerList.innerHTML !== "") {
        console.log("Removed item *" + playerList.lastElementChild.innerHTML + "* from list.");
        playerList.removeChild(playerList.lastElementChild);
    }
}
