function getSelectedWeekDays() {
  let weekDayArray = new Array();
  weekDayArray.push(document.getElementById("selectMon").checked);
  weekDayArray.push(document.getElementById("selectTue").checked);
  weekDayArray.push(document.getElementById("selectWed").checked);
  weekDayArray.push(document.getElementById("selectThu").checked);
  weekDayArray.push(document.getElementById("selectFri").checked);
  weekDayArray.push(document.getElementById("selectSat").checked);
  weekDayArray.push(document.getElementById("selectSun").checked);
  return weekDayArray;
}
