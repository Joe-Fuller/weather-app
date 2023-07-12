import Image from "next/image";

export default function WeatherCard({ weatherData }) {
  const location = weatherData.timezone;
  const temp = weatherData.current.temp;
  const type = weatherData.current.weather.main;
  return (
    <div className="bg-gray-600 w-72 h-80 p-4">
      <h2>{location}</h2>
      <h2 className="text-2xl font-bold mb-2">{type}</h2>
      <p className="text-xl">{temp}°C</p>
      <Image
        src="/01d.png"
        width={100}
        height={100}
        alt="Icon of the weather"
      ></Image>
    </div>
  );
}
