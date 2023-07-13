"use client";

import { useState } from "react";
import CitySelector from "@/components/citySelector";
import WeatherCard from "@/components/weatherCard";
import WeatherCardCollection from "@/components/weatherCardCollection";

export default function Home() {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(false);
  const [cityName, setCityName] = useState(false);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);

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

    setHighAndLowTemp(receivedFiveDayThreeHourWeatherData);

    const formattedCityName = city
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    setCityName(formattedCityName);
  }

  function setHighAndLowTemp(data) {
    let currentLow = 100000;
    let currentHigh = -100000;

    data.list.forEach((time) => {
      if (time.main.temp < currentLow) {
        currentLow = time.main.temp;
      }
      if (time.main.temp > currentHigh) {
        currentHigh = time.main.temp;
      }
    });

    setMinTemp(currentLow);
    setMaxTemp(currentHigh);
  }

  const backgroundColour =
    new Date().getHours() >= 6 && new Date().getHours() < 18
      ? "bg-background-day"
      : "bg-background-night";

  return (
    <main
      className={`${backgroundColour} p-10 flex flex-col text-black min-h-screen`}
    >
      <h1 className="p-4 text-2xl">Welcome to Joe's weather app</h1>
      <div className="flex p-4">
        <div className="mr-4 flex-grow">
          <CitySelector
            city={city}
            setCity={setCity}
            getWeather={getWeather}
          ></CitySelector>
        </div>
      </div>

      {cityName ? <h2>Weather for {cityName}</h2> : null}

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
              minTemp={minTemp}
              maxTemp={maxTemp}
            ></WeatherCardCollection>
          ) : null}
        </div>
      </div>
    </main>
  );
}
