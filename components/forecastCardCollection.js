import ForecastCard from "./forecastCard";

export default function ForecastCardCollection({
  weatherDataCollection,
  minTemp,
  maxTemp,
}) {
  return (
    <div className="flex flex-row">
      <div className="overflow-x-auto flex">
        {weatherDataCollection.map((weatherData, index) => (
          <div className="w-64" key={index}>
            <ForecastCard
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
