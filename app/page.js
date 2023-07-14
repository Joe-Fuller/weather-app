"use client";

import { useState } from "react";
import CitySelector from "@/components/citySelector";
import WeatherCard from "@/components/weatherCard";
import ForecastCardCollection from "@/components/forecastCardCollection";

export default function Home() {
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(false);
  const [cityName, setCityName] = useState(false);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [maxRain, setMaxRain] = useState(0);

  const [fiveDayThreeHourWeatherData, setFiveDayThreeHourWeatherData] =
    useState(false);

  async function getWeather() {
    const currentWeatherDataRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=773c1c3ec776d5f2490ffcf71260d854`
    );
    if (!currentWeatherDataRes.ok) {
      setIsError(true);
      setErrorText(city);
    } else {
      setIsError(false);

      const receivedCurrentWeatherData = await currentWeatherDataRes.json();

      setCurrentWeatherData(receivedCurrentWeatherData);

      const fiveDayThreeHourWeatherDataRes = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=773c1c3ec776d5f2490ffcf71260d854`
      );
      const receivedFiveDayThreeHourWeatherData =
        await fiveDayThreeHourWeatherDataRes.json();
      setFiveDayThreeHourWeatherData(receivedFiveDayThreeHourWeatherData.list);

      setHighAndLowTemp(receivedFiveDayThreeHourWeatherData);
      setHighAndLowRain(receivedFiveDayThreeHourWeatherData);
      formatCityName();
    }
  }

  function formatCityName() {
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

  function setHighAndLowRain(data) {
    let currentHigh = -100000;

    data.list.forEach((time) => {
      if (time.rain) {
        if (time.rain["3h"] > currentHigh) {
          currentHigh = time.rain["3h"];
        }
      }
    });

    setMaxRain(currentHigh);
  }

  const backgroundColour =
    new Date().getHours() >= 6 && new Date().getHours() < 18
      ? "bg-background-day"
      : "bg-background-night";

  return (
    <main
      className={`${backgroundColour} p-10 flex flex-col text-black min-h-screen`}
    >
      <h1 className="p-4 text-2xl text-center">Welcome to Joe's Weather App</h1>
      <div className="flex justify-center">
        <div className="flex p-4">
          <div className="mr-4">
            <CitySelector
              city={city}
              setCity={setCity}
              getWeather={getWeather}
            />
          </div>
        </div>
      </div>
      {cityName ? (
        <h2 className="text-2xl flex justify-center p-4">
          Weather for {cityName}
        </h2>
      ) : null}

      {isError ? (
        <div className="text-center">City '{errorText}' not found</div>
      ) : (
        <div className="flex">
          <div className="mr-4 flex-grow-2">
            {fiveDayThreeHourWeatherData ? (
              <WeatherCard
                weatherData={currentWeatherData}
                maxRain={maxRain}
              ></WeatherCard>
            ) : null}
          </div>
          <div className="grid grid-cols-1 gap-4 flex-grow">
            {fiveDayThreeHourWeatherData ? (
              <ForecastCardCollection
                weatherDataCollection={fiveDayThreeHourWeatherData}
                minTemp={minTemp}
                maxTemp={maxTemp}
                maxRain={maxRain}
              ></ForecastCardCollection>
            ) : null}
          </div>
        </div>
      )}
    </main>
  );
}
