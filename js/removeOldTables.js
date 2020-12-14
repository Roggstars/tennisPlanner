function removeOldTables() {
    let oldTable = document.getElementById("matchListTable");
    if (oldTable.rows.length !== 0) {
        oldTable.innerHTML = "";
    }

    // Check if there is an old matches played table
    oldTable = document.getElementById("playersPlayedMatchesTable")
    if (oldTable.rows.length !== 0) {
        oldTable.innerHTML = "";
    }

    // Check if there is an old played together table
    oldTable = document.getElementById("playersPlayedTogetherTable")
    if (oldTable.rows.length !== 0) {
        oldTable.innerHTML = "";
    }

    // Check if there is an old played against table
    oldTable = document.getElementById("playersPlayedAgainstTable")
    if (oldTable.rows.length !== 0) {
        oldTable.innerHTML = "";
    }

    // Check if there is an old sub count table
    oldTable = document.getElementById("subCountTable")
    if (oldTable.rows.length !== 0) {
        oldTable.innerHTML = "";
    }
}