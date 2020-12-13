function addItemEnter(e) {
    if (e.key === "Enter") {
        addItem();
    }
}

document.getElementById("playerToAdd").addEventListener("keypress", addItemEnter);
