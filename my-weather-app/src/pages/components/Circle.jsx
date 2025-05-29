export default function Circle({ size = 140, borderColor = "blue", imageSrc }) {
  return (
    <div
      className={`absolute top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2
          border-2 border-${borderColor} flex items-center justify-center overflow-hidden
          ${size === 140 ? "bg-[#F3F4F6]" : ""}
        `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <img src="/leftPC.png" alt="Logo" className=" object-cover " />
      <img src="/rightPC.png" alt="Logo" className=" object-cover ml-3" />
    </div>
  );
}
