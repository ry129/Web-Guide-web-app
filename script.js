const apiKey = "dd609714fe828c02e4ad63dead4cbc45";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
async function checkWeather(city) {
  const response = await fetch(
    apiUrl + city + "&units=imperial" + `&appid=${apiKey}`
  );
  var data = await response.json();
  console.log(data);
  document.querySelector(".location").innerHTML =
    data.name + "," + data.sys.country;
  document.querySelector(".speed").innerHTML =
    Math.round(data.wind.speed) + " mph";
  document.querySelector(".humid").innerHTML = data.main.humidity + "%";
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "&deg;F";
  document.querySelector(".description").innerHTML = data.weather[0].main;
  48;
  if (data.weather[0].main == "Clouds") {
    document.getElementById("today-weather").src = "./images/cloud--sun.png";
  } else if (data.weather[0].main == "Clear") {
    document.getElementById("today-weather").src = "./images/clear.jpg";
  } else if (data.weather[0].main == "Drizzle") {
    document.getElementById("today-weather").src = "./images/drizzle.jpg";
  } else if (data.weather[0].main == "Mist") {
    document.getElementById("today-weather").src = "./images/mist.jpg";
  } else if (data.weather[0].main == "Rain") {
    document.getElementById("today-weather").src = "./images/rain.jpg";
  } else if (data.weather[0].main == "Snow") {
    document.getElementById("today-weather").src = "./images/snow.png";
  }
  document.querySelector(".weather").style.display = "flex";
}
function search() {
  checkWeather(document.getElementById("enter").value);
}
