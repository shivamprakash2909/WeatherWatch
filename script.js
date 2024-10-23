const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ad49ff204emsh3930e7d83641fb3p174f60jsn511c21e21c5e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const fetchWeather = (city) => {
  const response = fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      let Timestamp1 = response.sunrise;
      var milliseconds = Timestamp1 * 1000;
      var date = new Date(milliseconds);

      let Timestamp2 = response.sunset;
      var milliseconds2 = Timestamp2 * 1000;
      var date2 = new Date(milliseconds2);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = date.toLocaleTimeString("en-US");
      sunset.innerHTML = date2.toLocaleTimeString("en-US");

      if (response.temp < 15) {
        weatherImage.src = "coldWeather.gif";
      } else if (response.temp > 30) {
        weatherImage.src = "hotWeather.gif";
      } else {
        weatherImage.src = "partlyCloud.gif";
      }
    })
    .catch((error) => console.error(error));
};

searchButton.addEventListener("click", () => {
  fetchWeather(searchbox.value);
  cityName.innerHTML = searchbox.value;
});

fetchWeather("Patna");
