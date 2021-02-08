function changeLanguage() {
    let languagePicker = document.getElementById("langselector");
    userLang = languagePicker.value;

    let en = {
        title: "Tennis planner",
        subtitle: "A tool to plan a tennis season of double matches.",
        startDate: "Start date",
        courtCount: "Court count",
        matchWeekCount: "Match week count",
        createPlan: "Create plan",
        reset: "Reset",
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
        Sunday: "Sunday",
        player: "Player",
        add: "Add",
        remove: "Remove",
        matchPlan: "Match plan",
        playedMatches: "Played matches",
        substituteCounts: "Substitute counts",
        playedTogether: "Played together count",
        playedAgainst: "Played against count",
        date: "Date",
        court: "Court",
        substitute: "Substitutes",
	matchType: "Match type",
	single: "Single",
	double: "Double"
    }

    let de = {
        title: "Tennisplan",
        subtitle: "Ein Tool zum Erstellen eines Saisonplans für Tennis-Doppel.",
        startDate: "Startdatum",
        courtCount: "Platzanzahl",
        matchWeekCount: "Wochenanzahl",
        createPlan: "Plan erstellen",
        reset: "Zurücksetzen",
        Monday: "Montag",
        Tuesday: "Dienstag",
        Wednesday: "Mittwoch",
        Thursday: "Donnerstag",
        Friday: "Freitag",
        Saturday: "Samstag",
        Sunday: "Sonntag",
        player: "Spieler",
        add: "Hinzufügen",
        remove: "Löschen",
        matchPlan: "Spielplan",
        playedMatches: "Gespielte Spiele",
        substituteCounts: "Anzahl Ersatz",
        playedTogether: "Anzahl Mitspieler",
        playedAgainst: "Anzahl Gegenspieler",
        date: "Datum",
        court: "Platz",
        substitute: "Ersatz",
	matchType: "Spielform",
	single: "Einzel",
	double: "Doppel"
    }

    let lang;

    if (userLang === "de") {
        languagePicker.value = "de";
        lang = de;
    } else {
        languagePicker.value = "en";
        lang = en;
    }

    document.getElementById("title").innerText = lang.title;
    document.getElementById("subtitle").innerText = lang.subtitle;
    document.getElementById("startDateLabel").innerText = lang.startDate;
    document.getElementById("courtCountLabel").innerText = lang.courtCount;
    document.getElementById("matchWeekCountLabel").innerText = lang.matchWeekCount;
    document.getElementById("createPlan").innerText = lang.createPlan;
    document.getElementById("resetButton").innerText = lang.reset;
    document.getElementById("selectMonLabel").innerText = lang.Monday;
    document.getElementById("selectTueLabel").innerText = lang.Tuesday;
    document.getElementById("selectWedLabel").innerText = lang.Wednesday;
    document.getElementById("selectThuLabel").innerText = lang.Thursday;
    document.getElementById("selectFriLabel").innerText = lang.Friday;
    document.getElementById("selectSatLabel").innerText = lang.Saturday;
    document.getElementById("selectSunLabel").innerText = lang.Sunday;
    document.getElementById("playerToAddLabel").innerText = lang.player;
    document.getElementById("addPlayer").innerText = lang.add;
    document.getElementById("removePlayer").innerText = lang.remove;
    document.getElementById("matchListTableHeading").innerText = lang.matchPlan;
    document.getElementById("playersPlayedMatchesHeading").innerText = lang.playedMatches;
    document.getElementById("playersPlayedTogetherHeading").innerText = lang.playedTogether;
    document.getElementById("playersPlayedAgainstHeading").innerText = lang.playedAgainst;
    document.getElementById("subCountHeading").innerText = lang.substituteCounts;
    document.getElementById("matchTypeSelectorLabel").innerText = lang.matchType;
    document.getElementById("matchTypeSelector").options[0].text = lang.single;
    document.getElementById("matchTypeSelector").options[1].text = lang.double;
}

let userLang = navigator.language.substring(0,2);
document.getElementById("langselector").value = userLang;
changeLanguage();
