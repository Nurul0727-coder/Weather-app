"use client";

export default function WeatherCard({
  bgcolor,
  date,
  cityName,
  temperature,
  stat,
  weatherType,
  textColor = "cool-gray from-[#F9FAFB] to-[#F9FAFB00]",
  statColor,
}) {
  const dayGradient = "bg-gradient-to-b from-[#111827] to-[#6B7280]";
  const nightGradient = "bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00]";
  const gradientClass = weatherType === "day" ? dayGradient : nightGradient;
  const statColorBright = "#FF8E27";
  const statColorClear = "#777CCE";
  const dynamicStatColor =
    bgcolor === "black"
      ? statColorClear
      : bgcolor === "white"
      ? statColorBright
      : statColor;

  return (
    <div
      className={`w-[305px] h-[650px] px-7 py-10 rounded-3xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        bgcolor === "white"
          ? "bg-white backdrop-blur-md"
          : "bg-gradient-to-b from-[#1F2937] to-[#11182700] backdrop-blur-md shadow-white"
      }`}
    >
      <div className="text-gray-500 text-lg font-normal">{date}</div>
      <div className={`text-[35px] text-${textColor}`}>{cityName}</div>
      <div className="flex justify-center mt-10">
        {weatherType === "day" ? (
          <img src="sun.png" alt="Sun" width="262" height="262" />
        ) : (
          <img src="moon.png" alt="Moon" width="262" height="262" />
        )}
      </div>
      <div
        className={`text-[80px] bg-clip-text text-transparent ${
          weatherType === "day"
            ? "bg-gradient-to-b from-[#020916] to-[#6B7280]"
            : "bg-gradient-to-b from-[#F9FAFB] to-[#6B7280]"
        }}`}
      >
        {`${temperature} `}{" "}
      </div>
      <div
        className={`text-xl text-${textColor} font-semibold mt-[-20px] ${gradientClass} bg-clip-text text-transparent`}
        style={{ color: dynamicStatColor }}
      >
        {stat}
      </div>
    </div>
  );
}
