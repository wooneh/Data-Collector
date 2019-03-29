var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
                hour: 'numeric', minute: 'numeric', hour12: false };
var today = new Date();
var parseDate = today.toLocaleDateString("en-us", options).replace(/,/g," ");
document.getElementById("date").innerHTML = parseDate;
