import React, { useState } from "react";

const citySchools = {
  Mirpur: ["School 1 ", "School 2 ", "School 3"],
  Dhanmondi: ["School A ", "School B ", "School C"],
  Lalbag: ["School X", "School Y", "School Z"],
};

export const SchoolList = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [filtered, setFilter] = useState("");
  const [filteredSchools, setFilteredSchools] = useState("");

  const handlesCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setFilter("");
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
      const filtered = citySchools[selectedCity].filter((school) =>
        school.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSchools(filtered);
    }
  };
  return (
    <div>
      <div className="container px-10 flex flex-col gap-4 justify-center items-center pt-5">
        <label htmlFor="city-dropdown" className="text-center font-bold">
          Select a City
        </label>

        <select

          id="city-dropdown"
          value={selectedCity}
          onChange={handlesCityChange}
          className="border rounded-lg p-2 w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a City</option>
          {Object.keys(citySchools).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>


        
      </div>
    </div>
  );
};
