import { Trophy, TrendingUp, Award, Medal, Filter, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type LeaderboardPeriod = "daily" | "weekly" | "monthly" | "allTime";
type LeaderboardFilter = "all" | "highestAccuracy" | "topReputation" | "mostLegendary";

const leaderboardData = {
  daily: [
    { rank: 1, name: "CryptoMaster", avatar: "🦁", points: 1250, accuracy: 94.2, change: "+2", badge: "🥇" },
    { rank: 2, name: "SportsSage", avatar: "🦅", points: 1180, accuracy: 92.8, change: "-1", badge: "🥈" },
    { rank: 3, name: "PredictPro", avatar: "🐺", points: 1120, accuracy: 91.5, change: "+1", badge: "🥉" },
    { rank: 4, name: "BetaGenius", avatar: "🦊", points: 1090, accuracy: 90.1, change: "0", badge: "" },
    { rank: 5, name: "OracleX", avatar: "🐯", points: 1050, accuracy: 89.8, change: "+3", badge: "" },
  ],
  weekly: [
    { rank: 1, name: "SportsSage", avatar: "🦅", points: 8500, accuracy: 93.5, change: "+1", badge: "🥇" },
    { rank: 2, name: "CryptoMaster", avatar: "🦁", points: 8200, accuracy: 92.1, change: "-1", badge: "🥈" },
    { rank: 3, name: "PredictPro", avatar: "🐺", points: 7850, accuracy: 90.8, change: "+2", badge: "🥉" },
    { rank: 4, name: "F1Wizard", avatar: "🏎️", points: 7600, accuracy: 89.5, change: "+1", badge: "" },
    { rank: 5, name: "GoalKeeper", avatar: "⚽", points: 7400, accuracy: 88.9, change: "-2", badge: "" },
  ],
  monthly: [
    { rank: 1, name: "CryptoMaster", avatar: "🦁", points: 32400, accuracy: 93.8, change: "0", badge: "🥇" },
    { rank: 2, name: "SportsSage", avatar: "🦅", points: 31200, accuracy: 92.9, change: "+1", badge: "🥈" },
    { rank: 3, name: "PredictPro", avatar: "🐺", points: 29800, accuracy: 91.2, change: "-1", badge: "🥉" },
    { rank: 4, name: "RacePredictor", avatar: "🏁", points: 28500, accuracy: 90.5, change: "+3", badge: "" },
    { rank: 5, name: "FootyOracle", avatar: "⚽", points: 27900, accuracy: 89.7, change: "+2", badge: "" },
  ],
  allTime: [
    { rank: 1, name: "CryptoMaster", avatar: "🦁", points: 145210, accuracy: 94.2, change: "0", badge: "👑" },
    { rank: 2, name: "SportsSage", avatar: "🦅", points: 142850, accuracy: 92.8, change: "0", badge: "💎" },
    { rank: 3, name: "PredictPro", avatar: "🐺", points: 141200, accuracy: 91.5, change: "0", badge: "⭐" },
    { rank: 4, name: "LegendaryBet", avatar: "🔮", points: 138700, accuracy: 90.9, change: "+1", badge: "🎯" },
    { rank: 5, name: "ElitePredict", avatar: "🎲", points: 135400, accuracy: 90.2, change: "-1", badge: "🏆" },
  ],
};

const extendedRankings = [
  { rank: 6, name: "SpeedDemon", avatar: "⚡", points: 8120, accuracy: 87.5 },
  { rank: 7, name: "StrategyKing", avatar: "♟️", points: 7980, accuracy: 86.8 },
  { rank: 8, name: "DataDriven", avatar: "📊", points: 7850, accuracy: 86.2 },
  { rank: 9, name: "LuckyStrike", avatar: "🎯", points: 7720, accuracy: 85.9 },
  { rank: 10, name: "AcePredictor", avatar: "🃏", points: 7600, accuracy: 85.4 },
  { rank: 156, name: "You", avatar: "👤", points: 12450, accuracy: 82.5 },
];

export function Leaderboard() {
  const [period, setPeriod] = useState<LeaderboardPeriod>("weekly");
  const [filter, setFilter] = useState<LeaderboardFilter>("all");

  const currentData = leaderboardData[period];

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">Leaderboard</h1>
          <p className="text-[#a1a1b0]">Compete with the best predictors worldwide</p>
        </div>

        {/* Identity Reputation Filters */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-[#d0d0da]" />
            <span className="text-sm font-semibold text-white">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === "all"
                  ? "bg-[#ffed4e] text-white"
                  : "border border-[#3a3b52] bg-[#16172a] text-white hover:bg-[#1f2139]"
              }`}
            >
              All Rankings
            </button>
            <button
              onClick={() => setFilter("highestAccuracy")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === "highestAccuracy"
                  ? "bg-[#00d4ff] text-white"
                  : "border border-[#00d4ff] bg-[#16172a] text-[#00d4ff] hover:bg-[#00d4ff]/10"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              Highest Accuracy
            </button>
            <button
              onClick={() => setFilter("topReputation")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === "topReputation"
                  ? "bg-[#c946ff] text-white"
                  : "border border-[#c946ff] bg-[#16172a] text-[#c946ff] hover:bg-[#c946ff]/10"
              }`}
            >
              <Shield className="h-4 w-4" />
              Top Reputation Score
            </button>
            <button
              onClick={() => setFilter("mostLegendary")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                filter === "mostLegendary"
                  ? "bg-[#ffed4e] text-white"
                  : "border border-[#ffed4e] bg-[#16172a] text-[#ffed4e] hover:bg-[#ffed4e]/10"
              }`}
            >
              <Trophy className="h-4 w-4" />
              Most Legendary NFTs
            </button>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          <button
            onClick={() => setPeriod("daily")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              period === "daily"
                ? "bg-gradient-to-r from-[#ffd700] to-[#00d4ff] text-white"
                : "border border-[#2a2b3d] bg-[#151621] hover:bg-[#1f2130]"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setPeriod("weekly")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              period === "weekly"
                ? "bg-gradient-to-r from-[#ffd700] to-[#00d4ff] text-white"
                : "border border-[#2a2b3d] bg-[#151621] hover:bg-[#1f2130]"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setPeriod("monthly")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              period === "monthly"
                ? "bg-gradient-to-r from-[#ffd700] to-[#00d4ff] text-white"
                : "border border-[#2a2b3d] bg-[#151621] hover:bg-[#1f2130]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod("allTime")}
            className={`rounded-lg px-6 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              period === "allTime"
                ? "bg-gradient-to-r from-[#ffd700] to-[#00d4ff] text-white"
                : "border border-[#2a2b3d] bg-[#151621] hover:bg-[#1f2130]"
            }`}
          >
            All Time
          </button>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* 2nd Place */}
          <div className="md:order-1 rounded-xl border border-[#2a2b3d] bg-gradient-to-br from-[#151621] to-[#1f2130] p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#c0c0c0]/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <div className="text-6xl">{currentData[1].avatar}</div>
                <div className="text-4xl">{currentData[1].badge}</div>
              </div>
              <div className="text-2xl font-bold mb-1 text-white">{currentData[1].name}</div>
              <div className="text-sm text-[#a1a1b0] mb-4">Rank #2</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#a1a1b0]">Points</span>
                  <span className="font-semibold text-white">{currentData[1].points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#a1a1b0]">Accuracy</span>
                  <span className="font-semibold text-[#00d4ff]">{currentData[1].accuracy}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="md:order-0 rounded-xl border border-[#ffd700] bg-gradient-to-br from-[#151621] to-[#1f2130] p-6 relative overflow-hidden scale-105">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#ffd700]/20 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <div className="text-7xl">{currentData[0].avatar}</div>
                <div className="text-5xl">{currentData[0].badge}</div>
              </div>
              <div className="text-3xl font-bold mb-1 text-white">{currentData[0].name}</div>
              <div className="text-sm text-[#ffd700] mb-4">🏆 Champion</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#a1a1b0]">Points</span>
                  <span className="font-bold text-[#ffd700]">{currentData[0].points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a1a1b0]">Accuracy</span>
                  <span className="font-bold text-[#00d4ff]">{currentData[0].accuracy}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="md:order-2 rounded-xl border border-[#2a2b3d] bg-gradient-to-br from-[#151621] to-[#1f2130] p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#cd7f32]/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <div className="text-6xl">{currentData[2].avatar}</div>
                <div className="text-4xl">{currentData[2].badge}</div>
              </div>
              <div className="text-2xl font-bold mb-1 text-white">{currentData[2].name}</div>
              <div className="text-sm text-[#a1a1b0] mb-4">Rank #3</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#a1a1b0]">Points</span>
                  <span className="font-semibold text-white">{currentData[2].points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#a1a1b0]">Accuracy</span>
                  <span className="font-semibold text-[#00d4ff]">{currentData[2].accuracy}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Rankings */}
        <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] overflow-hidden">
          <div className="border-b border-[#2a2b3d] bg-[#1f2130] px-6 py-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Trophy className="h-5 w-5 text-[#ffd700]" />
              Full Rankings
            </h2>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-[#1f2130] border-b border-[#2a2b3d] text-sm text-[#a1a1b0]">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Player</div>
            <div className="col-span-2 text-right">Points</div>
            <div className="col-span-2 text-right">Accuracy</div>
            <div className="col-span-2 text-right">Change</div>
          </div>

          {/* Rankings */}
          <div className="divide-y divide-[#2a2b3d]">
            {currentData.slice(3).map((user) => (
              <div
                key={user.rank}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-[#1f2130] transition-colors"
              >
                <div className="col-span-1 flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a2b3d]">
                    {user.rank}
                  </span>
                </div>
                <div className="col-span-5 flex items-center gap-3">
                  <span className="text-3xl">{user.avatar}</span>
                  <div>
                    <div className="font-semibold">{user.name}</div>
                    {user.badge && <span className="text-lg">{user.badge}</span>}
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-end font-semibold">
                  {user.points.toLocaleString()}
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <span className="text-[#00d4ff]">{user.accuracy}%</span>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <span
                    className={`inline-flex items-center gap-1 ${
                      user.change.startsWith("+")
                        ? "text-[#00ff88]"
                        : user.change.startsWith("-")
                        ? "text-[#ff4444]"
                        : "text-[#a1a1b0]"
                    }`}
                  >
                    {user.change.startsWith("+") && <TrendingUp className="h-4 w-4" />}
                    {user.change.startsWith("-") && <TrendingUp className="h-4 w-4 rotate-180" />}
                    {user.change}
                  </span>
                </div>
              </div>
            ))}

            {extendedRankings.map((user) => (
              <div
                key={user.rank}
                className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-[#1f2130] transition-colors ${
                  user.rank === 156 ? "bg-[#ffd700]/5 border-l-4 border-l-[#ffd700]" : ""
                }`}
              >
                <div className="col-span-1 flex items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a2b3d]">
                    {user.rank}
                  </span>
                </div>
                <div className="col-span-5 flex items-center gap-3">
                  <span className="text-3xl">{user.avatar}</span>
                  <div>
                    <div className="font-semibold text-white">{user.name}</div>
                    {user.rank === 156 && <span className="text-xs text-[#ffd700]">Your rank</span>}
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-end font-semibold text-white">
                  {user.points.toLocaleString()}
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <span className="text-[#00d4ff]">{user.accuracy}%</span>
                </div>
                <div className="col-span-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <Trophy className="h-5 w-5 text-[#ffd700]" />
              </div>
              <h3 className="font-semibold">Season Rewards</h3>
            </div>
            <p className="text-sm text-[#a1a1b0]">
              Top 100 players at season end receive exclusive NFT trophies and bonus coins
            </p>
          </div>

          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00d4ff]/10">
                <Medal className="h-5 w-5 text-[#00d4ff]" />
              </div>
              <h3 className="font-semibold">Weekly Prizes</h3>
            </div>
            <p className="text-sm text-[#a1a1b0]">
              Weekly leaderboard winners earn bonus points and special achievement badges
            </p>
          </div>

          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#b026ff]/10">
                <Award className="h-5 w-5 text-[#b026ff]" />
              </div>
              <h3 className="font-semibold">Ranking System</h3>
            </div>
            <p className="text-sm text-[#a1a1b0]">
              Rankings are based on points earned from accurate predictions and consistency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}