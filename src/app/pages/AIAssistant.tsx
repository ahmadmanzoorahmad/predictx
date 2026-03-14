import { Brain, TrendingUp, Zap, Shield, Target, AlertCircle, Sparkles, BarChart3, MessageSquare, Trophy, Activity } from "lucide-react";
import { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Link } from "react-router";

const performanceData = [
  { race: "Bahrain", verstappen: 95, hamilton: 78, leclerc: 82, perez: 75 },
  { race: "Saudi", verstappen: 88, hamilton: 85, leclerc: 90, perez: 72 },
  { race: "Australia", verstappen: 92, hamilton: 80, leclerc: 78, perez: 85 },
  { race: "Japan", verstappen: 98, hamilton: 75, leclerc: 85, perez: 80 },
  { race: "Miami", verstappen: 90, hamilton: 88, leclerc: 83, perez: 78 },
];

const winProbability = [
  { driver: "M. Verstappen", probability: 72, form: 95 },
  { driver: "L. Hamilton", probability: 38, form: 82 },
  { driver: "C. Leclerc", probability: 45, form: 85 },
  { driver: "S. Perez", probability: 28, form: 78 },
  { driver: "G. Russell", probability: 22, form: 75 },
];

const radarData = [
  { category: "Qualifying", verstappen: 92, hamilton: 85 },
  { category: "Race Pace", verstappen: 95, hamilton: 88 },
  { category: "Overtaking", verstappen: 88, hamilton: 90 },
  { category: "Consistency", verstappen: 98, hamilton: 82 },
  { category: "Strategy", verstappen: 90, hamilton: 92 },
];

const aiInsights = [
  {
    type: "safe",
    icon: Shield,
    color: "#00ff88",
    title: "Safe Prediction",
    message: "Red Bull has won the last 4 races with 95% podium rate",
    confidence: 92
  },
  {
    type: "balanced",
    icon: Target,
    color: "#00d4ff",
    title: "Balanced Prediction",
    message: "Ferrari has strong qualifying record at this track (3/5 poles)",
    confidence: 68
  },
  {
    type: "risky",
    icon: Zap,
    color: "#ffed4e",
    title: "High Risk Opportunity",
    message: "Mercedes upgrades show 15% performance improvement",
    confidence: 45
  }
];

const chatHistory = [
  { role: "user", message: "Who has the highest chance to win this race?", timestamp: "2 min ago" },
  { role: "ai", message: "Based on current form and historical data, Max Verstappen has the highest win probability at 72%. He has won 4 of the last 5 races and shows consistent performance across all track types.", timestamp: "2 min ago" },
  { role: "user", message: "What about Lewis Hamilton's chances?", timestamp: "1 min ago" },
  { role: "ai", message: "Lewis Hamilton has a 38% win probability. While his recent form is improving with Mercedes upgrades, Red Bull's current dominance gives Verstappen the edge. However, Hamilton's experience at this circuit (7 wins) makes him a strong podium contender.", timestamp: "1 min ago" },
];

export function AIAssistant() {
  const [generating, setGenerating] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(chatHistory);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessages = [
      ...messages,
      { role: "user", message: chatInput, timestamp: "Just now" },
      { role: "ai", message: "Based on the latest data analysis, I'm processing your query and will provide insights shortly...", timestamp: "Just now" }
    ];
    
    setMessages(newMessages);
    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#b026ff]">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">AI Prediction Assistant</h1>
          </div>
          <p className="text-[#a1a1b0]">Advanced sports analytics powered by machine learning</p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - AI Insights & Chat */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Analysis Panel */}
            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-[#00d4ff]" />
                  Live AI Analysis
                </h2>
                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#b026ff] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {generating ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Analyzing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Generate AI Insights
                    </span>
                  )}
                </button>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00d4ff]/20">
                      <Brain className="h-5 w-5 text-[#00d4ff]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white mb-2">Next Race Prediction</div>
                      <p className="text-sm text-[#d0d0da] mb-3">
                        Based on the last 5 races, <span className="font-semibold text-[#00d4ff]">Max Verstappen</span> has a <span className="font-semibold text-[#00ff88]">72% probability</span> of finishing on the podium. Red Bull shows dominant form with consistent performance across all conditions.
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <Activity className="h-3 w-3 text-[#00ff88]" />
                          <span className="text-[#a1a1b0]">Confidence: <span className="text-[#00ff88]">92%</span></span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="h-3 w-3 text-[#ffd700]" />
                          <span className="text-[#a1a1b0]">4 consecutive wins</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#ffed4e]/30 bg-[#ffed4e]/5 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffed4e]/20">
                      <AlertCircle className="h-5 w-5 text-[#ffed4e]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white mb-2">Upset Alert</div>
                      <p className="text-sm text-[#d0d0da]">
                        Ferrari's recent upgrades show <span className="font-semibold text-[#ffed4e]">18% performance improvement</span>. Charles Leclerc has a higher-than-expected chance of victory (45%) at this circuit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Trends */}
            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#00d4ff]" />
                Driver Performance Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2b3d" />
                  <XAxis dataKey="race" stroke="#a1a1b0" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#a1a1b0" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2130',
                      border: '1px solid #2a2b3d',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Line type="monotone" dataKey="verstappen" stroke="#00d4ff" strokeWidth={2} name="Verstappen" />
                  <Line type="monotone" dataKey="hamilton" stroke="#00ff88" strokeWidth={2} name="Hamilton" />
                  <Line type="monotone" dataKey="leclerc" stroke="#ff4444" strokeWidth={2} name="Leclerc" />
                  <Line type="monotone" dataKey="perez" stroke="#ffed4e" strokeWidth={2} name="Perez" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Win Probability Chart */}
            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-[#b026ff]" />
                AI Win Probability Rankings
              </h3>
              <div className="space-y-4">
                {winProbability.map((driver, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a2b3d] text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <span className="font-semibold text-white">{driver.driver}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-[#a1a1b0]">Form: <span className="text-[#00d4ff]">{driver.form}%</span></span>
                        <span className="text-lg font-bold text-[#00ff88]">{driver.probability}%</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-[#2a2b3d] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88] transition-all"
                        style={{ width: `${driver.probability}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Strategy Tips & Chat */}
          <div className="space-y-6">
            {/* AI Strategy Tips */}
            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#ffed4e]" />
                AI Strategy Tips
              </h3>
              <div className="space-y-3">
                {aiInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="rounded-lg border p-4"
                    style={{
                      borderColor: `${insight.color}30`,
                      backgroundColor: `${insight.color}08`
                    }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${insight.color}20` }}
                      >
                        <insight.icon className="h-4 w-4" style={{ color: insight.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white mb-1">{insight.title}</div>
                        <p className="text-xs text-[#d0d0da] mb-2">{insight.message}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full bg-[#2a2b3d] overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${insight.confidence}%`,
                                backgroundColor: insight.color
                              }}
                            />
                          </div>
                          <span className="text-xs font-semibold" style={{ color: insight.color }}>
                            {insight.confidence}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparative Radar */}
            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Driver Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#2a2b3d" />
                  <PolarAngleAxis dataKey="category" stroke="#a1a1b0" style={{ fontSize: '11px' }} />
                  <PolarRadiusAxis stroke="#a1a1b0" style={{ fontSize: '10px' }} />
                  <Radar name="Verstappen" dataKey="verstappen" stroke="#00d4ff" fill="#00d4ff" fillOpacity={0.3} />
                  <Radar name="Hamilton" dataKey="hamilton" stroke="#00ff88" fill="#00ff88" fillOpacity={0.3} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2130',
                      border: '1px solid #2a2b3d',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#00d4ff]" />
                  <span className="text-xs text-[#a1a1b0]">Verstappen</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#00ff88]" />
                  <span className="text-xs text-[#a1a1b0]">Hamilton</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Assistant */}
        <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] overflow-hidden">
          <div className="border-b border-[#2a2b3d] bg-[#1f2130] px-6 py-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#00d4ff]" />
              AI Chat Assistant
            </h3>
            <p className="text-sm text-[#a1a1b0] mt-1">Ask me anything about predictions and sports analytics</p>
          </div>
          
          <div className="p-6">
            {/* Chat Messages */}
            <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'ai' && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#b026ff] flex-shrink-0">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      msg.role === 'user'
                        ? 'bg-[#00d4ff]/10 border border-[#00d4ff]/30'
                        : 'bg-[#2a2b3d]'
                    }`}
                  >
                    <p className="text-sm text-white mb-1">{msg.message}</p>
                    <span className="text-xs text-[#a1a1b0]">{msg.timestamp}</span>
                  </div>
                  {msg.role === 'user' && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a2b3d] flex-shrink-0">
                      <span className="text-sm">👤</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about predictions, statistics, or strategies..."
                className="flex-1 rounded-lg border border-[#2a2b3d] bg-[#1f2130] px-4 py-3 text-sm text-white placeholder-[#a1a1b0] focus:border-[#00d4ff] focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="rounded-lg bg-gradient-to-r from-[#00d4ff] to-[#b026ff] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </div>

            {/* Suggested Questions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-[#a1a1b0]">Try asking:</span>
              <button className="rounded-full border border-[#2a2b3d] bg-[#1f2130] px-3 py-1 text-xs text-[#00d4ff] hover:bg-[#2a2b3d] transition-colors">
                "Who will win the next race?"
              </button>
              <button className="rounded-full border border-[#2a2b3d] bg-[#1f2130] px-3 py-1 text-xs text-[#00d4ff] hover:bg-[#2a2b3d] transition-colors">
                "Compare Verstappen vs Hamilton"
              </button>
              <button className="rounded-full border border-[#2a2b3d] bg-[#1f2130] px-3 py-1 text-xs text-[#00d4ff] hover:bg-[#2a2b3d] transition-colors">
                "Best prediction strategy?"
              </button>
            </div>
          </div>
        </div>

        {/* Demo Mode Notice */}
        <div className="mt-6 rounded-xl border border-[#ffed4e]/30 bg-[#ffed4e]/5 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffed4e]/20">
              <AlertCircle className="h-6 w-6 text-[#ffed4e]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white mb-2">Demo AI Predictions</h4>
              <p className="text-sm text-[#d0d0da] mb-4">
                AI predictions are currently in demo mode for learning purposes. Connect your wallet to unlock full AI-powered predictions and earn real blockchain rewards.
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ffed4e] to-[#ffd700] px-6 py-2 text-sm font-semibold text-[#0a0b14] hover:opacity-90 transition-opacity"
              >
                <Sparkles className="h-4 w-4" />
                Connect Wallet to Earn Rewards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
