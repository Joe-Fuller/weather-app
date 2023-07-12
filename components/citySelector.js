import { useState } from "react";

export default function CitySelector() {
  const [city, setCity] = useState("");

  return (
    <form>
      <label for="city">City:</label>
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
