Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDateArray(startDate, weekDays, weekCount){
  let dateArray = new Array();
  let currentDate = startDate;
  let currentDay = startDate.getDay();
  currentDay = currentDay-1%7;

  let first = true;

  for (i = 0; i < weekCount; i++) {
    for (j = 0; j < 7; j++) {
      if (first) {
        j = currentDay;
        first = false;
      }
      if (weekDays[j] == true) {
        dateArray.push(new Date(currentDate));
      }
      currentDate = currentDate.addDays(1);
    }
  }
  return dateArray;
}
