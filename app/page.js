"use client";

import { useState } from "react";
import CitySelector from "@/components/citySelector";
import WeatherCard from "@/components/weatherCard";
import WeatherCardCollection from "@/components/weatherCardCollection";

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
    // This needs to use the lat, long (I think)
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${process.env.OPENWEATHERMAP_API_KEY}`
    );

    console.log(res.json());
    setWeatherData(res);
    return res;
  }

  async function fetchCityInfo() {
    const cityInfo = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.OPENWEATHERMAP_API_KEY}`
    );

    console.log(cityInfo);

    return cityInfo;
  }

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
    <main className="p-10 flex flex-col">
      <h1 className="p-4 text-2xl">Welcome to Joe's weather app</h1>
      <div className="flex">
        <div className="mr-4 flex-grow">
          <CitySelector
            city={city}
            setCity={setCity}
            fetchCityInfo={fetchCityInfo}
          ></CitySelector>
        </div>
      </div>

      <div className="flex">
        <div className="mr-4 flex-grow-2">
          <WeatherCard weatherData={weatherData}></WeatherCard>
        </div>
        <div className="grid grid-cols-1 gap-4 flex-grow">
          <WeatherCardCollection
            weatherDataCollection={[weatherData, weatherData]}
          ></WeatherCardCollection>
          <WeatherCardCollection
            weatherDataCollection={[weatherData, weatherData]}
          ></WeatherCardCollection>
          <WeatherCardCollection
            weatherDataCollection={[weatherData, weatherData]}
          ></WeatherCardCollection>
        </div>
      </div>
    </main>
  );
}
