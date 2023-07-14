import Image from "next/image";

export default function ForecastCard({ weatherData, minTemp, maxTemp }) {
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
  if (time) {
    const date = new Date(time);
    formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }

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
      className={`relative ${backgroundColours[weatherIcon]} w-32 h-96 p-4 flex flex-col items-center`}
      // style={{
      //   boxShadow: `0px 0px 10px 5px${weatherCodeToColor[weatherIcon]}`,
      // }}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-2 absolute top-4">{type}</h2>
      </div>
      <div className="relative" style={{ top: calculateIconPosition() }}>
        <Image
          src={weatherIconPath}
          width={100}
          height={100}
          alt="Icon of the weather"
          className="object-contain"
        />
        <p className="text-xl text-center">{temp}°C</p>
      </div>
      <p className="absolute bottom-4">{formattedTime}</p>
    </div>
  );
}
