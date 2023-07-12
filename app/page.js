import WeatherCard from "@/components/weatherCard";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Joe's weather app</h1>
      <WeatherCard temp="26" type="Sunny"></WeatherCard>
    </main>
  );
}
