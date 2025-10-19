export default function AchievementSection() {
  return (
    <div className="h-66 bg-black">
      <div className="absolute overflow-hidden w-full h-full p-0">
        <img
          className="absolute bottom-80 scale-90 left-150 rotate-3"
          src="src/assets/photo_2025-10-14_07-26-26.jpg"
          alt=""
        />
        <img
          className="absolute bottom-20 right-100 scale-50 -rotate-3"
          src="src/assets/20251013_172614.jpg"
          alt=""
        />

        <div className="bg-black/50 absolute w-full h-full flex flex-col items-center justify-center"></div>
      </div>

      <div className="w-full h-66 absolute flex flex-col items-center justify-center">
        <img src="src/assets/infotechlogo.png" className="w-50 h-50" alt="" />

        <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent font-bold">
          Android App Development: Productivity Champion
        </span>
      </div>
    </div>
  );
}
