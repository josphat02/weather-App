// src/components/WeatherCard.js
const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <p className="text-center mt-8">No weather data available.</p>;
  }

  const { name, main, weather } = weatherData;

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <p className="text-center text-gray-600">{weather[0].description}</p>
      <div className="flex justify-between mt-4">
        <p className="text-xl">Temp: {main.temp}°C</p>
        <p className="text-xl">Humidity: {main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;
