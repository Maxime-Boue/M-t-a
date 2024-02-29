import { useEffect, useState } from 'react';
import brume from '../../assets/brouillard.png';
import couvert from '../../assets/couvert.png';
import neige from '../../assets/neige.png';
import peu_nuageux from '../../assets/peu_nuageux.png';
import pluie from '../../assets/pluie.png';
import soleil from '../../assets/soleil.png';

type WeatherProps = {
  weatherData: {
    list: {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
      };
      wind: {
        speed: number;
      };
      name: string;
      sys: {
        country: string;
      };
      weather: {
        main: string;
        description: string;
      }[];
    }[];
  };
};

function Weather({ weatherData }: WeatherProps) {
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    if (weatherData.list[0].weather && weatherData.list[0].weather.length > 0) {
      switch (weatherData.list[0].weather[0].description.toLowerCase()) {
        case 'couvert':
        case 'nuageux':
          setIcon(couvert);
          break;
        case 'brume':
          setIcon(brume);
          break;
        case 'ciel dégagé':
          setIcon(soleil);
          break;
        case 'bruine légère':
        case 'légère pluie':
        case 'pluie modérée':
          setIcon(pluie);
          break;
        case 'peu nuageux':
          setIcon(peu_nuageux);
          break;
        case 'légères chutes de neige':
          setIcon(neige);
          break;
        default:
          setIcon('');
      }
    }
  }, [weatherData.list]);

  return (
    <div>
      {weatherData.list[0].weather ? (
        <article className="flex flex-col items-center justify-between w-[400px] h-[500px] bg-white shadow-lg rounded-lg m-auto py-3 px-6 top-[10%]">
          <div className="flex flex-col items-center justify-between ">
            <p className="text-2xl py-4">
              {weatherData.list[0].name}, {weatherData.list[0].sys.country}
            </p>
            <div className="flex flex-col items-center gap-3">
              <img className="w-[150px] h-[150px]" src={icon} alt="" />
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-semibold">
                  {weatherData.list[0].main.temp.toFixed()} °C
                </p>
                <p className="text-md">
                  {weatherData.list[0].weather[0].description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[250px] h-full gap-2">
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Ressenti </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.list[0].main.feels_like.toFixed()} °C
              </p>
            </div>
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Vent </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.list[0].wind.speed.toFixed()} km/h
              </p>
            </div>
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Humidité </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.list[0].main.humidity.toFixed()} %
              </p>
            </div>
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Pression </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.list[0].main.pressure.toFixed()} hPa
              </p>
            </div>
          </div>
        </article>
      ) : null}
    </div>
  );
}

export default Weather;
