import Image from "next/image";

export default function ForecastCard({
  weatherData,
  minTemp,
  maxTemp,
  maxRain,
}) {
  const temp = (weatherData.main.temp - 273.15).toFixed(1);
  const type = weatherData.weather[0].main;

  const weatherIcon = weatherData.weather[0].icon;

  const weatherIconPath = `/${weatherIcon}.png`;

  function calculateIconPosition() {
    const percentage = (weatherData.main.temp - minTemp) / (maxTemp - minTemp);
    const imagePosition = (100 - percentage * 100) * 0.5 + 10;
    return `${imagePosition}%`;
  }

  const time = weatherData.dt_txt;
  let formattedTime = "";
  let day = "";
  if (time) {
    const date = new Date(time);
    formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    if (formattedTime === "00:00") {
      day += date.toLocaleString([], { weekday: "long" }).substring(0, 3);
      day += " ";

      const dayNumber = date.toLocaleString([], { day: "numeric" });

      day += dayNumber;

      if (dayNumber >= 11 && dayNumber <= 13) {
        day += "th";
      } else {
        switch (dayNumber % 10) {
          case 1:
            day += "st";
          case 2:
            day += "nd";
          case 3:
            day += "rd";
          default:
            day += "th";
        }
      }
    }
  }

  const rainHeight = weatherData.rain
    ? (weatherData.rain["3h"] / maxRain) * 100
    : 0;

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

  const weatherCodeToColor = {
    "01d": "#FBD638",
    "01n": "#DBA901",
    "02d": "#F5F3B9",
    "02n": "#CFC958",
    "03d": "#E5E9ED",
    "03n": "#8B9095",
    "04d": "#D1D9E6",
    "04n": "#657182",
    "09d": "#91A8BA",
    "09n": "#4E6A81",
    "10d": "#A3B8CC",
    "10n": "#5B7489",
    "11d": "#727C8E",
    "11n": "#3B4451",
    "13d": "#E8F0F8",
    "13n": "#93A1B1",
    "50d": "#ECEFF4",
    "50n": "#8D98A4",
  };

  return (
    <div
      className={`relative ${
        backgroundColours[weatherIcon]
      } w-32 h-[40rem] p-4 flex flex-col items-center ${
        formattedTime === "00:00" ? "border-l-2 border-black" : ""
      }`}
      // style={{
      //   boxShadow: `0px 0px 10px 5px${weatherCodeToColor[weatherIcon]}`,
      // }}
    >
      <div className="flex flex-col items-center justify-center z-10">
        <h2 className="text-xl font-bold mb-2 absolute top-4">{type}</h2>
      </div>
      <div className="relative z-10" style={{ top: calculateIconPosition() }}>
        <Image
          src={weatherIconPath}
          width={100}
          height={100}
          alt="Icon of the weather"
          className="object-contain"
        />
        <p className="text-xl text-center">{temp}°C</p>
      </div>
      <p className="absolute bottom-4 z-10">{formattedTime}</p>
      {formattedTime === "00:00" ? (
        <p className="absolute bottom-0 z-10">{day}</p>
      ) : null}

      <div className="absolute bottom-0 left-0 w-full z-0">
        <div
          className="bg-blue-500 transition-height duration-500"
          style={{ height: rainHeight }}
        ></div>
      </div>
    </div>
  );
}
