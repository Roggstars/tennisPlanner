document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("addPlayer").addEventListener('click', addItem);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("playerToAdd").addEventListener("keypress", addItemEnter);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("createPlan").addEventListener('click', generateMatchPlan);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("removePlayer").addEventListener('click', removeItem);
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("resetButton").addEventListener('click', clearList);
});