export default function WeatherCard({ temp, type }) {
  return (
    <div className="bg-gray-600 w-72 h-80 p-4">
      <h2 className="text-2xl font-bold mb-2">{type}</h2>
      <p className="text-xl">{temp}°C</p>
    </div>
  );
}
