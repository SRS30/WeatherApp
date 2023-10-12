// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = '';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeather').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;

    if (location) {
        fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`) // Add &units=metric to get temperature in Celsius
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                displayError(error.message);
            });
    }
});

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p> <!-- Use data.weather[0].main for weather.main -->
        <p>Description: ${data.weather[0].description}</p> <!-- Use data.weather[0].description for weather.description -->
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

function displayError(message) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Error: ${message}</p>`;
}

