"use client";

import { useState } from "react";
import CitySelector from "@/components/citySelector";
import WeatherCard from "@/components/weatherCard";
import WeatherCardCollection from "@/components/weatherCardCollection";

export default function Home() {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(false);

  const [fiveDayThreeHourWeatherData, setFiveDayThreeHourWeatherData] =
    useState(false);

  async function getWeather() {
    const currentWeatherDataRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=773c1c3ec776d5f2490ffcf71260d854`
    );
    const receivedCurrentWeatherData = await currentWeatherDataRes.json();
    setCurrentWeatherData(receivedCurrentWeatherData);

    const fiveDayThreeHourWeatherDataRes = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},uk&APPID=773c1c3ec776d5f2490ffcf71260d854`
    );
    const receivedFiveDayThreeHourWeatherData =
      await fiveDayThreeHourWeatherDataRes.json();
    setFiveDayThreeHourWeatherData(receivedFiveDayThreeHourWeatherData.list);
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
          {currentWeatherData ? (
            <WeatherCard weatherData={currentWeatherData}></WeatherCard>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-4 flex-grow">
          {fiveDayThreeHourWeatherData ? (
            <WeatherCardCollection
              weatherDataCollection={fiveDayThreeHourWeatherData}
            ></WeatherCardCollection>
          ) : null}
        </div>
      </div>
    </main>
  );
}
