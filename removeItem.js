function removeItem() {
  let playerList = document.getElementById("playerList");
  if (playerList.innerHTML != "") {
    console.log("Removed item *" + playerList.lastChild.innerHTML + "* from list.");
    playerList.removeChild(playerList.lastChild);
  }
}
