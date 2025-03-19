const WEATHER_API_KEY = 'XKG9SPR5EH6Y3B8YW5J743MSD';
let CITY = 'Iasi';
let COUNTRY = 'RO';
let FULL_LOCATION = `${CITY}%2C${COUNTRY}`;

let WEATHER_API_METRIC = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${FULL_LOCATION}?unitGroup=us&key=${WEATHER_API_KEY}`

function updateLink(FULL_LOCATION) {
    WEATHER_API_METRIC = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${FULL_LOCATION}?unitGroup=us&key=${WEATHER_API_KEY}`
}

const search = document.querySelector('#search-btn');
const city = document.querySelector('#city-input');
const country = document.querySelector('#country-input');
const locatio = document.querySelector('#location');
const weather = document.querySelector('#weather');
const feelsLike = document.querySelector('#feels-like');

function Display() {
    locatio.textContent = `${CITY}, ${COUNTRY}`;
    weather.textContent = `Weather: ${weatherData.currentConditions.temp} F`;
    feelsLike.textContent = `Feels like: ${weatherData.currentConditions.feelslike} F`;
}

let weatherData = '';

async function getData() {
    try {
    const response = await fetch(WEATHER_API_METRIC, {mode: 'cors'})
    weatherData = await response.json();
    console.log(weatherData)
    Display();
    } catch (error) {
        alert('Location not found')
    }
}

getData();


search.addEventListener('click', () => {
    CITY = city.value;
    COUNTRY = country.value;
    FULL_LOCATION = `${CITY}%2C${COUNTRY}`;
    updateLink(FULL_LOCATION);
    getData();
    Display();
})
