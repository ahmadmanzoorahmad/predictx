import { useState } from "react";
import { IdentityCard, IdentityData } from "../components/IdentityCard";
import { Trophy, TrendingUp, Target, Award, Calendar, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { NFTCard, NFTCardData } from "../components/NFTCard";
import { Link } from "react-router";

// Mock identity data
const mockIdentity: IdentityData = {
  username: "RacerPro",
  walletAddress: "0x7a3f...8d2c",
  reputationScore: 820,
  totalPredictions: 247,
  accuracy: 82.5,
  seasonRank: 12,
  nftCount: 6,
  skillLevel: "Expert",
  topAchievements: ["Perfect Podium", "Hat-Trick Hero", "Fastest Lap Master"],
};

// Mock prediction history data
const predictionAccuracyData = [
  { month: "Jan", accuracy: 65, predictions: 28, id: "jan-acc" },
  { month: "Feb", accuracy: 72, predictions: 35, id: "feb-acc" },
  { month: "Mar", accuracy: 68, predictions: 42, id: "mar-acc" },
  { month: "Apr", accuracy: 78, predictions: 38, id: "apr-acc" },
  { month: "May", accuracy: 85, predictions: 45, id: "may-acc" },
  { month: "Jun", accuracy: 82, predictions: 59, id: "jun-acc" },
];

const reputationGrowthData = [
  { month: "Jan", reputation: 200, id: "jan-rep" },
  { month: "Feb", reputation: 340, id: "feb-rep" },
  { month: "Mar", reputation: 480, id: "mar-rep" },
  { month: "Apr", reputation: 590, id: "apr-rep" },
  { month: "May", reputation: 720, id: "may-rep" },
  { month: "Jun", reputation: 820, id: "jun-rep" },
];

const recentPredictions = [
  {
    id: 1,
    event: "Monaco Grand Prix",
    sport: "F1",
    prediction: "Verstappen wins",
    result: "Correct",
    date: "2026-03-28",
    reputationGain: 50,
  },
  {
    id: 2,
    event: "Man City vs Liverpool",
    sport: "Football",
    prediction: "Over 2.5 goals",
    result: "Correct",
    date: "2026-03-25",
    reputationGain: 35,
  },
  {
    id: 3,
    event: "Bahrain GP",
    sport: "F1",
    prediction: "Ferrari podium",
    result: "Incorrect",
    date: "2026-03-22",
    reputationGain: -10,
  },
  {
    id: 4,
    event: "Arsenal vs Chelsea",
    sport: "Football",
    prediction: "Arsenal win",
    result: "Correct",
    date: "2026-03-20",
    reputationGain: 40,
  },
];

// Mock NFT achievements
const earnedNFTs: NFTCardData[] = [
  {
    id: "NFT-001",
    title: "Perfect Podium Prediction",
    eventName: "Monaco Grand Prix",
    eventDate: "2026-03-28",
    username: "RacerPro",
    walletAddress: "0x7a3f...8d2c",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Correctly predicted all three podium finishers in the correct order",
  },
  {
    id: "NFT-002",
    title: "Hat-Trick Hero",
    eventName: "Man City vs Liverpool",
    eventDate: "2026-03-06",
    username: "RacerPro",
    walletAddress: "0x7a3f...8d2c",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "football",
    description: "Predicted exact scoreline and first goalscorer",
  },
  {
    id: "NFT-003",
    title: "Fastest Lap Master",
    eventName: "Bahrain Grand Prix",
    eventDate: "2026-03-05",
    username: "RacerPro",
    walletAddress: "0x7a3f...8d2c",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Successfully predicted fastest lap driver",
  },
];

export function PredictionIdentity() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"month" | "season" | "all">("season");

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">My Prediction Identity</h1>
          <p className="text-[#d0d0da]">Your reputation, achievements, and prediction history</p>
        </div>

        {/* Identity Card */}
        <div className="mb-8">
          <IdentityCard identity={mockIdentity} variant="full" />
        </div>

        {/* Reputation Growth Chart */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffed4e]/20">
                  <Zap className="h-5 w-5 text-[#ffed4e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Reputation Growth</h3>
                  <p className="text-sm text-[#d0d0da]">Season progression</p>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={reputationGrowthData}>
                <defs>
                  <linearGradient id="reputationGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffed4e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ffed4e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#16172a',
                    border: '1px solid #3a3b52',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="reputation"
                  stroke="#ffed4e"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#reputationGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88]">+620</div>
                <div className="text-xs text-[#a1a1b0]">This Season</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00d4ff]">820</div>
                <div className="text-xs text-[#a1a1b0]">Current</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#c946ff]">1000</div>
                <div className="text-xs text-[#a1a1b0]">Next Level</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00d4ff]/20">
                  <Target className="h-5 w-5 text-[#00d4ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Accuracy Over Time</h3>
                  <p className="text-sm text-[#d0d0da]">Monthly performance</p>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={predictionAccuracyData}>
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#16172a',
                    border: '1px solid #3a3b52',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#00d4ff"
                  strokeWidth={3}
                  dot={{ fill: '#00d4ff', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00ff88]">85%</div>
                <div className="text-xs text-[#a1a1b0]">Best Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00d4ff]">82.5%</div>
                <div className="text-xs text-[#a1a1b0]">Average</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ffed4e]">247</div>
                <div className="text-xs text-[#a1a1b0]">Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Predictions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Predictions</h2>
            <Link to="/predictions" className="text-sm font-semibold text-[#00d4ff] hover:underline">
              View All →
            </Link>
          </div>

          <div className="space-y-3">
            {recentPredictions.map((prediction) => (
              <div
                key={prediction.id}
                className="rounded-xl border border-[#3a3b52] bg-[#16172a] p-4 hover:bg-[#1a1b2e] transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0a0b14]">
                      <span className="text-xl">{prediction.sport === "F1" ? "🏎️" : "⚽"}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white">{prediction.event}</h3>
                        <span className="text-xs text-[#a1a1b0]">{prediction.sport}</span>
                      </div>
                      <p className="text-sm text-[#d0d0da]">{prediction.prediction}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-3 w-3 text-[#a1a1b0]" />
                        <span className="text-xs text-[#a1a1b0]">{prediction.date}</span>
                      </div>
                      <div className={`text-sm font-semibold ${
                        prediction.result === "Correct" ? "text-[#00ff88]" : "text-[#ff4444]"
                      }`}>
                        {prediction.result}
                      </div>
                    </div>

                    <div className={`flex items-center gap-1 rounded-lg px-3 py-2 ${
                      prediction.reputationGain > 0 
                        ? "bg-[#00ff88]/10 border border-[#00ff88]" 
                        : "bg-[#ff4444]/10 border border-[#ff4444]"
                    }`}>
                      <TrendingUp className={`h-4 w-4 ${
                        prediction.reputationGain > 0 ? "text-[#00ff88]" : "text-[#ff4444]"
                      }`} />
                      <span className={`text-sm font-bold ${
                        prediction.reputationGain > 0 ? "text-[#00ff88]" : "text-[#ff4444]"
                      }`}>
                        {prediction.reputationGain > 0 ? "+" : ""}{prediction.reputationGain}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earned NFT Achievements */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c946ff]/20">
                <Award className="h-5 w-5 text-[#c946ff]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Earned NFT Achievements</h2>
                <p className="text-sm text-[#d0d0da]">{earnedNFTs.length} unique cards</p>
              </div>
            </div>
            <Link to="/nft-collection" className="text-sm font-semibold text-[#c946ff] hover:underline">
              View Collection →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {earnedNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>
        </div>

        {/* Leaderboard Position */}
        <div className="rounded-xl border-2 border-[#ffed4e] bg-gradient-to-br from-[#ffed4e]/10 to-[#00d4ff]/10 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffed4e]/20 border-2 border-[#ffed4e]">
                <Trophy className="h-8 w-8 text-[#ffed4e]" />
              </div>
              <div>
                <div className="text-sm text-[#a1a1b0] mb-1">Season Leaderboard Rank</div>
                <div className="text-4xl font-bold text-white mb-1">#{mockIdentity.seasonRank}</div>
                <p className="text-sm text-[#d0d0da]">
                  Top <span className="text-[#ffed4e] font-semibold">5%</span> of all predictors
                </p>
              </div>
            </div>

            <Link
              to="/leaderboard"
              className="rounded-lg bg-[#ffed4e] px-6 py-3 font-bold text-white hover:bg-[#ffe01a] transition-colors whitespace-nowrap"
            >
              View Leaderboard →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}