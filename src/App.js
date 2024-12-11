// src/App.js
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const apiKey = "c1115bb80946be511eefd50639647587"; // Your API key here
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <SearchBar onSearch={fetchWeather} />
      {loading ? (
        <p className="text-center mt-8">Loading...</p>
      ) : (
        <WeatherCard weatherData={weatherData} />
      )}
      <Footer />
    </div>
  );
};

export default App;
