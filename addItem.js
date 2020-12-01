function addItem(){
  var li = document.createElement("LI");
  var input = document.getElementById("playerToAdd");
  if(input.value !== "") {
    li.innerHTML = input.value;
    input.value = "";
    document.getElementById("playerList").appendChild(li);
    console.log("Added item to list.")
  }
}
