Date.prototype.addDays = function (days) {
    // This prototype shifts a date by a given amount of days.
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDateArray(startDate, weekDays, weekCount) {
    // This function generates a date array for a given start date, week days and
    //week count.
    let dateArray = [];
    let currentDate = startDate;

    // Get day as integer starting with 0 on monday.
    let currentDay = startDate.getDay();
    currentDay = currentDay - 1 % 7;

    let firstIteration = true;

    // Generate date array
    for (let i = 0; i < weekCount; i++) {
        for (let j = 0; j < 7; j++) {
            // Check for first iteration to only use dates after the start date in the
            // first week.
            if (firstIteration) {
                j = currentDay;
                firstIteration = false;
            }
            if (weekDays[j] === true) {
                dateArray.push(new Date(currentDate));
            }
            currentDate = currentDate.addDays(1);
        }
    }
    return dateArray;
}
