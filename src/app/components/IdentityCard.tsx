import { Trophy, Target, Award, TrendingUp, Shield, Zap } from "lucide-react";

export interface IdentityData {
  username: string;
  avatar?: string;
  walletAddress: string;
  reputationScore: number;
  totalPredictions: number;
  accuracy: number;
  seasonRank: number;
  nftCount: number;
  skillLevel: "Novice" | "Intermediate" | "Advanced" | "Expert" | "Master";
  topAchievements: string[];
}

interface IdentityCardProps {
  identity: IdentityData;
  variant?: "compact" | "full";
}

const skillLevelConfig = {
  Novice: { color: "#6b7280", minScore: 0, maxScore: 200 },
  Intermediate: { color: "#00d4ff", minScore: 200, maxScore: 400 },
  Advanced: { color: "#c946ff", minScore: 400, maxScore: 600 },
  Expert: { color: "#ffed4e", minScore: 600, maxScore: 800 },
  Master: { color: "#ff4444", minScore: 800, maxScore: 1000 },
};

export function IdentityCard({ identity, variant = "full" }: IdentityCardProps) {
  const skillConfig = skillLevelConfig[identity.skillLevel];
  const reputationProgress = ((identity.reputationScore - skillConfig.minScore) / (skillConfig.maxScore - skillConfig.minScore)) * 100;

  if (variant === "compact") {
    return (
      <div className="rounded-xl border-2 border-[#3a3b52] bg-gradient-to-br from-[#16172a] to-[#0a0b14] p-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            {identity.avatar ? (
              <img
                src={identity.avatar}
                alt={identity.username}
                className="h-16 w-16 rounded-full object-cover border-2"
                style={{ borderColor: skillConfig.color }}
              />
            ) : (
              <div
                className="h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-2"
                style={{ borderColor: skillConfig.color, backgroundColor: `${skillConfig.color}20` }}
              >
                {identity.username.charAt(0).toUpperCase()}
              </div>
            )}
            <div
              className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center border-2 border-[#0a0b14]"
              style={{ backgroundColor: skillConfig.color }}
            >
              <Shield className="h-3 w-3 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">{identity.username}</h3>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: `${skillConfig.color}20`, color: skillConfig.color }}
              >
                {identity.skillLevel}
              </span>
            </div>
            <div className="text-xs text-[#a1a1b0] font-mono mb-2">{identity.walletAddress}</div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <Trophy className="h-3 w-3 text-[#ffed4e]" />
                <span className="text-white font-semibold">{identity.reputationScore}</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="h-3 w-3 text-[#00d4ff]" />
                <span className="text-white font-semibold">{identity.accuracy}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border-2 bg-gradient-to-br from-[#16172a] via-[#1a1b2e] to-[#0a0b14] p-8 relative overflow-hidden"
      style={{ borderColor: skillConfig.color }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${skillConfig.color} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glow Effect */}
      <div
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: skillConfig.color }}
      />

      <div className="relative space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {identity.avatar ? (
              <img
                src={identity.avatar}
                alt={identity.username}
                className="h-20 w-20 rounded-full object-cover border-4"
                style={{ borderColor: skillConfig.color }}
              />
            ) : (
              <div
                className="h-20 w-20 rounded-full flex items-center justify-center text-3xl font-bold border-4"
                style={{ borderColor: skillConfig.color, backgroundColor: `${skillConfig.color}20` }}
              >
                {identity.username.charAt(0).toUpperCase()}
              </div>
            )}
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white">{identity.username}</h2>
                <div
                  className="flex items-center gap-1 px-3 py-1 rounded-full border-2"
                  style={{ borderColor: skillConfig.color, backgroundColor: `${skillConfig.color}20` }}
                >
                  <Shield className="h-4 w-4" style={{ color: skillConfig.color }} />
                  <span className="text-sm font-bold" style={{ color: skillConfig.color }}>
                    {identity.skillLevel}
                  </span>
                </div>
              </div>
              <div className="text-sm text-[#a1a1b0] font-mono">{identity.walletAddress}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-[#a1a1b0] mb-1">Season Rank</div>
            <div className="text-3xl font-bold" style={{ color: skillConfig.color }}>
              #{identity.seasonRank}
            </div>
          </div>
        </div>

        {/* Reputation Score */}
        <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${skillConfig.color}20` }}
              >
                <Zap className="h-6 w-6" style={{ color: skillConfig.color }} />
              </div>
              <div>
                <div className="text-sm text-[#a1a1b0]">PredictX Reputation Score</div>
                <div className="text-3xl font-bold text-white">{identity.reputationScore}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-[#a1a1b0]">Next Level</div>
              <div className="text-lg font-bold" style={{ color: skillConfig.color }}>
                {skillConfig.maxScore}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-[#a1a1b0]">
              <span>{identity.skillLevel}</span>
              <span>{reputationProgress.toFixed(0)}% to next level</span>
            </div>
            <div className="h-3 rounded-full bg-[#16172a] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${reputationProgress}%`,
                  backgroundColor: skillConfig.color,
                  boxShadow: `0 0 10px ${skillConfig.color}80`
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 text-center">
            <Target className="h-5 w-5 text-[#00d4ff] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{identity.totalPredictions}</div>
            <div className="text-xs text-[#a1a1b0]">Predictions</div>
          </div>

          <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 text-center">
            <TrendingUp className="h-5 w-5 text-[#00ff88] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{identity.accuracy}%</div>
            <div className="text-xs text-[#a1a1b0]">Accuracy</div>
          </div>

          <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 text-center">
            <Award className="h-5 w-5 text-[#c946ff] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{identity.nftCount}</div>
            <div className="text-xs text-[#a1a1b0]">NFTs</div>
          </div>

          <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 text-center">
            <Trophy className="h-5 w-5 text-[#ffed4e] mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">#{identity.seasonRank}</div>
            <div className="text-xs text-[#a1a1b0]">Rank</div>
          </div>
        </div>

        {/* Top Achievements */}
        {identity.topAchievements.length > 0 && (
          <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
            <div className="text-sm font-semibold text-white mb-3">Top Achievements</div>
            <div className="flex flex-wrap gap-2">
              {identity.topAchievements.map((achievement, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-full bg-[#16172a] border border-[#3a3b52] px-3 py-1 text-xs text-[#d0d0da]"
                >
                  <Trophy className="h-3 w-3 text-[#ffed4e]" />
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* PredictX Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#a1a1b0]">
            <span>⚡</span>
            <span>PredictX Digital Identity</span>
            <span>⚡</span>
          </div>
        </div>
      </div>
    </div>
  );
}
