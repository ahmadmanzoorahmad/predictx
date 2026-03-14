import { useState } from "react";
import { User, TrendingUp, Trophy, Calendar, Target, Award, Settings, Brain, Sparkles, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const accuracyData = [
  { month: "Sep", accuracy: 68, id: "sep-profile" },
  { month: "Oct", accuracy: 72, id: "oct-profile" },
  { month: "Nov", accuracy: 75, id: "nov-profile" },
  { month: "Dec", accuracy: 78, id: "dec-profile" },
  { month: "Jan", accuracy: 82, id: "jan-profile" },
  { month: "Feb", accuracy: 85, id: "feb-profile" },
  { month: "Mar", accuracy: 82, id: "mar-profile" },
];

const sportDistribution = [
  { name: "Formula 1", value: 145, color: "#ffd700" },
  { name: "Football", value: 102, color: "#00d4ff" },
];

const predictionHistory = [
  {
    id: 1,
    event: "Bahrain GP 2026",
    sport: "F1",
    prediction: "Verstappen wins",
    result: "Correct",
    points: 150,
    date: "2026-03-05",
  },
  {
    id: 2,
    event: "Man City vs Liverpool",
    sport: "Football",
    prediction: "Man City 2-1",
    result: "Correct",
    points: 200,
    date: "2026-03-06",
  },
  {
    id: 3,
    event: "Saudi Arabian GP",
    sport: "F1",
    prediction: "Hamilton podium",
    result: "Incorrect",
    points: 0,
    date: "2026-03-12",
  },
  {
    id: 4,
    event: "Arsenal vs Chelsea",
    sport: "Football",
    prediction: "Arsenal 2-0",
    result: "Correct",
    points: 180,
    date: "2026-03-08",
  },
  {
    id: 5,
    event: "Australian GP",
    sport: "F1",
    prediction: "Leclerc fastest lap",
    result: "Correct",
    points: 120,
    date: "2026-03-20",
  },
];

const earnedBadges = [
  { id: 1, name: "F1 Master", icon: "🏎️", color: "from-[#ffd700] to-[#ffed4e]" },
  { id: 2, name: "Football Oracle", icon: "⚽", color: "from-[#00d4ff] to-[#00e8ff]" },
  { id: 3, name: "Podium Predictor", icon: "🏆", color: "from-[#b026ff] to-[#d84fff]" },
  { id: 4, name: "First Blood", icon: "⭐", color: "from-[#00ff88] to-[#00ffaa]" },
];

export function Profile() {
  const [activeTab, setActiveTab] = useState<"history" | "stats" | "badges">("history");

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="rounded-xl border border-[#2a2b3d] bg-gradient-to-br from-[#151621] to-[#1f2130] p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#00d4ff]/10 to-transparent rounded-bl-full" />
          
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffd700] to-[#00d4ff] text-5xl">
              👤
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">YourUsername</h1>
                <span className="rounded-full bg-[#00d4ff]/20 px-3 py-1 text-sm text-[#00d4ff]">
                  Elite Predictor
                </span>
              </div>
              <p className="text-[#a1a1b0] mb-4">Member since January 2026</p>
              
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-2xl font-bold text-[#ffd700]">#156</div>
                  <div className="text-sm text-[#a1a1b0]">Global Rank</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00d4ff]">82.5%</div>
                  <div className="text-sm text-[#a1a1b0]">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#b026ff]">247</div>
                  <div className="text-sm text-[#a1a1b0]">Predictions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12,450</div>
                  <div className="text-sm text-[#a1a1b0]">Total Points</div>
                </div>
              </div>
            </div>

            <button className="rounded-lg border border-[#2a2b3d] bg-[#1f2130] px-6 py-2 hover:bg-[#2a2b3d] transition-colors flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <Target className="h-6 w-6 text-[#ffd700]" />
              </div>
              <TrendingUp className="h-5 w-5 text-[#00ff88]" />
            </div>
            <div className="text-3xl font-bold mb-1">204</div>
            <div className="text-sm text-[#a1a1b0]">Correct Predictions</div>
          </div>

          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/10">
                <Calendar className="h-6 w-6 text-[#00d4ff]" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">78</div>
            <div className="text-sm text-[#a1a1b0]">Days Active</div>
          </div>

          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#b026ff]/10">
                <Trophy className="h-6 w-6 text-[#b026ff]" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">4</div>
            <div className="text-sm text-[#a1a1b0]">NFT Badges</div>
          </div>

          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00ff88]/10">
                <Award className="h-6 w-6 text-[#00ff88]" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">28</div>
            <div className="text-sm text-[#a1a1b0]">Win Streak</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#00d4ff]" />
              Accuracy Over Time
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={accuracyData}>
                <XAxis dataKey="month" stroke="#a1a1b0" />
                <YAxis stroke="#a1a1b0" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#151621",
                    border: "1px solid #2a2b3d",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#00d4ff"
                  strokeWidth={3}
                  dot={{ fill: "#00d4ff", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <h3 className="text-xl font-semibold mb-6">Predictions by Sport</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={sportDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sportDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#151621",
                    border: "1px solid #2a2b3d",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {sportDistribution.map((sport) => (
                <div key={sport.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: sport.color }}
                    />
                    <span>{sport.name}</span>
                  </div>
                  <span className="font-semibold">{sport.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-[#2a2b3d]">
          <button
            onClick={() => setActiveTab("history")}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === "history"
                ? "border-[#00d4ff] text-[#00d4ff]"
                : "border-transparent text-[#a1a1b0] hover:text-foreground"
            }`}
          >
            Prediction History
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === "stats"
                ? "border-[#00d4ff] text-[#00d4ff]"
                : "border-transparent text-[#a1a1b0] hover:text-foreground"
            }`}
          >
            Detailed Stats
          </button>
          <button
            onClick={() => setActiveTab("badges")}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === "badges"
                ? "border-[#00d4ff] text-[#00d4ff]"
                : "border-transparent text-[#a1a1b0] hover:text-foreground"
            }`}
          >
            Earned Badges
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "history" && (
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-[#2a2b3d] bg-[#1f2130]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-[#a1a1b0]">Date</th>
                    <th className="px-6 py-4 text-left text-sm text-[#a1a1b0]">Event</th>
                    <th className="px-6 py-4 text-left text-sm text-[#a1a1b0]">Prediction</th>
                    <th className="px-6 py-4 text-left text-sm text-[#a1a1b0]">Result</th>
                    <th className="px-6 py-4 text-right text-sm text-[#a1a1b0]">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2b3d]">
                  {predictionHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-[#1f2130] transition-colors">
                      <td className="px-6 py-4 text-sm text-[#a1a1b0]">{item.date}</td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-white">{item.event}</div>
                        <div className="text-xs text-[#a1a1b0]">
                          {item.sport === "F1" ? "🏎️ Formula 1" : "⚽ Football"}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-white">{item.prediction}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${
                            item.result === "Correct"
                              ? "bg-[#00ff88]/10 text-[#00ff88]"
                              : "bg-[#ff4444]/10 text-[#ff4444]"
                          }`}
                        >
                          {item.result === "Correct" ? "✓ Correct" : "✗ Incorrect"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-white">
                        {item.points > 0 ? `+${item.points}` : item.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
              <h3 className="text-lg font-semibold mb-4">Performance Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-[#a1a1b0]">Formula 1 Accuracy</span>
                    <span className="font-semibold">84.8%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#2a2b3d] overflow-hidden">
                    <div className="h-full bg-[#ffd700] w-[84.8%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-[#a1a1b0]">Football Accuracy</span>
                    <span className="font-semibold">79.4%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#2a2b3d] overflow-hidden">
                    <div className="h-full bg-[#00d4ff] w-[79.4%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
              <h3 className="text-lg font-semibold mb-4">Achievement Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-[#a1a1b0]">Season Champion</span>
                    <span className="font-semibold">156/10</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#2a2b3d] overflow-hidden">
                    <div className="h-full bg-[#b026ff] w-[15%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-[#a1a1b0]">Consistency King</span>
                    <span className="font-semibold">22/30 days</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#2a2b3d] overflow-hidden">
                    <div className="h-full bg-[#00d4ff] w-[73%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "badges" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6 hover:border-[#00d4ff] transition-colors"
              >
                <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${badge.color}`}>
                  <span className="text-4xl">{badge.icon}</span>
                </div>
                <h3 className="text-center font-semibold mb-2">{badge.name}</h3>
                <div className="text-center text-xs text-[#00ff88]">✓ Unlocked</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}