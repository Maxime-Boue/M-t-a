import oragePicture from '../../assets/orage.png';

type WeatherProps = {
  weatherData: {
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
  };
};

function Weather({ weatherData }: WeatherProps) {
  return (
    <div>
      {weatherData.weather ? (
        <article className="flex flex-col items-center justify-between w-[350px] h-[500px] bg-white shadow-lg rounded-lg m-auto py-3 px-6 top-[10%]">
          <div className="flex flex-col items-center justify-between ">
            <p className="text-2xl py-4">
              {weatherData.name}, {weatherData.sys.country}
            </p>
            <div className="flex flex-col items-center">
              <img className="w-[150px] h-[150px]" src={oragePicture} alt="" />
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-5xl font-semibold">
                  {weatherData.main.temp.toFixed()} °C
                </p>
                <p className="text-md">{weatherData.weather[0].description}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[250px] h-full gap-2">
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Ressenti </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.main.feels_like.toFixed()} °C
              </p>
            </div>
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Vent </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.wind.speed.toFixed()} km/h
              </p>
            </div>
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Humidité </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.main.humidity.toFixed()} %
              </p>
            </div>
            <div className="flex w-full">
              <p className="pl-8 w-1/2 ">Pression </p>
              <p className="text-center w-1/2 font-semibold">
                {weatherData.main.pressure.toFixed()} hPa
              </p>
            </div>
          </div>
        </article>
      ) : null}
    </div>
  );
}

export default Weather;
