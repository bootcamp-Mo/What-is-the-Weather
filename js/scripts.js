

// const apiKey = process.env.apiKey

const searchForm = document.querySelector('.searchForm');
const btnSearch = document.querySelector('.btnSearch');
const apiKey = '4cafa176959ccc9551eb2fd2139e4ce4';
const apiWeather = 'https://api.openweathermap.org/data/2.5/weather';
const apiForecast = 'https://api.openweathermap.org/data/2.5/forecast'
const city = 'CITY_NAME';

const iconImageMap = {
  '01d': 'sun.png',
  '01n': 'sun.png',
  '02d': 'overcast.png',
  '02n': 'overcast.png',
  '03d': 'overcast.png',
  '03n': 'overcast.png',
  '04d': 'overcast.png',
  '04n': 'overcast.png',
  '09d': 'rain.png',
  '09n': 'rain.png',
  '10d': 'rain.png',
  '10n': 'rain.png',
  '11d': 'lighting.png',
  '11n': 'lighting.png',
  '13d': 'snow.png',
  '13n': 'snow.png',
  '50d': 'fog.png',
  '50n': 'fog.png',
};


const weatherContainer = document.querySelector('#weatherContainer');

function cityWeather(city) {
  fetch(`${apiWeather}?q=${city}&appid=${apiKey}&units=imperial&cnt=5`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const parsedData = JSON.parse(JSON.stringify(data));

      const displayWeather = document.createElement('ul');
      const weatherItem = document.createElement('li');
      const weatherIcon = parsedData.weather[0].icon;

      const iconImage = iconImageMap[weatherIcon];
      const imgSrc = `./image/${iconImage}`;

      const temperature = parsedData.main.temp;
      const wind = parsedData.wind.speed;
      const humidity = parsedData.main.humidity;
      const date = new Date(parsedData.dt * 1000).toLocaleDateString();
      const cityName = parsedData.name;

      weatherItem.innerHTML = `
          <h3 class="cityNameH3">${cityName}</h3>
          <div class="weatherListBox">
            <p class="cityDate">Date: ${date}</p>
            <p>Temperature: ${temperature}F</p>
            <p>Wind speed: ${wind} m/s</p>
            <p>Humidity: ${humidity}%</p>
            <img src="${imgSrc}" alt="Weather Icon">
          </div>
        `;
      displayWeather.appendChild(weatherItem);

      weatherContainer.innerHTML = '';
      weatherContainer.appendChild(displayWeather);

      // Add city to history list and create button
      listCityHistory(cityName);
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
}
/**=======================
 **              Button 
 **        click click click
 *  
 *========================**/
searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const cityName = event.target.elements.cityName.value;
  cityWeather(cityName);
  cityForecast(cityName);
  event.target.elements.cityName.value = '';
});

/**=======================
 *
 **      Search History List
 *             this sucked :[
 *========================**/


let cityHistory = [];
function listCityHistory(city) {
  if (cityHistory.indexOf(city) !== -1) {
    return;
  }
  cityHistory.push(city);

  localStorage.setItem('cityHistory', JSON.stringify(cityHistory));

  cityHistoryList.innerHTML = '';

  for (let i = 0; i < cityHistory.length; i++) {
    const cityButton = document.createElement('button');
    cityButton.classList.add('city-history');
    cityButton.textContent = cityHistory[i];

    cityButton.addEventListener('click', function () {
      cityWeather(cityHistory[i]);
    });

    cityHistoryList.appendChild(cityButton);
  }
}





/**=======================
 **      five day forecast
 *
 *========================**/
const weatherBox = document.querySelector('#weatherBox');

function cityForecast(city) {
  fetch(`${apiForecast}?q=${city}&appid=${apiKey}&units=imperial&cnt=6`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const parsedData = JSON.parse(JSON.stringify(data));

      const forecastList = document.createElement('ul');

      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1);

      parsedData.list.slice(1).forEach(function (forecast, index) {
        const forecastItem = document.createElement('li');

        const temperature = forecast.main.temp;
        const wind = forecast.wind.speed;
        const humidity = forecast.main.humidity;
        const date = new Date(currentDate.getTime() + index * 24 * 60 * 60 * 1000).toLocaleDateString();

        forecastItem.innerHTML = `
        <div class="forecastListBox"> 
        <p>Date: ${date}</p>
        <p>Temperature: ${temperature}F</p>
        <p>Wind speed: ${wind} m/s</p>
        <p>Humidity: ${humidity}%</p>
        </div>
        `

        forecastList.appendChild(forecastItem);
      });

      weatherBox.innerHTML = '';
      weatherBox.appendChild(forecastList);
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
}

window.onload = function () {
  cityWeather('Portland')
  cityForecast('Portland')
}

/**============================================
 **               Explanation
 *=============================================**/

//  * .onload
// the onload function sets up a handler function to be called when the AJAX request is complete,
// and stores the parsed JSON data in the browser's local storage if the response has a status
// code of 200. If the response status code is not 200, the localStorage.setItem() method is not
// called, and the data is not stored in local storage
