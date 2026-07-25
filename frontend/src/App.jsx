import { useState } from "react";
import toddlerImg from "./assets/toddler.jpg";
import teenagerImg from "./assets/teenager.jpg";
import expertImg from "./assets/expert.jpg";
import Form from "./components/Form";
import { Sparkles, Loader2 } from "lucide-react";

const LEVELS = [
  { key: "toddler", label: "Toddler", image: toddlerImg, accent: "#FF9F45" },
  { key: "teenager", label: "Teenager", image: teenagerImg, accent: "#3FCFB4" },
  { key: "expert", label: "Expert", image: expertImg, accent: "#9C8CFF" },
];

function App() {
  const [activeLevel, setActiveLevel] = useState("toddler");
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const current = LEVELS.find((l) => l.key === activeLevel);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("http://localhost:8000/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), level: activeLevel }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setOutput(data.explanation);
    } catch (err) {
      setOutput("Couldn't generate an explanation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center transition-all duration-700 ease-out"
        style={{ backgroundImage: `url(${current.image})` }}
      />
      <div className="fixed inset-0 bg-black/50" />

      <div className="relative z-10 h-screen w-full flex flex-col items-center px-4 py-8 sm:py-10 overflow-hidden">
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-center mb-1 drop-shadow-lg transition-colors duration-500"
          style={{ color: current.accent }}
        >
          ToddlerToPhD
        </h1>
        <p className="text-white/80 text-sm mb-6 text-center">Explained at exactly your level.</p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
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

        {/* Two-column area */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {/* Left: question form */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-7 shadow-2xl">
            <Form
              topic={topic}
              setTopic={setTopic}
              onSubmit={handleSubmit}
              loading={loading}
              accent={current.accent}
            />
            <p className="text-gray-600 text-xs mt-3">
              Tip: be specific — "how vaccines train the immune system" beats "vaccines".
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} style={{ color: current.accent }} />
              <span className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Answer</span>
            </div>

            <div className="ttp-scroll max-h-[46vh] overflow-y-auto pr-3">
              {!output && !loading && (
                <p className="text-gray-500 text-sm sm:text-base">
                  Your {current.label.toLowerCase()}-level explanation will show up here.
                </p>
              )}
              {loading && (
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Loader2 size={16} className="animate-spin" style={{ color: current.accent }} />
                  Thinking...
                </div>
              )}
              {output && !loading && (
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed whitespace-pre-line">{output}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ttp-scroll::-webkit-scrollbar { width: 6px; }
        .ttp-scroll::-webkit-scrollbar-track { background: transparent; }
        .ttp-scroll::-webkit-scrollbar-thumb { background: ${current.accent}55; border-radius: 999px; }
        .ttp-scroll::-webkit-scrollbar-thumb:hover { background: ${current.accent}99; }
        .ttp-scroll { scrollbar-width: thin; scrollbar-color: ${current.accent}55 transparent; }
      `}</style>
    </div>
  );
}

export default App;