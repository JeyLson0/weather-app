const p = '42c4fc7289824302a0f135323240204';

export class WeatherData {
  constructor(
    input,
    location,
    country,
    celsius,
    fahrenheit,
    apiCondition,
    conditionIcon,
  ) {
    this.name = input;
    this.location = location;
    this.country = country;
    this.celsius = celsius;
    this.fahrenheit = fahrenheit;
    this.apiCondition = apiCondition;
    this.conditionIcon = conditionIcon;
  }

  showData() {
    // edit code that will show data to the box.
    console.log(
      `
      Name: ${this.name}
      location: ${this.location} 
      country: ${this.country} 
      Temperature: ${this.celsius}c / ${this.fahrenheit}f
      Condition: ${this.apiCondition}
      Icon: ${this.conditionIcon}
      `,
    );
  }
}

export async function getWeatherData(input) {
  const weatherAPI = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${p}&q=${input}&aqi=no`,
    { mode: 'cors' },
  );
  const data = await weatherAPI.json();
  try {
    const dataObj = new WeatherData(
      data.location.name,
      data.location.region,
      data.location.country,
      data.current.temp_c,
      data.current.temp_f,
      data.current.condition.text,
      data.current.condition.icon,
    );
    console.log(data);
    return dataObj;
  } catch (error) {
    return data;
  }
}
