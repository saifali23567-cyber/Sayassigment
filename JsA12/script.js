const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");

const message = document.getElementById("message");
const weatherSection = document.getElementById("weather");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

function getWeatherInfo(code) {
  if (code === 0) return { text: "Clear sky", icon: "☀️" };
  if (code === 1 || code === 2) return { text: "Partly cloudy", icon: "🌤️" };
  if (code === 3) return { text: "Cloudy", icon: "☁️" };
  if (code === 45 || code === 48) return { text: "Foggy", icon: "🌫️" };
  if (code >= 51 && code <= 67) return { text: "Drizzle / Rain", icon: "🌧️" };
  if (code >= 71 && code <= 77) return { text: "Snow", icon: "❄️" };
  if (code >= 80 && code <= 82) return { text: "Rain showers", icon: "🌦️" };
  if (code >= 85 && code <= 86) return { text: "Snow showers", icon: "🌨️" };
  if (code >= 95) return { text: "Thunderstorm", icon: "⛈️" };

  return { text: "Unknown weather", icon: "🌡️" };
}

searchForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const city = cityInput.value.trim();

  if (city === "") {
    message.textContent = "Please enter a city name.";
    return;
  }

  message.textContent = "Loading weather...";
  weatherSection.classList.add("hidden");

  try {
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      message.textContent = "City not found. Please try another city.";
      return;
    }

    const place = geoData.results[0];

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    const current = weatherData.current;
    const info = getWeatherInfo(current.weather_code);

    cityName.textContent = `${place.name}, ${place.country}`;
    weatherIcon.textContent = info.icon;
    temperature.textContent = `${current.temperature_2m} °C`;
    condition.textContent = info.text;
    humidity.textContent = `${current.relative_humidity_2m}%`;
    wind.textContent = `${current.wind_speed_10m} km/h`;

    message.textContent = "";
    weatherSection.classList.remove("hidden");
  } catch (error) {
    message.textContent = "Something went wrong. Please try again.";
    console.error(error);
  }
});
