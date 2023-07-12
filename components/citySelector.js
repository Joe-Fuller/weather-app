export default function CitySelector({ city, setCity }) {
  return (
    <form>
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="text-black"
      ></input>
    </form>
  );
}
