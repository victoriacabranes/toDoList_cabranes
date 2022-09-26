const DateTime = luxon.DateTime;
const date = DateTime.now();


//fecha
const dateContainer = document.getElementById('date-container');
let titleDate = document.createElement('h6');
titleDate.innerText = date.toLocaleString(DateTime.DATE_MED);
let titleDay = document.createElement('h3');

//dia
titleDay.innerText =  date.toFormat('cccc');
dateContainer.appendChild(titleDay);
dateContainer.appendChild(titleDate);