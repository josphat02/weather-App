// src/components/SearchBar.js
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) onSearch(city);
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Enter city name"
        className="border border-gray-300 rounded-l-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

