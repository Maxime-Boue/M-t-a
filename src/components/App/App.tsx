import axios from 'axios';
import { useState } from 'react';
import ForecastWeather from '../ForecastWeather/ForecastWeather';
import Weather from '../Weather/Weather';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const API_KEY = '03d7f3e68d02023a879dba217d018fff';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=fr&appid=${API_KEY}`;

  const handleClick = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation('');
  };

  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center py-4 ">
        <div className="flex text-lg bg-purple-500 w-[350px] rounded-3xl">
          <input
            type="text"
            className="w-full py-3 px-6 text-lg rounded-3xl focus:outline-purple-500"
            placeholder="Cherchez votre ville"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <button
            className="px-3 border-none rounded-3xl "
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 460 512"
            >
              <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
            </svg>
          </button>
        </div>
      </div>
      <Weather weatherData={data} />
      <ForecastWeather />
    </div>
  );
}

export default App;
