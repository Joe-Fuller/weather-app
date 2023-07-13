import ForecastCard from "./forecastCard";

export default function ForecastCardCollection({
  weatherDataCollection,
  minTemp,
  maxTemp,
}) {
  return (
    <div className="flex flex-row">
      <div
        className="overflow-x-auto flex"
        style={{
          boxShadow:
            "0px -25px 20px -20px rgba(0,0,0,0.45),0px 25px 20px -20px rgba(0,0,0,0.45)",
        }}
      >
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
