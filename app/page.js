"use client";

import { useState } from "react";
import CitySelector from "@/components/citySelector";
import WeatherCard from "@/components/weatherCard";
import WeatherCardCollection from "@/components/weatherCardCollection";

export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    coord: {
      lon: -2.9779,
      lat: 53.4106,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d",
      },
    ],
    base: "stations",
    main: {
      temp: 291.36,
      feels_like: 291.04,
      temp_min: 290.03,
      temp_max: 293.23,
      pressure: 1013,
      humidity: 69,
    },
    visibility: 10000,
    wind: {
      speed: 5.14,
      deg: 260,
    },
    clouds: {
      all: 20,
    },
    dt: 1689243565,
    sys: {
      type: 2,
      id: 2008599,
      country: "GB",
      sunrise: 1689220756,
      sunset: 1689280532,
    },
    timezone: 3600,
    id: 2644210,
    name: "Liverpool",
    cod: 200,
  });

  async function getWeather() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=773c1c3ec776d5f2490ffcf71260d854`
    );
    const receivedWeatherData = await res.json();
    setWeatherData(receivedWeatherData);
    return res;
  }

  // async function fetchCityInfo() {
  //   const cityInfo = await fetch(
  //     `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=773c1c3ec776d5f2490ffcf71260d854`
  //   );

  //   console.log(cityInfo);

  //   return cityInfo;
  // }

  return (
    <main className="p-10 flex flex-col">
      <h1 className="p-4 text-2xl">Welcome to Joe's weather app</h1>
      <div className="flex">
        <div className="mr-4 flex-grow">
          <CitySelector
            city={city}
            setCity={setCity}
            getWeather={getWeather}
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
