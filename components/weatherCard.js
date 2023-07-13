import Image from "next/image";

export default function WeatherCard({ weatherData, minTemp, maxTemp }) {
  const location = weatherData.name;
  const temp = (weatherData.main.temp - 273.15).toFixed(1);
  const type = weatherData.weather[0].main;

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

  const backgroundColours = {
    "01d": "bg-clearSky-day",
    "01n": "bg-clearSky-night",
    "02d": "bg-fewCloud-day",
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
      className={`relative ${backgroundColours[weatherIcon]} w-64 h-72 p-4 flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-2 absolute top-4">{type}</h2>
        <p className="text-xl absolute top-10">{temp}°C</p>
      </div>
      <div>
        <Image
          src={weatherIconPath}
          width={100}
          height={100}
          alt="Icon of the weather"
          className="object-contain"
        />
      </div>
      <p className="absolute bottom-4">{formattedTime}</p>
    </div>
  );
}
