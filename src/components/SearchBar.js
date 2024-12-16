// src/components/SearchBar.js
import { motion } from "framer-motion";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) onSearch(city);
  };

  return (
    <motion.div
      className="flex  flex-column justify-center mt-6"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1 }} // Setting the duration of the transition
    >
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
    </motion.div>
  );
};

export default SearchBar;
