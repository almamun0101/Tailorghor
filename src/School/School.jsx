import React, { useState } from 'react';
import { citySchools } from './citySchools';
import { SchoolDress } from './SchoolDress';

// Updated citySchools data with school name and location

export const School = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null); // State to track selected school

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setFilter(""); // Reset filter on city change
    setSelectedSchool(null); // Reset selected school on city change
    setFilteredSchools(city ? citySchools[city] : []);
  };

  const handleFilterChange = (event) => {
    const searchTerm = event.target.value;
    setFilter(searchTerm);
    if (selectedCity) {
      const filtered = citySchools[selectedCity].filter(school =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSchools(filtered);
    }
  };

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school); // Set selected school
  };

  return (
    <div className="container pt-25 px-10 flex flex-col gap-4 justify-center items-center">
     
      <div className="flex justify-between w-screen gap-2 fixed top-19 mx-auto z-1 bg-white py-5 px-3">
        <select
          id="city-dropdown"
          value={selectedCity}
          onChange={handleCityChange}
          className="text-sm border rounded-lg p-2 w-2/5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option className="text-xs" value="">Select a Area</option>
          {Object.keys(citySchools).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {selectedCity && (
          <input
            type="text"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter by school name"
            className="border rounded-lg p-2 w-4/5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>

      {selectedCity && (
        <div className="mt-15 w-10\50">
          <h3 className="font-bold mb-2 text-xl">Schools in {selectedCity}</h3>
          <ul className="list-disc">
            {filteredSchools.length > 0 ? (
              filteredSchools.map((school, index) => (
                <li
                  key={index}
                  className="bg-gray-100 rounded-lg p-3 mb-2 transform transition duration-300 hover:bg-gray-200 hover:translate-x-2"
                  onClick={() => handleSchoolSelect(school)} // Click handler to select a school
                >
                  <span className="font-semibold block">{school.name}</span>
                  <span className="text-gray-600 block">{school.location}</span>
                </li>
              ))
            ) : (
              <li>No schools found</li>
            )}
          </ul>

          {/* Show the selected school details */}
          {selectedSchool && (
            <div className="mt-5 p-4 bg-gray-100 rounded-lg">
              <h4 className="font-bold">Selected School:</h4>
              <p>{selectedSchool.name}</p>
              <p>{selectedSchool.location}</p>
              {/* Add any additional details or actions for the selected school */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
