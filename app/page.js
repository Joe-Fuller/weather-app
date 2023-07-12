"use client";

import { useState } from "react";
import CitySelector from "@/components/citySelector";
import WeatherCard from "@/components/weatherCard";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    lat: 33.44,
    lon: -94.04,
    timezone: "America/Chicago",
    timezone_offset: -18000,
    current: {
      dt: 1684929490,
      sunrise: 1684926645,
      sunset: 1684977332,
      temp: 292.55,
      feels_like: 292.87,
      pressure: 1014,
      humidity: 89,
      dew_point: 290.69,
      uvi: 0.16,
      clouds: 53,
      visibility: 10000,
      wind_speed: 3.13,
      wind_deg: 93,
      wind_gust: 6.71,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
    },
  });

  async function getWeather() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=773c1c3ec776d5f2490ffcf71260d854`
    );

    console.log(res.json());
    setWeatherData(res);
    return res;
  }

  // const weatherData = getWeather();

  // const weatherData = {
  //   lat: 33.44,
  //   lon: -94.04,
  //   timezone: "America/Chicago",
  //   timezone_offset: -18000,
  //   current: {
  //     dt: 1684929490,
  //     sunrise: 1684926645,
  //     sunset: 1684977332,
  //     temp: 292.55,
  //     feels_like: 292.87,
  //     pressure: 1014,
  //     humidity: 89,
  //     dew_point: 290.69,
  //     uvi: 0.16,
  //     clouds: 53,
  //     visibility: 10000,
  //     wind_speed: 3.13,
  //     wind_deg: 93,
  //     wind_gust: 6.71,
  //     weather: [
  //       {
  //         id: 803,
  //         main: "Clouds",
  //         description: "broken clouds",
  //         icon: "04d",
  //       },
  //     ],
  //   },
  // };

  return (
    <main>
      <h1>Welcome to Joe's weather app</h1>
      <CitySelector city={city} setCity={setCity}></CitySelector>
      <button
        onClick={getWeather}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Weather
      </button>

      <WeatherCard weatherData={weatherData}></WeatherCard>
    </main>
  );
}
