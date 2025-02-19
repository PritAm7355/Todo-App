import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const API_KEY = "646824f2b7b86caffec1d0b16ea77f79"; // 🔹 Replace with your API key
const CITY = "Pune"; // 🔹 Change this to your preferred city
const UNITS = "metric"; // 🔹 "metric" for °C, "imperial" for °F

const Header = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`
        );
        const data = await response.json();
        if (data.main && data.weather) {
          setTemperature(data.main.temp);
          setHumidity(data.main.humidity);
          setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    
    <header className="bg-[#0A2647] text-white font-semibold py-4 px-6 shadow-md flex flex-col sm:flex-row items-center justify-between w-full">
      {/* Username (Hidden on mobile if empty) */}
      <motion.div 
      className="title"
      initial={{ y: -250 }} 
      animate={{ y: -10 }}
    
    >
      {username && (
        <p className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-0">
          Welcome, {username}
        </p>
      )}
       </motion.div>

      {/* Weather Info & Logout (Flexible Layout) */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
        {/* Weather Icon & Data */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {icon && (
            <img
              src={icon}
              alt="Weather Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-500 hover:scale-125"
            />
          )}
          <div className="text-center sm:text-left">
            {temperature !== null ? (
              <p className="text-sm sm:text-lg hover:text-blue-300 transition-colors duration-300">
                🌡 {temperature}°C
              </p>
            ) : (
              <p>Loading...</p>
            )}
            {humidity !== null ? (
              <p className="text-sm sm:text-lg hover:text-green-300 transition-colors duration-300">
                💧 {humidity}% Humidity
              </p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        {/* Logout Button (Scales on hover) */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-all duration-300 sm:px-4 sm:py-2 hover:scale-95"
        >
          Logout
        </button>
      </div>
    </header>
  
  );
};

export default Header;
