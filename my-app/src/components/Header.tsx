import { useEffect, useState } from "react";
import Todo from './Todo'

const API_KEY = "646824f2b7b86caffec1d0b16ea77f79"; // 🔹 Replace with your API key
const CITY = "Pune"; // 🔹 Change this to your preferred city
const UNITS = "metric"; // 🔹 "metric" for °C, "imperial" for °F

const Header = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null);
  const username = localStorage.getItem('username');
  
 
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


  return (
    <header className="bg-[#0A2647]  text-white font-semibold py-4 px-6 flex justify-between items-center shadow-md">
      {username && <p className="text-2xl font-semibold">Welcome, {username}</p>}
      <div className="flex items-center space-x-4">
        {icon && <img src={icon} alt="Weather Icon" className="w-12 h-12 hover:scale-150 transition-transform duration-300" />}
        <div>
          {temperature !== null ? <p className="text-lg hover:text-blue-300 transition-colors duration-300">🌡 {temperature}°C</p> : <p>Loading...</p>}
          {humidity !== null ? <p className="text-lg hover:text-green-300 transition-colors duration-300">💧 {humidity}% Humidity</p> : <p>Loading...</p>}
        </div>
      </div>
    </header>
  );
}; 

export default Header;

