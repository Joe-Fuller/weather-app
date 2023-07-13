import Image from "next/image";

export default function WeatherCard({ weatherData }) {
  const location = weatherData.name;
  const temp = (weatherData.main.temp - 273.15).toFixed(1);
  const type = weatherData.weather[0].main;

  const weatherIconPath = `/${weatherData.weather[0].icon}.png`;

  const time = weatherData.dt_txt;
  let formattedTime = "";
  if (time) {
    const date = new Date(time);
    formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <div className="bg-gray-600 w-64 h-72 p-4 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-2">{location}</h2>
      <h2 className="text-xl font-bold mb-2">{type}</h2>
      <p className="text-xl">{temp}°C</p>
      <Image
        src={weatherIconPath}
        width={100}
        height={100}
        alt="Icon of the weather"
      ></Image>
      <p>{formattedTime}</p>
    </div>
  );
}
