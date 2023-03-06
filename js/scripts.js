// const inputField = document.getElementById(city)
// const autocompleteList = document.getElementById(autocomplete-list)


//const apiKey = process.env.apiKey

const searchForm = document.querySelector('.searchForm');
const btnSearch = document.querySelector('.bntSearch');
const apiKey = '4cafa176959ccc9551eb2fd2139e4ce4';
const apiWeather = 'https://api.openweathermap.org/data/2.5/weather';
const city = 'CITY_NAME';



function cityWeather(city) {
    fetch(`${apiWeather}?q=${city}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const parsedData = JSON.parse(JSON.stringify(data));

            const temperature = parsedData.main.temp;
            const wind = parsedData.wind.speed;
            const humidity = parsedData.main.humidity;
            const date = new Date(parsedData.dt * 1000);
            const cityName = parsedData.name;

            localStorage.setItem(cityName, JSON.stringify({
                temperature,
                wind,
                humidity,
                date,
                cityName
            }));

            console.log(`Temperature in ${cityName}: ${temperature}F`);
            console.log(`Wind speed in ${cityName}: ${wind} m/s`);
            console.log(`Humidity in ${cityName}: ${humidity}%`);
            console.log(`Date in ${cityName}: ${date}`);
            console.log(`${city}`);

            displayWeather({
                temperature,
                wind,
                humidity,
                date,
                cityName
              });
            
            listCityHistory(cityName);
        })
        .catch(error => {
            console.error(`Error: ${error}`);
        });
        
}
window.onload = function () {
    cityWeather('Portland');
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
});


/**=======================
 *
 **      Search History List
 *             this sucked :[
 *========================**/


 let cityHistory = [];

 function listCityHistory(city) {
   // Push the new city to the cityHistory array
   cityHistory.push(city);
 
   // Store the updated city history array in localStorage
   localStorage.setItem('cityHistory', JSON.stringify(cityHistory));
 
   // Get a reference to the city history list element
   const cityHistoryList = document.querySelector('#cityHistoryList');
 
   // Clear the existing content of the city history list
   cityHistoryList.innerHTML = '';
 
   // Loop through the cityHistory array and create a button for each city
   for (let i = 0; i < cityHistory.length; i++) {
     const cityButton = document.createElement('button');
     cityButton.classList.add('city-history');
     cityButton.textContent = cityHistory[i];
 
     // Add a click event listener to the button
     cityButton.addEventListener('click', function () {
       // Get the city data from localStorage
       const cityData = JSON.parse(localStorage.getItem(cityHistory[i]));
      displayWeather(cityData);
 
       // Do something with the city data, such as display it on the page
       console.log(cityData);
     });
 
     // Append the button to the city history list
     cityHistoryList.appendChild(cityButton);
   }
 }
 
/**=======================
 **      Display content
 *  
 *  
 *========================**/


 function displayWeather(cityData) {
    const weatherList = document.createElement('ul');
    const temperatureItem = document.createElement('li');
    temperatureItem.textContent = `Temperature: ${cityData.temperature}F`;
    const windItem = document.createElement('li');
    windItem.textContent = `Wind speed: ${cityData.wind} m/s`;
    const humidityItem = document.createElement('li');
    humidityItem.textContent = `Humidity: ${cityData.humidity}%`;
    const dateItem = document.createElement('li');
    dateItem.textContent = `Date: ${cityData.date}`;
    const cityNameItem = document.createElement('li');
    cityNameItem.textContent = `City Name: ${cityData.cityName}`;
  
    weatherList.appendChild(temperatureItem);
    weatherList.appendChild(windItem);
    weatherList.appendChild(humidityItem);
    weatherList.appendChild(dateItem);
    weatherList.appendChild(cityNameItem);
  
    // Display the list in the HTML
    const weatherContainer = document.querySelector('#weatherContainer');
    weatherContainer.innerHTML = '';
    weatherContainer.appendChild(weatherList);
  }
displayWeather()
/**============================================
 **               Explanation
 *=============================================**/

//  * .onload
// the onload function sets up a handler function to be called when the AJAX request is complete,
// and stores the parsed JSON data in the browser's local storage if the response has a status
// code of 200. If the response status code is not 200, the localStorage.setItem() method is not
// called, and the data is not stored in local storage
