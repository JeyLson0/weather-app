import { WeatherData, getWeatherData } from './weatherapi';
import { displayBgVid, displayContent } from './newpage';

const form = document.querySelector('.form-container');
export const locationSearchBox = document.querySelector('#location-search-box');

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

export function removeForm() {
  form.remove();
}

async function transitionPage(event) {
  event.preventDefault();
  const input = locationSearchBox.value;
  const data = await getWeatherData(input);
  if (data instanceof WeatherData) {
    removeForm();
    displayBgVid();
    console.log('change page');
  }
}

form.addEventListener('submit', transitionPage);
