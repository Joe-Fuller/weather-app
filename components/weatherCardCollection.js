import WeatherCard from "./weatherCard";

export default function WeatherCardCollection({ weatherDataCollection }) {
  return (
    <div>
      {weatherDataCollection.forEach((weatherData) => {
        return <WeatherCard weatherData={weatherData}></WeatherCard>;
      })}
    </div>
  );
}
