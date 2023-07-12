import WeatherCard from "./weatherCard";

export default function WeatherCardCollection({ weatherDataCollection }) {
  return (
    <div className="flex flex-row">
      {weatherDataCollection.map((weatherData, index) => (
        <WeatherCard key={index} weatherData={weatherData} />
      ))}
    </div>
  );
}
