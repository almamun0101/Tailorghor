import { useState } from "react";
import { Button } from "@/components/ui/button";

const LocationFinder = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          fetchCity(latitude, longitude);
        },
        (err) => {
          setError(
            err.code === 1
              ? "Please allow location access to find your city."
              : "Unable to retrieve location. Try again later."
          );
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  };

  const fetchCity = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      setLocation(data.address.city || data.address.town || "Unknown location");
    } catch {
      setError("Failed to fetch location details");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Find Your City</h2>
        <Button onClick={getLocation} className="mb-4">Get Location</Button>
        {location && <p className="text-green-600 font-semibold">Your City: {location}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default LocationFinder;
