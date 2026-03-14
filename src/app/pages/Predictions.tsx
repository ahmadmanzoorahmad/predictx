import { useState } from "react";
import { Clock, Lock, TrendingUp, Users, Brain, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type EventType = "all" | "f1" | "football";

// AI Confidence data for predictions
const aiProbabilities: Record<number, Record<number, Record<string, number>>> = {
  1: { // Bahrain GP
    1: { "Verstappen": 72, "Hamilton": 38, "Leclerc": 45, "Norris": 28 },
    2: { "Top 3": 85, "Top 5": 92, "Top 10": 96, "DNF": 15 },
    3: { "Verstappen": 68, "Hamilton": 42, "Leclerc": 48, "Other": 35 }
  },
  2: { // Man City vs Liverpool
    1: { "Man City Win": 52, "Draw": 25, "Liverpool Win": 48 },
    2: { "Under 2.5": 38, "Over 2.5": 62, "Over 3.5": 32 },
    3: { "Man City": 54, "Liverpool": 46, "No Goals": 8 }
  },
  3: { // Saudi Arabian GP
    1: { "Verstappen": 75, "Perez": 42, "Hamilton": 35, "Leclerc": 40 },
    2: { "Yes": 68, "No": 32 },
    3: { "Verstappen": 70, "Hamilton": 38, "Leclerc": 45, "Other": 25 }
  },
  4: { // Arsenal vs Chelsea
    1: { "1-0": 22, "2-0": 18, "2-1": 25, "1-1": 28, "0-0": 12 },
    2: { "Yes": 65, "No": 35 },
    3: { "Arsenal": 48, "Draw": 28, "Chelsea": 42 }
  }
};

const events = [
  {
    id: 1,
    type: "f1" as const,
    title: "Bahrain Grand Prix",
    description: "Season opener at Bahrain International Circuit",
    time: "2026-03-05 15:00",
    locked: false,
    predictions: 1240,
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    options: [
      { id: 1, label: "Race Winner", choices: ["Verstappen", "Hamilton", "Leclerc", "Norris"] },
      { id: 2, label: "Podium Finish", choices: ["Top 3", "Top 5", "Top 10", "DNF"] },
      { id: 3, label: "Fastest Lap", choices: ["Verstappen", "Hamilton", "Leclerc", "Other"] },
    ],
  },
  {
    id: 2,
    type: "football" as const,
    title: "Man City vs Liverpool",
    description: "Premier League - Etihad Stadium",
    time: "2026-03-06 17:30",
    locked: false,
    predictions: 2850,
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    options: [
      { id: 1, label: "Match Outcome", choices: ["Man City Win", "Draw", "Liverpool Win"] },
      { id: 2, label: "Total Goals", choices: ["Under 2.5", "Over 2.5", "Over 3.5"] },
      { id: 3, label: "First Goal", choices: ["Man City", "Liverpool", "No Goals"] },
    ],
  },
  {
    id: 3,
    type: "f1" as const,
    title: "Saudi Arabian GP",
    description: "Night race at Jeddah Corniche Circuit",
    time: "2026-03-12 20:00",
    locked: false,
    predictions: 980,
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    options: [
      { id: 1, label: "Race Winner", choices: ["Verstappen", "Perez", "Hamilton", "Leclerc"] },
      { id: 2, label: "Safety Car", choices: ["Yes", "No"] },
      { id: 3, label: "Pole Position", choices: ["Verstappen", "Hamilton", "Leclerc", "Other"] },
    ],
  },
  {
    id: 4,
    type: "football" as const,
    title: "Arsenal vs Chelsea",
    description: "Premier League - Emirates Stadium",
    time: "2026-03-08 14:00",
    locked: false,
    predictions: 3200,
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    options: [
      { id: 1, label: "Match Score", choices: ["1-0", "2-0", "2-1", "1-1", "0-0"] },
      { id: 2, label: "Both Teams Score", choices: ["Yes", "No"] },
      { id: 3, label: "Match Winner", choices: ["Arsenal", "Draw", "Chelsea"] },
    ],
  },
  {
    id: 5,
    type: "f1" as const,
    title: "Monaco Grand Prix",
    description: "Historic street circuit in Monte Carlo",
    time: "2026-03-28 13:00",
    locked: true,
    predictions: 4520,
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    options: [],
  },
];

export function Predictions() {
  const [filter, setFilter] = useState<EventType>("all");
  const [selectedPredictions, setSelectedPredictions] = useState<Record<string, string>>({});

  const filteredEvents = filter === "all" ? events : events.filter((e) => e.type === filter);

  const handlePredictionSelect = (eventId: number, optionId: number, choice: string) => {
    const key = `${eventId}-${optionId}`;
    setSelectedPredictions((prev) => ({
      ...prev,
      [key]: choice,
    }));
  };

  const submitPrediction = (eventId: number) => {
    // Mock submission
    alert(`Prediction submitted for event ${eventId}!`);
  };

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">Predictions</h1>
          <p className="text-[#d0d0da]">Make your predictions and compete for rewards</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              filter === "all"
                ? "bg-[#ffed4e] text-white"
                : "border border-[#3a3b52] bg-[#16172a] text-white hover:bg-[#1f2139]"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter("f1")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              filter === "f1"
                ? "bg-[#ffed4e] text-white"
                : "border border-[#3a3b52] bg-[#16172a] text-white hover:bg-[#1f2139]"
            }`}
          >
            🏎️ Formula 1
          </button>
          <button
            onClick={() => setFilter("football")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              filter === "football"
                ? "bg-[#ffed4e] text-white"
                : "border border-[#3a3b52] bg-[#16172a] text-white hover:bg-[#1f2139]"
            }`}
          >
            ⚽ Football
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] overflow-hidden hover:border-[#00d4ff] transition-colors"
            >
              {/* Event Header */}
              <div className="relative">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                {event.locked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="flex items-center gap-2 rounded-full bg-[#16172a]/95 px-4 py-2 border border-[#3a3b52]">
                      <Lock className="h-5 w-5 text-[#d0d0da]" />
                      <span className="text-sm font-semibold text-white">Predictions Locked</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#16172a]/95 border border-[#00d4ff] px-3 py-1 text-xs font-semibold text-[#00d4ff] backdrop-blur-sm">
                    {event.type === "f1" ? "🏎️ F1" : "⚽ Football"}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#00d4ff]/20 px-3 py-1 text-xs text-[#00d4ff] backdrop-blur-sm">
                    <Users className="h-3 w-3" />
                    {event.predictions} predictions
                  </span>
                </div>
              </div>

              {/* Event Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-[#a1a1b0] mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#00d4ff] mb-6">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </div>

                {/* Prediction Options */}
                {!event.locked && event.options.length > 0 && (
                  <div className="space-y-4">
                    {/* AI Insights Banner */}
                    <div className="rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/5 p-3">
                      <div className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-[#00d4ff]" />
                        <span className="text-xs font-semibold text-[#00d4ff]">AI-Powered Prediction Insights</span>
                      </div>
                    </div>

                    {event.options.map((option) => {
                      const eventProbs = aiProbabilities[event.id];
                      const optionProbs = eventProbs?.[option.id];
                      
                      return (
                        <div key={option.id}>
                          <label className="text-sm text-[#a1a1b0] mb-2 block flex items-center gap-2">
                            {option.label}
                            <Target className="h-3 w-3 text-[#00d4ff]" />
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {option.choices.map((choice) => {
                              const key = `${event.id}-${option.id}`;
                              const isSelected = selectedPredictions[key] === choice;
                              const aiProb = optionProbs?.[choice];
                              
                              return (
                                <button
                                  key={choice}
                                  onClick={() => handlePredictionSelect(event.id, option.id, choice)}
                                  className={`rounded-lg border px-3 py-2.5 text-sm transition-all relative overflow-hidden ${
                                    isSelected
                                      ? "border-[#00d4ff] bg-[#00d4ff]/10 text-[#00d4ff]"
                                      : "border-[#2a2b3d] bg-[#1f2130] text-white hover:bg-[#2a2b3d]"
                                  }`}
                                >
                                  <div className="relative z-10">
                                    <div className="font-medium mb-1">{choice}</div>
                                    {aiProb !== undefined && (
                                      <div className="flex items-center gap-1 text-xs">
                                        <Brain className="h-3 w-3" style={{ color: aiProb >= 60 ? "#00ff88" : aiProb >= 40 ? "#00d4ff" : "#ffed4e" }} />
                                        <span style={{ color: aiProb >= 60 ? "#00ff88" : aiProb >= 40 ? "#00d4ff" : "#ffed4e" }}>
                                          {aiProb}% AI
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  {/* AI Confidence Background */}
                                  {aiProb !== undefined && (
                                    <div
                                      className="absolute bottom-0 left-0 h-1 rounded-full transition-all"
                                      style={{
                                        width: `${aiProb}%`,
                                        backgroundColor: aiProb >= 60 ? "#00ff88" : aiProb >= 40 ? "#00d4ff" : "#ffed4e",
                                        opacity: 0.3
                                      }}
                                    />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    <button
                      onClick={() => submitPrediction(event.id)}
                      className="w-full rounded-lg bg-gradient-to-r from-[#ffd700] to-[#00d4ff] px-4 py-3 text-sm font-semibold text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
                    >
                      Submit Prediction
                    </button>
                  </div>
                )}

                {event.locked && (
                  <div className="rounded-lg border border-[#2a2b3d] bg-[#1f2130] p-4 text-center">
                    <Lock className="h-6 w-6 text-[#a1a1b0] mx-auto mb-2" />
                    <p className="text-sm text-[#a1a1b0]">
                      Predictions are locked. Event in progress.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-8 rounded-xl border border-[#00d4ff] bg-[#00d4ff]/5 p-6">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/10">
              <TrendingUp className="h-6 w-6 text-[#00d4ff]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">How Predictions Work</h3>
              <p className="text-sm text-[#a1a1b0]">
                Make your predictions before events start. Accurate predictions earn you points,
                coins, and increase your ranking. The more accurate you are, the more rewards you
                earn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}