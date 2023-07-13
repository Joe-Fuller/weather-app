export default function CitySelector({ city, setCity, getWeather }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getWeather(city);
      }}
    >
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="text-black"
      ></input>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Weather
      </button>
    </form>
  );
}
