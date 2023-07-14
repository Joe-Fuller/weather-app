import Image from "next/image";
import { useState, useEffect } from "react";

export default function WeatherCard({ weatherData, maxRain }) {
  const temp = (weatherData.main.temp - 273.15).toFixed(1);
  const type = weatherData.weather[0].main;
  const feelsLikeTemp = (weatherData.main.feels_like - 273.15).toFixed(1);
  const minTemp = (weatherData.main.temp_min - 273.15).toFixed(1);
  const maxTemp = (weatherData.main.temp_max - 273.15).toFixed(1);

  const weatherIcon = weatherData.weather[0].icon;

  const weatherIconPath = `/${weatherIcon}.png`;

  const time = weatherData.dt_txt;
  let formattedTime = "";
  if (time) {
    const date = new Date(time);
    formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  const [rainHeight, setRainHeight] = useState(0);
  const [backgroundColour, setBackgroundColour] = useState("bg-background-day");

  useEffect(() => {
    setRainHeight(
      weatherData.rain ? (weatherData.rain["1h"] / maxRain) * 900 : 0
    );
    setBackgroundColour(backgroundColours[weatherIcon]);
  });

  const backgroundColours = {
    "01d": "bg-clearSky-day",
    "01n": "bg-clearSky-night",
    "02d": "bg-fewClouds-day",
    "02n": "bg-fewClouds-night",
    "03d": "bg-scatteredClouds-day",
    "03n": "bg-scatteredClouds-night",
    "04d": "bg-brokenClouds-day",
    "04n": "bg-brokenClouds-night",
    "09d": "bg-showerRain-day",
    "09n": "bg-showerRain-night",
    "10d": "bg-rain-day",
    "10n": "bg-rain-night",
    "11d": "bg-thunderstorm-day",
    "11n": "bg-thunderstorm-night",
    "13d": "bg-snow-day",
    "13n": "bg-snow-night",
    "50d": "bg-mist-day",
    "50n": "bg-mist-night",
  };

  return (
    <div
      className={`relative ${backgroundColour} w-64 h-[40rem] p-4 flex flex-col items-center transition`}
    >
      <div className="flex flex-col items-center justify-center z-10">
        <h2 className="text-xl absolute top-4 text-center w-full">
          Current Weather
        </h2>
        <h2 className="text-xl font-bold mb-2 absolute top-20">{type}</h2>
        <p className="text-xl absolute top-28">{temp}°C</p>
        <p className="text-l absolute top-36 w-full text-center">
          Feels Like {feelsLikeTemp}°C
        </p>
      </div>
      <div className="relative z-10" style={{ top: "35%" }}>
        <Image
          src={weatherIconPath}
          width={100}
          height={100}
          alt="Icon of the weather"
          className="object-contain"
        />
      </div>
      <p className="absolute bottom-10 z-10">High: {maxTemp}°C</p>
      <p className="absolute bottom-4 z-10">Low: {minTemp}°C</p>
      <div className="absolute bottom-0 left-0 w-full z-0">
        <div
          className="bg-blue-500 transition-height duration-500"
          style={{ height: rainHeight }}
        ></div>
      </div>
    </div>
  );
}
