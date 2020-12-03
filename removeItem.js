function removeItem() {
  // This function removes an item from the player list if the list is not empty.
  let playerList = document.getElementById("playerList");
  if (playerList.innerHTML != "") {
    console.log("Removed item *" + playerList.lastChild.innerHTML + "* from list.");
    playerList.removeChild(playerList.lastChild);
  }
}
