document.getElementById('submitBtn').addEventListener('click', getWeather);

async function getWeather() {
    const location = document.getElementById('locationInput').value;

    // Function to fetch weather data from NWS API
    async function fetchWeatherData(latitude, longitude) {
        const url = `https://api.weather.gov/points/${latitude},${longitude}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const forecastUrl = data.properties.forecast;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();
            return forecastData;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return null;
        }
    }

    // Function to retrieve latitude and longitude for the given city name
    async function getCoordinatesByCity(city) {
        const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.length > 0) {
                return [data[0].lat, data[0].lon];
            } else {
                console.error('Coordinates not found for city:', city);
                return null;
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            return null;
        }
    }

    // Get coordinates for the given city
    const coordinates = await getCoordinatesByCity(location);
    if (coordinates) {
        const [latitude, longitude] = coordinates;
        const forecastData = await fetchWeatherData(latitude, longitude);
        if (forecastData) {
            const firstPeriod = forecastData.properties.periods[0];
            const weatherInfo = `
                <h2>${firstPeriod.name}</h2>
                <p>Temperature: ${firstPeriod.temperature}°F</p>
                <p>Wind Speed: ${firstPeriod.windSpeed}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        } else {
            document.getElementById('weatherInfo').innerHTML = '<p>Weather data not available</p>';
        }
    } else {
        document.getElementById('weatherInfo').innerHTML = '<p>Coordinates not found for the city</p>';
    }
}