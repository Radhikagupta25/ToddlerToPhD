import { useState } from "react";
import toddlerImg from "./assets/toddler.jpg";
import teenagerImg from "./assets/teenager.jpg";
import expertImg from "./assets/expert.jpg";
import Form from "./components/Form";

const LEVELS = [
  { key: "toddler", label: "Toddler", image: toddlerImg, accent: "#FF9F45" },
  { key: "teenager", label: "Teenager", image: teenagerImg, accent: "#3FCFB4" },
  { key: "expert", label: "Expert", image: expertImg, accent: "#9C8CFF" },
];

function App() {
  const [activeLevel, setActiveLevel] = useState("toddler");
  const current = LEVELS.find((l) => l.key === activeLevel);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center transition-all duration-700 ease-out"
        style={{ backgroundImage: `url(${current.image})` }}
      />
      <div className="fixed inset-0 bg-black/50" />
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center px-4 py-10 sm:py-14">
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-center mb-2 drop-shadow-lg transition-colors duration-500"
          style={{ color: current.accent }}
        >
          ToddlerToPhD
        </h1>
        <p className="text-white/80 text-sm sm:text-base mb-8 text-center">
          Explained at exactly your level.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {LEVELS.map((level) => {
            const active = activeLevel === level.key;
            return (
              <button
                key={level.key}
                onClick={() => setActiveLevel(level.key)}
                style={active ? { backgroundColor: level.accent, borderColor: level.accent } : { borderColor: `${level.accent}88`, color: level.accent }}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold border-2 transition-all duration-300 ${active ? "text-gray-900 shadow-lg scale-105" : "bg-gray-900 hover:bg-gray-800"}`}
              >
                {level.label}
              </button>
            );
          })}
        </div>

        <Form level={activeLevel} accent={current.accent} />
      </div>
    </div>
  );
}

export default App;