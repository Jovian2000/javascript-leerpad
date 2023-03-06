// Opdracht: array met dagen
const days = [" maandag", " dinsdag", " woensdag", " donderdag", " vrijdag", " zaterdag", " zondag"];
const nameList = [];
const workDays = days.slice(1,5);

document.getElementById("allDays").innerHTML = days;
document.getElementById("workDays").innerHTML = days.slice(0,5);
document.getElementById("weekend").innerHTML = days.slice(-2);
document.getElementById("daysReverse").innerHTML = days.reverse();
document.getElementById("workdaysReverse").innerHTML = days.slice(2,7);
document.getElementById("weekendReverse").innerHTML = days.slice(0,2);
