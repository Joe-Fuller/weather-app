import WeatherCard from "./weatherCard";

export default function WeatherCardCollection({ weatherDataCollection }) {
  return (
    <div className="flex flex-row">
      {weatherDataCollection.map((weatherData) => (
        <WeatherCard key={weatherData.id} weatherData={weatherData} />
      ))}
    </div>
  );
}
