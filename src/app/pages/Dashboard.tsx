import { TrendingUp, Target, Award, BarChart3, Clock, Zap, Brain, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { PredictionSuccessNotification } from "../components/PredictionSuccessNotification";
import { DemoModeBanner } from "../components/DemoModeBanner";
import { DemoPredictionReward } from "../components/DemoPredictionReward";
import { WalletUpgradeModal } from "../components/WalletUpgradeModal";
import { NFTCardData } from "../components/NFTCard";
import { 
  UpcomingEventsWidget, 
  ClosingSoonWidget, 
  RecommendedEventsWidget,
  CalendarQuickLinks 
} from "../components/CalendarWidgets";

const accuracyData = [
  { month: "Jan", accuracy: 65, id: "jan-2026" },
  { month: "Feb", accuracy: 72, id: "feb-2026" },
  { month: "Mar", accuracy: 68, id: "mar-2026" },
  { month: "Apr", accuracy: 78, id: "apr-2026" },
  { month: "May", accuracy: 85, id: "may-2026" },
  { month: "Jun", accuracy: 82, id: "jun-2026" },
];

const upcomingEvents = [
  {
    id: 1,
    sport: "Formula 1",
    event: "Bahrain GP",
    time: "2026-03-05 15:00",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    sport: "Football",
    event: "Man City vs Liverpool",
    time: "2026-03-06 17:30",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const activePredictions = [
  { id: 1, event: "Monaco GP", prediction: "Verstappen wins", status: "pending", odds: "2.5x" },
  { id: 2, event: "Arsenal vs Chelsea", prediction: "Arsenal 2-1", status: "pending", odds: "3.2x" },
  { id: 3, event: "Saudi Arabian GP", prediction: "Top 3 finish", status: "locked", odds: "1.8x" },
];

export function Dashboard() {
  const [showNotification, setShowNotification] = useState(false);
  const [showDemoReward, setShowDemoReward] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  useEffect(() => {
    // Check if in demo mode from URL parameter
    const params = new URLSearchParams(window.location.search);
    setIsDemoMode(params.get("demo") === "true");
  }, []);
  
  // Mock NFT reward for demonstration
  const mockNFTReward: NFTCardData = {
    id: "NFT-NEW-001",
    title: "Perfect Podium Prediction",
    eventName: "Monaco Grand Prix",
    eventDate: "2026-03-28",
    username: "RacerPro",
    walletAddress: "0x7a3f...8d2c",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Correctly predicted all three podium finishers in the correct order",
    price: 2.5,
  };

  const handleDemoModeConnect = () => {
    setShowWalletModal(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      {isDemoMode && <DemoModeBanner onConnectWallet={handleDemoModeConnect} />}
      
      <PredictionSuccessNotification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        nftReward={mockNFTReward}
      />

      <DemoPredictionReward
        isOpen={showDemoReward}
        onClose={() => setShowDemoReward(false)}
        onConnectWallet={handleDemoModeConnect}
        nftReward={mockNFTReward}
      />

      <WalletUpgradeModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onComplete={(username) => {
          console.log("Identity created for:", username);
          setIsDemoMode(false);
          window.history.pushState({}, "", "/dashboard");
        }}
      />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#ffed4e]">Dashboard</h1>
          <p className="text-[#d0d0da]">Track your predictions and performance</p>
        </div>

        {/* Demo Buttons - Remove in production */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={() => setShowNotification(true)}
            className="rounded-lg bg-[#00ff88] px-6 py-3 font-bold text-white hover:bg-[#00e077] transition-colors"
          >
            🎉 Demo: Real NFT Reward
          </button>
          <button
            onClick={() => setShowDemoReward(true)}
            className="rounded-lg bg-[#ffed4e] px-6 py-3 font-bold text-white hover:bg-[#ffe01a] transition-colors"
          >
            🔒 Demo: Demo Mode Reward
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="rounded-xl border-2 border-[#ffed4e] bg-[#16172a] p-6 hover:bg-[#1a1b2e] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffed4e]/20">
                <Target className="h-6 w-6 text-[#ffed4e]" />
              </div>
              <div className="flex items-center gap-1 text-sm font-bold text-[#00ff88]">
                <TrendingUp className="h-4 w-4" />
                +5.2%
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 text-[#ffed4e]">82.5%</div>
            <div className="text-sm text-[#d0d0da]">Prediction Accuracy</div>
          </div>

          <div className="rounded-xl border-2 border-[#00d4ff] bg-[#16172a] p-6 hover:bg-[#1a1b2e] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/20">
                <BarChart3 className="h-6 w-6 text-[#00d4ff]" />
              </div>
              <div className="flex items-center gap-1 text-sm font-bold text-[#00ff88]">
                <TrendingUp className="h-4 w-4" />
                +12
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 text-[#00d4ff]">247</div>
            <div className="text-sm text-[#d0d0da]">Total Predictions</div>
          </div>

          <div className="rounded-xl border-2 border-[#c946ff] bg-[#16172a] p-6 hover:bg-[#1a1b2e] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#c946ff]/20">
                <Zap className="h-6 w-6 text-[#c946ff]" />
              </div>
              <div className="flex items-center gap-1 text-sm font-bold text-[#00ff88]">
                <TrendingUp className="h-4 w-4" />
                +150
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 text-[#c946ff]">12,450</div>
            <div className="text-sm text-[#d0d0da]">Points Earned</div>
          </div>

          <div className="rounded-xl border-2 border-[#ffed4e] bg-[#16172a] p-6 hover:bg-[#1a1b2e] transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffed4e]/20">
                <Award className="h-6 w-6 text-[#ffed4e]" />
              </div>
              <div className="flex items-center gap-1 text-sm font-bold text-[#00ff88]">
                <TrendingUp className="h-4 w-4" />
                +3
              </div>
            </div>
            <div className="text-3xl font-bold mb-1 text-white">#156</div>
            <div className="text-sm text-[#d0d0da]">Global Ranking</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Accuracy Chart */}
          <div className="lg:col-span-2 rounded-xl border-2 border-[#00d4ff] bg-[#16172a] p-6">
            <h3 className="text-xl font-bold mb-6 text-white">Accuracy Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={accuracyData}>
                <XAxis 
                  dataKey="month" 
                  stroke="#d0d0da"
                  tickLine={false}
                />
                <YAxis 
                  stroke="#d0d0da"
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#16172a",
                    border: "2px solid #00d4ff",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#00d4ff"
                  strokeWidth={3}
                  dot={{ fill: "#00d4ff", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Earned Coins */}
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <h3 className="text-xl font-semibold mb-6 text-white">Earned Coins</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd700] to-[#00d4ff]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#151621]">
                  <span className="text-3xl">💰</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-white">2,847</div>
              <div className="text-sm text-[#a1a1b0] mb-4">PredictX Coins</div>
              <Link
                to="/rewards"
                className="inline-block w-full rounded-lg border border-[#ffd700] bg-[#ffd700]/10 px-4 py-2 text-sm text-white hover:bg-[#ffd700]/20 transition-colors"
              >
                View Rewards
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* AI Prediction Assistant */}
          <div className="rounded-xl border border-[#2a2b3d] bg-gradient-to-br from-[#151621] to-[#1f2130] p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#b026ff]">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                AI Prediction Assistant
              </h3>
              <Link to="/ai-assistant" className="text-sm text-[#00d4ff] hover:underline flex items-center gap-1">
                View Full Analysis
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d4ff]/20 flex-shrink-0">
                    <Brain className="h-4 w-4 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-2">AI Insight</div>
                    <p className="text-xs text-[#d0d0da] mb-2">
                      Based on the last 5 races, <span className="font-semibold text-[#00d4ff]">Max Verstappen</span> has a <span className="font-semibold text-[#00ff88]">72% probability</span> of finishing on the podium.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-[#2a2b3d] overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88]" style={{ width: '72%' }} />
                      </div>
                      <span className="text-xs font-semibold text-[#00ff88]">92% Confidence</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#ffed4e]/30 bg-[#ffed4e]/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffed4e]/20 flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-[#ffed4e]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-1">Strategy Tip</div>
                    <p className="text-xs text-[#d0d0da]">
                      Red Bull has won the last 4 races. Consider safe predictions for high-confidence gains.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/ai-assistant"
                className="block w-full rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#b026ff] px-4 py-3 text-sm font-semibold text-white text-center hover:opacity-90 transition-opacity"
              >
                <span className="flex items-center justify-center gap-2">
                  <Brain className="h-4 w-4" />
                  Get Full AI Analysis
                </span>
              </Link>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Upcoming Events</h3>
              <Link to="/predictions" className="text-sm text-[#00d4ff] hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex gap-4 rounded-lg border border-[#2a2b3d] bg-[#1f2130] p-4 hover:border-[#00d4ff] transition-colors"
                >
                  <ImageWithFallback
                    src={event.image}
                    alt={event.event}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-xs text-[#00d4ff] mb-1">{event.sport}</div>
                    <div className="font-semibold text-white mb-2">{event.event}</div>
                    <div className="flex items-center gap-2 text-sm text-[#a1a1b0]">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                  </div>
                  <Link
                    to="/predictions"
                    className="rounded-lg bg-gradient-to-r from-[#ffd700] to-[#00d4ff] px-4 py-2 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all self-center"
                  >
                    Predict
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Active Predictions */}
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Active Predictions</h3>
              <span className="text-sm text-[#a1a1b0]">{activePredictions.length} active</span>
            </div>
            <div className="space-y-4">
              {activePredictions.map((prediction) => (
                <div
                  key={prediction.id}
                  className="rounded-lg border border-[#2a2b3d] bg-[#1f2130] p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-sm text-[#a1a1b0] mb-1">{prediction.event}</div>
                      <div className="font-semibold text-white">{prediction.prediction}</div>
                    </div>
                    <div className="text-sm font-semibold text-[#ffd700]">{prediction.odds}</div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${
                        prediction.status === "pending"
                          ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                          : "bg-[#a1a1b0]/10 text-[#a1a1b0]"
                      }`}
                    >
                      {prediction.status === "pending" ? "⏳ Pending" : "🔒 Locked"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sports Calendar Widgets */}
        <div className="mb-8">
          <CalendarQuickLinks />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <UpcomingEventsWidget />
          <RecommendedEventsWidget />
        </div>

        <div className="mb-8">
          <ClosingSoonWidget />
        </div>

        {/* Leaderboard Preview */}
        <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Leaderboard Preview</h3>
            <Link to="/leaderboard" className="text-sm text-[#00d4ff] hover:underline">
              View Full Leaderboard
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { rank: 1, name: "CryptoMaster", points: 45210, accuracy: 94.2, badge: "🥇" },
              { rank: 2, name: "SportsSage", points: 42850, accuracy: 92.8, badge: "🥈" },
              { rank: 3, name: "PredictPro", points: 41200, accuracy: 91.5, badge: "🥉" },
              { rank: 156, name: "You", points: 12450, accuracy: 82.5, badge: "⭐" },
            ].map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between rounded-lg border p-4 ${
                  user.rank === 156
                    ? "border-[#ffd700] bg-[#ffd700]/5"
                    : "border-[#2a2b3d] bg-[#1f2130]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a2b3d]">
                    <span className="text-lg">{user.badge}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{user.name}</div>
                    <div className="text-sm text-[#a1a1b0]">Rank #{user.rank}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-white">{user.points.toLocaleString()} pts</div>
                  <div className="text-sm text-[#00d4ff]">{user.accuracy}% accuracy</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}