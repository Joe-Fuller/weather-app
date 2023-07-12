import Image from "next/image";

export default function WeatherCard({ weatherData }) {
  const location = weatherData.timezone;
  const temp = weatherData.current.temp;
  const type = weatherData.current.weather[0].main;

  const weatherIconPath = `/${weatherData.current.weather[0].icon}.png`;

  return (
    <div className="bg-gray-600 w-64 h-80 p-4">
      <h2 className="text-xl font-bold mb-2">{location}</h2>
      <h2 className="text-xl font-bold mb-2">{type}</h2>
      <p className="text-xl">{temp}°C</p>
      <Image
        src={weatherIconPath}
        width={100}
        height={100}
        alt="Icon of the weather"
      ></Image>
    </div>
  );
}
