# What-is-the-Weather

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Steps by step 

    First, you would need to create a web application with a dashboard that allows the user to input the name of a city and display the current weather conditions and a 5-day forecast.

    Next, you would need to incorporate an API that can fetch weather data for the specified city. There are several weather APIs available, such as OpenWeatherMap or AccuWeather, that can provide this data.

    When the user inputs the name of a city and clicks the search button, you would need to make an API call to fetch the current weather conditions and 5-day forecast for that city.

    Once you receive the weather data, you can display the relevant information on the dashboard. For the current weather condit8ions, you would display the city name, date, weather icon, temperature, humidity, and wind speed. For the 5-day forecast, you would display the date, weather icon, temperature, wind speed, and humidity for each day.

    You would also need to add the searched city to a search history list so that the user can easily access the weather data for that city in the future.

    Finally, you would need to implement a click event for the search history list so that when the user clicks on a city, the weather data for that city is displayed again.



    