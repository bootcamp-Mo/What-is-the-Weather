const searchForm = document.querySelector('.searchForm')
const btnSearch = document.querySelector('.bntSearch')


//const apiKey = process.env.apiKey

// * Understand the API documentation: 
// Once you have the API key, you need to understand how to use the API by reading the API 
// documentation. The documentation should provide information on how to structure your API 
// requests and what data you can expect to receive in response.

// * Make an API call: 
// With the API key and knowledge of how to use the API, you can now make 
// API calls to retrieve weather data. In most cases, you would use JavaScript to make an 
// AJAX request to the API endpoint.

// * Parse the response: 
// After making the API call, you will receive a response containing weather data in JSON 
// format. You need to parse this response and extract the relevant data to display on your 
// dashboard.

// * Display the weather data: 
// Once you have parsed the data, you can display the weather information on your dashboard 
// using HTML and CSS.

const apiKey = '4cafa176959ccc9551eb2fd2139e4ce4'
const apiWeather = 'https://openweathermap.org/forecast5'
const city = 'CITY_NAME';


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://example.com/api/data', true);
// xhr.onload = function() {
//   if (this.status == 200) {
//     var data = JSON.parse(this.responseText);
//     // Store data in localStorage
//     localStorage.setItem('data', JSON.stringify(data));
//   }
// };
// xhr.send();



const dataRetrieve = new XMLHttpRequest()
dataRetrieve.open('GET', 'apiWeather', true) // .open explanation below
 dataRetrieve = function getWeatherDate (city, units) {
    if (this.status == 200) {
        city = JSON.parse(this.dataRetrieve)
        localStorage.setItem('city', JSON.stringify(city))
    } 
}
console.log(dataRetrieve)

// Retrieve data from localStorage
var storedCity = localStorage.getItem('city');
if (storedCity) {
  var parsedData = JSON.parse(storedCity);
  // Use parsedData as needed
}
console.log(s)
// let searchHistory =  []
// let searchInput = ''

// render search history Container with loop that sets 
//  will use let searchHistory =  []
// when search

// when we call this function we will need to use set and get
//  function this (){
//  searchHistoryContainer.innerHTML = '';

//   // Start at end of history array and count down to show the most recent at the top.
//     for (var i = searchHistory.length - 1; i >= 0; i--) {
//     var btn = document.createElement('button');
//     btn.setAttribute('type', 'button');
//     btn.setAttribute('aria-controls', 'today forecast');
//     btn.classList.add('history-btn', 'btn-history');

//     // `data-search` allows access to city name when click handler is invoked
//     btn.setAttribute('data-search', searchHistory[i]);
//     btn.textContent = searchHistory[i];
//     searchHistoryContainer.append(btn);
//   }


// function to update local history and display
// setItem and getItem 




// var searchFormEl = document.querySelector('#search-form');

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   var formatInputVal = document.querySelector('#format-input').value;

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

//   location.assign(queryString);
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);

/**============================================
 **               Explanation 
 *=============================================**/

//  * .onload
// the onload function sets up a handler function to be called when the AJAX request is complete, 
// and stores the parsed JSON data in the browser's local storage if the response has a status 
// code of 200. If the response status code is not 200, the localStorage.setItem() method is not 
// called, and the data is not stored in local storage.