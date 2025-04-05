import React, { useState } from 'react';

// Updated citySchools data with school name and location
const citySchools = {
  "Mirpur": [
    {
      name: 'Heed International School',
      location: 'Main Road, Plot #19, Block-A, Section #11, Mirpur, Dhaka-1218'
    },
    {
      name: 'Evergreen International School',
      location: 'House #9, Road #2, Block-D, Section #6, Pallabi, Mirpur, Dhaka-1218'
    },
    {
      name: 'Elementary English School',
      location: 'House #137/5, 2nd Colony, Shahid Buddhijibi Gate, Mazar Road, Mirpur-1, Dhaka-1218'
    },
    {
      name: 'Darland International School',
      location: 'House #5, Road #11/2, Block-B, Mirpur, Dhaka-1218'
    },
    {
      name: 'East West International School',
      location: '265/1 West Shewrapara, Mirpur, Dhaka'
    },
    {
      name: 'Orbit Kindergarten',
      location: '974, Rokeya Sharani, Shewrapara, Mirpur, Dhaka'
    },
    {
      name: 'Cherry Blossoms International School & College',
      location: 'House #7, Road #4, Block-A, Section #10, Mirpur, Dhaka-1216'
    },
    {
      name: 'Monipur Uchcha Vidyalaya & College',
      location: '783 Middle Monipur, Mirpur-2, Dhaka'
    },
    {
      name: 'Mirpur Udayan School',
      location: 'Pallabi, Mirpur, Dhaka'
    },
    {
      name: 'Mirpur Bangla School and College',
      location: 'Mirpur, Dhaka'
    },
    {
      name: 'Mirpur Government High School',
      location: 'Shahid Ali, Mirpur, Dhaka'
    },
    {
      name: 'National Bangla High School',
      location: 'Mirpur, Dhaka'
    },
    {
      name: 'Paikpara Staff Quarter Uchcha Bidyalaya',
      location: 'Mirpur, Dhaka'
    },
    {
      name: 'Islamia Adarsha High School',
      location: 'Mirpur, Dhaka'
    },
    {
      name: 'Alim Uddin High School',
      location: 'Mirpur, Dhaka'
    },
    {
      name: 'Chiriakhana - Botanical High School',
      location: 'Shah Ali, Mirpur, Dhaka'
    },
    {
      name: 'Mirpur College',
      location: 'Section-2, Mirpur, Dhaka'
    },
    {
      name: 'Dhaka Commerce College',
      location: 'Dhaka Commerce College Road, Mirpur-2, Dhaka'
    },
    {
      name: 'Mirpur Science College',
      location: 'House-16, Road-06, Block-A, Section-10, Mirpur, Dhaka-1216'
    },
    {
      name: 'BCIC College',
      location: 'Zoo Road, Mirpur, Dhaka'
    },
    {
      name: 'Government Bangla College',
      location: 'Darus Salam Road, Mirpur, Dhaka'
    },
    {
      name: 'Institute of Medical Technology',
      location: 'House-106, Road-4, Block-A, Section-12, Pallabi, Mirpur, Dhaka-1216'
    },
    {
      name: 'Bangladesh Institute of Bank Management (BIBM)',
      location: 'Section 2, 4 Mirpur Road, Dhaka'
    },
    {
      name: 'Mirpur Institute of Science & Technology',
      location: '34, Jamal Mansion, 3rd Floor (Above Janata Bank), Mirpur-10, Dhaka-1216'
    }
  ],
  "Shamoli": [
    { name: "School A", location: "Shamoli Ring Road" },
    { name: "School B", location: "Shamoli Residential Area" },
    { name: "School C", location: "Shamoli Bus Stand" }
  ],
  "Agargon": [
    {
      name: "Sher-e-Bangla Nagar Government Boys' High School",
      location: "Dhaka, Bangladesh"
    },
    {
      name: "Agargoan Adarsha High School",
      location: "Begum Rokeya Sarani, Agargoan, Dhaka, Bangladesh"
    },
    {
      name: "Agargoan Talatala Government Colony High School & Women's College",
      location: "Agargoan, Dhaka, Bangladesh"
    },
    {
      name: "Kallanpur Girls' School & College",
      location: "Kallanpur, Dhaka, Bangladesh"
    },
    {
      name: "Advanced School for Special Children (ASSC)",
      location: "Dhaka, Bangladesh"
    },
    {
      name: "Badsha Faisal Institute",
      location: "Agargoan, Dhaka, Bangladesh"
    }
  ]
};

export const School = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setFilter(""); // Reset filter on city change
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

  return (
    <div className="container pt-25 px-10 flex flex-col gap-4 justify-center items-center">
     
      <div className="flex justify-between w-screen gap-2 fixed top-19  mx-auto z-1 bg-white py-5 px-3">
      <select
        id="city-dropdown"
        value={selectedCity}
        onChange={handleCityChange}
        className="text-sm border rounded-lg p-2 w-2/5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option className="text-xs"value="">Select a City</option>
        {Object.keys(citySchools).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {selectedCity && (
        <>
        
          <input
            type="text"
            id="filter"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filter by school name"
            className="border rounded-lg p-2 w-4/5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
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
                >
                  <span className="font-semibold block">{school.name}</span>
                  <span className="text-gray-600 block">{school.location}</span>
                </li>
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
