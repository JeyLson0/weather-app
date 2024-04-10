const header = document.querySelector('header');

const contentWrapperElem = document.createElement('div');
contentWrapperElem.className = 'content-wrapper';

const contentContainerElem = document.createElement('div');
contentContainerElem.className = 'content-container';

const nameContainerElem = document.createElement('div');
nameContainerElem.className = 'data-container';
nameContainerElem.id = 'name-container';
const nameTitleElem = document.createElement('p');
nameTitleElem.id = 'name-title';
nameTitleElem.className = 'title';
nameTitleElem.textContent = 'Search:';
const nameDataElem = document.createElement('p');
nameDataElem.id = 'name-data';
nameDataElem.className = 'data';
nameContainerElem.appendChild(nameTitleElem);
nameContainerElem.appendChild(nameDataElem);

const regionContainerElem = document.createElement('div');
regionContainerElem.className = 'data-container';
regionContainerElem.id = 'region-container';
const regionTitleElem = document.createElement('p');
regionTitleElem.id = 'region-title';
regionTitleElem.className = 'title';
regionTitleElem.textContent = 'Region:';
const regionDataElem = document.createElement('p');
regionDataElem.id = 'region-data';
regionDataElem.className = 'data';
regionContainerElem.appendChild(regionTitleElem);
regionContainerElem.appendChild(regionDataElem);

const countryContainerElem = document.createElement('div');
countryContainerElem.className = 'data-container';
countryContainerElem.id = 'country-container';
const countryTitleElem = document.createElement('p');
countryTitleElem.id = 'country-title';
countryTitleElem.className = 'title';
countryTitleElem.textContent = 'Country:';
const countryDataElem = document.createElement('p');
countryDataElem.id = 'country-data';
countryDataElem.className = 'data';
countryContainerElem.appendChild(countryTitleElem);
countryContainerElem.appendChild(countryDataElem);

const temperatureContainerElem = document.createElement('div');
temperatureContainerElem.className = 'data-container';
temperatureContainerElem.id = 'temperature-container';
const temperatureTitleElem = document.createElement('p');
temperatureTitleElem.id = 'temperature-title';
temperatureTitleElem.className = 'title';
temperatureTitleElem.textContent = 'Temp:';
const temperatureTitleDataElem = document.createElement('p');
temperatureTitleDataElem.id = 'temperature-data';
temperatureTitleDataElem.className = 'data';
temperatureContainerElem.appendChild(temperatureTitleElem);
temperatureContainerElem.appendChild(temperatureTitleDataElem);

const conditionContainerElem = document.createElement('div');
conditionContainerElem.className = 'data-container';
conditionContainerElem.id = 'condition-container';
const conditionTitleElem = document.createElement('p');
conditionTitleElem.id = 'condition-title';
conditionTitleElem.className = 'title';
conditionTitleElem.textContent = 'Condition:';
const conditionDataElem = document.createElement('p');
conditionDataElem.id = 'condition-data';
conditionDataElem.className = 'data';
conditionContainerElem.appendChild(conditionTitleElem);
conditionContainerElem.appendChild(conditionDataElem);

const imageWrapperElem = document.createElement('div');
imageWrapperElem.className = 'data-container';
contentContainerElem.id = 'image-wrapper';
const iconData = document.createElement('img');
iconData.id = 'icon-data';
imageWrapperElem.appendChild(iconData);

const dataContainerArr = [
  nameContainerElem,
  regionContainerElem,
  countryContainerElem,
  temperatureContainerElem,
  conditionContainerElem,
  imageWrapperElem,
];

export default async function assembleContent(data) {
  contentWrapperElem.appendChild(contentContainerElem);
  dataContainerArr.forEach(element => {
    contentContainerElem.appendChild(element);
  });
  header.insertAdjacentElement('afterend', contentWrapperElem);
  nameDataElem.textContent = data.name;
  regionDataElem.textContent = data.location;
  countryDataElem.textContent = data.country;
  temperatureTitleDataElem.textContent = `${data.celsius}c / ${data.fahrenheit}f`;
  conditionDataElem.textContent = data.apiCondition;
  iconData.src = data.conditionIcon;
}

header.addEventListener('click', e => {});
