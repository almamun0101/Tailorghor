import React, { useState } from 'react';

// Sample data of cities and their schools
const citySchools = {
  "Mirpur": ["School 1", "School 2", "School 3"],
  "Shamoli": ["School A", "School B", "School C"],
  "Agargon": ["School X", "School Y", "School Z"],
};

export const School = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setFilter(""); // Reset filter when a new city is selected
    if (city) {
      setFilteredSchools(citySchools[city]);
    } else {
      setFilteredSchools([]);
    }
  };

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value;
    setFilter(searchTerm);
    if (selectedCity) {
      const filtered = citySchools[selectedCity].filter(school =>
        school.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSchools(filtered);
    }
  };

  return (
    <div className="container px-10 flex flex-col gap-4 justify-center items-center pt-5">
      <label htmlFor="city-dropdown" className="text-center font-bold">
        Select a City
      </label>
      <select
        id="city-dropdown"
        value={selectedCity}
        onChange={handleCityChange}
        className="border rounded-lg p-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a City</option>
        {Object.keys(citySchools).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {selectedCity && (
        <>
          <label htmlFor="filter" className="text-center font-bold mt-4">
            Filter Schools
          </label>
          <input
            type="text"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter by school name"
            className="border rounded-lg p-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
      )}

      {selectedCity && (
        <div className="mt-4">
          <h3 className="font-bold">Schools in {selectedCity}</h3>
          <ul className="list-disc pl-5">
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school, index) => (
                <li key={index}>{school}</li>
              ))
            ) : (
              <li>No schools found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
