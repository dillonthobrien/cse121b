document.getElementById('submitBtn').addEventListener('click', getWeather);

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'api';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        } else {
            document.getElementById('weatherInfo').innerHTML = '<p>City not found</p>';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}