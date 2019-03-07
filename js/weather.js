var query = "http://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=APIKEY&units=metric"
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        document.getElementById("temp").innerHTML = json.main.temp + "C";

        var weather = json.weather;
        var icons = "";
        for (var i = 0; i < weather.length; i++) {
          console.log(weather);
          icons += "<img src=\"http://openweathermap.org/img/w/" + weather[i].icon +
          ".png\" />"
        }
        document.getElementById("weather").innerHTML = icons;
    }
};
xmlhttp.open("GET", query, true);
xmlhttp.send();
