// const fetchButton = document.querySelector(".fetch-btn");
// const APIKey = "a72d9bc78e8e804a75ebe0f88984a476";

// const fetchWeatherHandler = () => {
//   if (!navigator.geolocation) {
//     alert("Geolocation is not available in your browser");
//     return;
//   }
//   navigator.geolocation.getCurrentPosition(async (position) => {
//     const { latitude, longitude } = position.coords;
//     console.log(latitude, longitude);
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5.0/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid={API Key}`
//     );
//   });
// };

// fetchButton.addEventListener("click", fetchWeatherHandler);
// Select the button element with the class "fetch-btn" from the HTML document
const fetchButton = document.querySelector(".fetch-btn");

// Define the API key to access the OpenWeatherMap service (replace with your own API key)
const APIKey = "a72d9bc78e8e804a75ebe0f88984a476";

// Define a function to handle fetching weather data based on the user's current location
const fetchWeatherHandler = () => {
  // Check if the browser supports geolocation
  if (!navigator.geolocation) {
    // If geolocation is not available, display an alert to the user
    alert("Geolocation is not available in your browser");
    return; // Exit the function early
  }

  // Use the geolocation API to get the user's current position (latitude and longitude)
  navigator.geolocation.getCurrentPosition(async (position) => {
    // Destructure the latitude and longitude from the position object
    const { latitude, longitude } = position.coords;
    // Log the latitude and longitude values to the console
    console.log(latitude, longitude);

    // Attempt to fetch weather data from the OpenWeatherMap API using the user's coordinates
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${APIKey}&units=metric`
    );
    // Note: The API URL has errors. The path "/data/2.5.0/weather" is incorrect and "{API Key}" should be replaced with the actual APIKey variable. Additionally, "exclude" is not needed for the current weather endpoint.
    const weatherData = await response.json(); // Parse the response data as JSON
    console.log(weatherData); // Log the weather data to the console
    document.querySelector(".temp-span").textContent = weatherData.main.temp;
  });
};

// Attach a click event listener to the "fetchButton" that triggers the fetchWeatherHandler function when clicked
fetchButton.addEventListener("click", fetchWeatherHandler);
