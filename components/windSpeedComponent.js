import Image from "next/image";

export default function WindSpeedComponent({ windSpeed, windDirection }) {
  const rotation = `rotate(${windDirection + 90}deg)`;

  return (
    <div className="absolute bottom-12 z-10 text-center">
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
