export default function WeatherCard({ temp, type }) {
  return (
    <div>
      <h2>{type}</h2>
      <p>{temp}</p>
    </div>
  );
}
