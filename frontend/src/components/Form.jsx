import { Send, Loader2, Sparkles } from "lucide-react";

function Form({ topic, setTopic, onSubmit, loading, accent }) {
    return (
        <div className="w-full">
            <div className="flex items-center gap-2 mb-5">
                <Sparkles size={16} style={{ color: accent }} />
                <span className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wide">Ask anything</span>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <textarea
                    rows={1}
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. black holes, gravity, how the internet works..."
                    className="w-full resize-none px-4 py-2.5 text-sm sm:text-base text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
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
        </div>
    );
}

export default Form;