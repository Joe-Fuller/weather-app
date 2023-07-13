import WeatherCard from "./weatherCard";

export default function WeatherCardCollection({ weatherDataCollection }) {
  return (
    <div className="flex flex-row">
      <div className="overflow-x-auto flex">
        {weatherDataCollection.map((weatherData, index) => (
          <WeatherCard key={index} weatherData={weatherData} />
        ))}
      </div>
    </div>
  );
}
