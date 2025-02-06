import { useEffect, useState } from "react";

const API_KEY = "646824f2b7b86caffec1d0b16ea77f79"; // 🔹 Replace with your API key
const CITY = "Pune"; // 🔹 Change this to your preferred city
const UNITS = "metric"; // 🔹 "metric" for °C, "imperial" for °F

const Header = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);
  const [icon, setIcon] = useState<string | null>(null);
  const username = localStorage.getItem('username');
  const[dateTime, setDateTime] = useState("");

const motivationalQuotes = [
  "Believe in yourself and all that you are!",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else will do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Hard work pays off!",
]
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Select a random quote
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setQuote(motivationalQuotes[randomIndex]);
  }, []); // Runs only on component mount

  localStorage.setItem('username', 'Yuti');
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

  //Todo Date and Time
  
  setInterval(()=>{
    const now= new Date ();
  const formattedDate= now.toLocaleDateString();
  const formattedTime= now.toLocaleTimeString();
  setDateTime(`${formattedDate}-${formattedTime}`)},1000);

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <p className="italic text-xl">"{quote}"</p>
      <h2 className="date-time">{dateTime}</h2>
      <div className="flex items-center space-x-4">
        {icon && <img src={icon} alt="Weather Icon" className="w-12 h-12" />}
        <div>
          {temperature !== null ? <p className="text-lg">🌡 {temperature}°C</p> : <p>Loading...</p>}
          {humidity !== null ? <p className="text-lg">💧 {humidity}% Humidity</p> : <p>Loading...</p>}
        </div>
      </div>
    </header>
  );
}; 

export default Header;

