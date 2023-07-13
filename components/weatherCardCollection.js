import WeatherCard from "./weatherCard";

export default function WeatherCardCollection({
  weatherDataCollection,
  minTemp,
  maxTemp,
}) {
  return (
    <div className="flex flex-row">
      <div className="overflow-x-auto flex">
        {weatherDataCollection.map((weatherData, index) => (
          <div className="w-64" key={index}>
            <WeatherCard
              key={index}
              weatherData={weatherData}
              minTemp={minTemp}
              maxTemp={maxTemp}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
