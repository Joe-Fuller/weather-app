import WeatherCard from "@/components/weatherCard";

async function getWeather() {
  const res = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Liverpool,uk&APPID=773c1c3ec776d5f2490ffcf71260d854"
  );

  console.log(res.json());
  return res;
}

export default function Home() {
  const weatherData = getWeather();

  return (
    <main>
      <h1>Welcome to Joe's weather app</h1>
      <WeatherCard temp="26" type="Sunny"></WeatherCard>
    </main>
  );
}
