function addItem() {
    // This function adds an item to the playerList.
    let li = document.createElement("LI");
    let input = document.getElementById("playerToAdd");
    if (input.value !== "") {
        li.innerHTML = input.value;
        input.value = "";
        document.getElementById("playerList").appendChild(li);
        console.log("Added item *" + li.innerHTML + "* to list.")
    }
}
