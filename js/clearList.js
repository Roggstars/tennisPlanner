function clearList() {
    document.getElementById("playerList").innerHTML = "";
}

document.getElementById("resetButton").addEventListener('click', clearList);
