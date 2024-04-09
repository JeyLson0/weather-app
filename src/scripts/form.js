import { WeatherData, getWeatherData } from './weatherapi';

const form = document.querySelector('.form-container');
const locationSearchBox = document.querySelector('#location-search-box');

async function textValidation(event) {
  locationSearchBox.setCustomValidity('');
  console.log(event);
  const weatherData = await getWeatherData(event.target.value.trim());
  console.log(weatherData);
  if (Object.hasOwn(weatherData, 'error')) {
    locationSearchBox.setCustomValidity('No matching value found.');
    locationSearchBox.reportValidity();
  }
}

locationSearchBox.addEventListener('change', textValidation);

async function transitionPage(event) {
  event.preventDefault();
  const input = locationSearchBox.value;
  const data = await getWeatherData(input);
  if (data instanceof WeatherData) {
    console.log('change page');
  }
}

form.addEventListener('submit', transitionPage);

export default locationSearchBox;
