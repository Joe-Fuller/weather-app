import Image from "next/image";

export default function WindSpeedComponent({ windSpeed, windDirection }) {
  const rotation = `rotate(${windDirection + 90}deg)`;

  return (
    <div className="flex flex-col items-center">
      <p>{windSpeed} m/s</p>
      <Image
        src="/arrow.png"
        width={50}
        height={50}
        alt="Arrow showing wind direction"
        style={{ transform: rotation }}
      ></Image>
    </div>
  );
}
