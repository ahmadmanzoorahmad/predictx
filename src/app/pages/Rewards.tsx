import { Coins, Trophy, Gift, Sparkles } from "lucide-react";

const nftBadges = [
  {
    id: 1,
    name: "F1 Master",
    description: "Earned by achieving 90%+ accuracy in 10 F1 races",
    rarity: "Legendary",
    image: "🏎️",
    earned: true,
  },
  {
    id: 2,
    name: "Football Oracle",
    description: "Earned by predicting 15 correct match outcomes",
    rarity: "Epic",
    image: "⚽",
    earned: true,
  },
  {
    id: 3,
    name: "Podium Predictor",
    description: "Earned by predicting 5 correct podium finishes",
    rarity: "Rare",
    image: "🏆",
    earned: true,
  },
  {
    id: 4,
    name: "First Blood",
    description: "Earned by making your first correct prediction",
    rarity: "Common",
    image: "⭐",
    earned: true,
  },
  {
    id: 5,
    name: "Season Champion",
    description: "Finish in top 10 of seasonal leaderboard",
    rarity: "Legendary",
    image: "👑",
    earned: false,
  },
  {
    id: 6,
    name: "Consistency King",
    description: "Maintain 80%+ accuracy for 30 days",
    rarity: "Epic",
    image: "💎",
    earned: false,
  },
];

const rewardHistory = [
  { id: 1, type: "coins", amount: 150, reason: "Monaco GP - Correct prediction", date: "2026-03-03" },
  { id: 2, type: "nft", name: "Football Oracle", reason: "15 correct match predictions", date: "2026-03-02" },
  { id: 3, type: "coins", amount: 200, reason: "Weekly leaderboard bonus", date: "2026-03-01" },
  { id: 4, type: "coins", amount: 100, reason: "Arsenal vs Chelsea - Correct score", date: "2026-02-28" },
  { id: 5, type: "nft", name: "Podium Predictor", reason: "5 correct podium finishes", date: "2026-02-25" },
];

const seasonRewards = [
  { rank: "1-10", coins: 10000, nft: "Season Champion Trophy", color: "from-[#ffd700] to-[#ffed4e]" },
  { rank: "11-50", coins: 5000, nft: "Elite Predictor Badge", color: "from-[#c0c0c0] to-[#e8e8e8]" },
  { rank: "51-100", coins: 2500, nft: "Top 100 Achievement", color: "from-[#cd7f32] to-[#d4a574]" },
  { rank: "101-500", coins: 1000, nft: "Rising Star Badge", color: "from-[#00d4ff] to-[#00e8ff]" },
];

export function Rewards() {
  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Rewards</h1>
          <p className="text-[#a1a1b0]">Your earnings, achievements, and NFT collection</p>
        </div>

        {/* Coins Balance */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <div className="md:col-span-2 rounded-xl border border-[#2a2b3d] bg-gradient-to-br from-[#151621] to-[#1f2130] p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ffd700]/10 via-[#00d4ff]/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd700] to-[#00d4ff]">
                  <Coins className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#a1a1b0]">Total Balance</div>
                  <div className="text-4xl font-bold">2,847 Coins</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-[#151621]/50 backdrop-blur-sm p-4 border border-[#2a2b3d]">
                  <div className="text-2xl font-bold text-[#00ff88]">+450</div>
                  <div className="text-xs text-[#a1a1b0]">This Week</div>
                </div>
                <div className="rounded-lg bg-[#151621]/50 backdrop-blur-sm p-4 border border-[#2a2b3d]">
                  <div className="text-2xl font-bold text-[#00d4ff]">1,820</div>
                  <div className="text-xs text-[#a1a1b0]">This Month</div>
                </div>
                <div className="rounded-lg bg-[#151621]/50 backdrop-blur-sm p-4 border border-[#2a2b3d]">
                  <div className="text-2xl font-bold text-[#b026ff]">8,450</div>
                  <div className="text-xs text-[#a1a1b0]">All Time</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#b026ff]/10">
                <Trophy className="h-6 w-6 text-[#b026ff]" />
              </div>
              <div>
                <div className="text-sm text-[#a1a1b0]">NFT Badges</div>
                <div className="text-3xl font-bold">4</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-[#a1a1b0]">Collection Progress</div>
              <div className="h-2 rounded-full bg-[#2a2b3d] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#ffd700] to-[#b026ff] w-2/3" />
              </div>
              <div className="text-xs text-[#a1a1b0]">4 of 6 earned</div>
            </div>
          </div>
        </div>

        {/* NFT Collection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-[#ffd700]" />
              NFT Achievement Badges
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nftBadges.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-xl border overflow-hidden transition-all ${
                  badge.earned
                    ? "border-[#00d4ff] bg-gradient-to-br from-[#151621] to-[#1f2130] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                    : "border-[#2a2b3d] bg-[#151621] opacity-60"
                }`}
              >
                <div className={`p-6 ${badge.earned ? "bg-gradient-to-br from-[#1f2130] to-[#151621]" : "bg-[#1f2130]"}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl">{badge.image}</div>
                    <div
                      className={`rounded-full px-3 py-1 text-xs ${
                        badge.rarity === "Legendary"
                          ? "bg-[#ffd700]/20 text-[#ffd700]"
                          : badge.rarity === "Epic"
                          ? "bg-[#b026ff]/20 text-[#b026ff]"
                          : badge.rarity === "Rare"
                          ? "bg-[#00d4ff]/20 text-[#00d4ff]"
                          : "bg-[#a1a1b0]/20 text-[#a1a1b0]"
                      }`}
                    >
                      {badge.rarity}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{badge.name}</h3>
                  <p className="text-sm text-[#a1a1b0] mb-4">{badge.description}</p>
                  {badge.earned ? (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#00ff88]/10 px-3 py-1 text-xs text-[#00ff88]">
                      ✓ Earned
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#a1a1b0]/10 px-3 py-1 text-xs text-[#a1a1b0]">
                      🔒 Locked
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Season Rewards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Season Rewards</h2>
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-[#2a2b3d] bg-[#1f2130]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-[#a1a1b0]">Rank Range</th>
                    <th className="px-6 py-4 text-left text-sm text-[#a1a1b0]">Coin Reward</th>
                    <th className="px-6 py-4 text-left text-sm text-[#a1a1b0]">NFT Reward</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2b3d]">
                  {seasonRewards.map((reward, index) => (
                    <tr key={index} className="hover:bg-[#1f2130] transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-semibold">{reward.rank}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Coins className="h-5 w-5 text-[#ffd700]" />
                          <span className="font-semibold">{reward.coins.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${reward.color} px-3 py-1 text-sm text-[#0a0b14] font-semibold`}>
                          <Trophy className="h-4 w-4" />
                          {reward.nft}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Reward History */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Rewards</h2>
          <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] overflow-hidden">
            <div className="divide-y divide-[#2a2b3d]">
              {rewardHistory.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between p-6 hover:bg-[#1f2130] transition-colors">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                        reward.type === "coins" ? "bg-[#ffd700]/10" : "bg-[#b026ff]/10"
                      }`}
                    >
                      {reward.type === "coins" ? (
                        <Coins className="h-6 w-6 text-[#ffd700]" />
                      ) : (
                        <Gift className="h-6 w-6 text-[#b026ff]" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold mb-1">
                        {reward.type === "coins" ? `+${reward.amount} Coins` : reward.name}
                      </div>
                      <div className="text-sm text-[#a1a1b0]">{reward.reason}</div>
                    </div>
                  </div>
                  <div className="text-sm text-[#a1a1b0]">{reward.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-8 rounded-xl border border-[#00d4ff] bg-[#00d4ff]/5 p-6">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/10">
              <Sparkles className="h-6 w-6 text-[#00d4ff]" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">How to Earn More Rewards</h3>
              <p className="text-sm text-[#a1a1b0]">
                Make accurate predictions to earn coins. Unlock NFT badges by completing specific
                achievements. Finish in top rankings at season end for exclusive rewards on the
                blockchain!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}