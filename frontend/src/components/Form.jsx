import { useState } from "react";
import { Send, Loader2, Sparkles } from "lucide-react";

function Form({ level, accent }) {
    const [topic, setTopic] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!topic.trim()) return;
        setLoading(true);
        setOutput("");

        setTimeout(() => {
            setOutput(`(${level} level) Here's an explanation of "${topic}"...`);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-5">
                <Sparkles size={16} style={{ color: accent }} />
                <span className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Ask anything</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <textarea
                    rows={2}
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. black holes, gravity, how the internet works..."
                    className="w-full resize-none px-4 py-3 text-sm sm:text-base text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                    style={{ boxShadow: topic ? `0 0 0 2px ${accent}55` : "none" }}
                />

                <button
                    type="submit"
                    disabled={!topic.trim() || loading}
                    style={{ backgroundColor: accent }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-gray-900 text-sm sm:text-base font-bold shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    {loading ? "Thinking..." : "Explain it"}
                </button>
            </form>

            {(output || loading) && (
                <div className="mt-5 pt-5 border-t border-gray-800">
                    {loading ? (
                        <div className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: accent, animationDelay: "0ms" }} />
                            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: accent, animationDelay: "150ms" }} />
                            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: accent, animationDelay: "300ms" }} />
                        </div>
                    ) : (
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{output}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Form;