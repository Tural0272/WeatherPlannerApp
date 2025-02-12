# Weather Planner App

## Description

Weather Planner App is a mobile application built with React Native that allows users to view the current weather. Users can search for cities and add them to their favorites.

## Features

- **Current Weather:** Displays temperature, description, and weather icon for the selected city.
- **City Search:** Allows users to search and view weather conditions for different cities.
- **Favorite Cities:** Users can add cities to favorites and quickly switch between them.

## Technologies

- **React Native (Expo)**
- **React Navigation** (for screen navigation)
- **Zustand** (for managing favorite cities state)
- **Axios** (for API requests)
- **OpenWeather API** (for fetching weather data)

## Installation & Run

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the application:**
   ```sh
   expo start
   ```

## Project Structure

```
WeatherPlannerApp/
│-- assets/               # Images and resources
│-- components/           # UI components (buttons, cards, etc.)
│-- navigation/           # Navigation configuration
│-- screens/              # Main screens (Home, Search, Favorites, etc.)
│-- services/             # API requests
│-- store/                # Global state management
│-- App.js                # Main application file
│-- package.json          # Dependency file
```

## Future Enhancements

- 8-hour hourly forecast
- 7-day weather forecast
- Improved UI/UX (animations, enhanced weather cards)
- Customizable weather notifications
- Interactive temperature charts

## API Key

The application uses **OpenWeather API** with the following key:
```
e47a830b009bbe47ee38382c51bb761c
```

## Authors

Developed with ❤️ for convenient weather planning!

