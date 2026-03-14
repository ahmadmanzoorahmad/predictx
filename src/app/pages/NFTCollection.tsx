import { useState } from "react";
import { Trophy, TrendingUp, Award, Filter, ExternalLink, ShoppingBag, Wallet as WalletIcon } from "lucide-react";
import { NFTCard, NFTCardData, NFTRarity } from "../components/NFTCard";
import { NFTDetailModal } from "../components/NFTDetailModal";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Link } from "react-router";

// Mock NFT Data
const mockNFTs: NFTCardData[] = [
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
    price: 2.5,
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
    price: 1.2,
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
    price: 0.8,
  },
  {
    id: "NFT-004",
    title: "Clean Sheet Champion",
    eventName: "Arsenal vs Chelsea",
    eventDate: "2026-03-08",
    username: "RacerPro",
    walletAddress: "0x7a3f...8d2c",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "football",
    description: "Predicted 0-0 draw perfectly",
    price: 0.6,
  },
  {
    id: "NFT-005",
    title: "Early Bird Winner",
    eventName: "Saudi Arabian GP",
    eventDate: "2026-03-12",
    username: "RacerPro",
    walletAddress: "0x7a3f...8d2c",
    rarity: "Common",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Predicted race winner correctly",
    price: 0.3,
  },
  {
    id: "NFT-006",
    title: "Corner Kick King",
    eventName: "Barcelona vs Real Madrid",
    eventDate: "2026-03-15",
    username: "RacerPro",
    walletAddress: "0x7a3f...8d2c",
    rarity: "Common",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "football",
    description: "Predicted total corners correctly",
    price: 0.2,
  },
];

const rarityData = [
  { name: "Legendary", value: 1, color: "#ffed4e" },
  { name: "Epic", value: 1, color: "#c946ff" },
  { name: "Rare", value: 2, color: "#00d4ff" },
  { name: "Common", value: 2, color: "#6b7280" },
];

type SortOption = "newest" | "value" | "rarity";

export function NFTCollection() {
  const [rarityFilter, setRarityFilter] = useState<NFTRarity | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [selectedNFT, setSelectedNFT] = useState<NFTCardData | null>(null);

  const filteredNFTs = mockNFTs.filter((nft) => 
    rarityFilter === "all" || nft.rarity === rarityFilter
  );

  const totalValue = mockNFTs.reduce((sum, nft) => sum + (nft.price || 0), 0);

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">My NFT Collection</h1>
          <p className="text-[#d0d0da]">Your earned achievement NFTs</p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="rounded-xl border-2 border-[#ffed4e] bg-[#16172a] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffed4e]/20">
                <Trophy className="h-6 w-6 text-[#ffed4e]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{mockNFTs.length}</div>
                <div className="text-sm text-[#d0d0da]">Total NFTs</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-[#00d4ff] bg-[#16172a] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/20">
                <TrendingUp className="h-6 w-6 text-[#00d4ff]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{totalValue.toFixed(1)}</div>
                <div className="text-sm text-[#d0d0da]">BNB Value</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-[#c946ff] bg-[#16172a] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#c946ff]/20">
                <Award className="h-6 w-6 text-[#c946ff]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1</div>
                <div className="text-sm text-[#d0d0da]">Legendary</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6b7280]/20">
                <Trophy className="h-6 w-6 text-[#6b7280]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">82%</div>
                <div className="text-sm text-[#d0d0da]">Completion</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Rarity Distribution Chart */}
          <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
            <h3 className="text-xl font-bold mb-6 text-white">Rarity Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={rarityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {rarityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {rarityData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[#d0d0da]">{item.name}</span>
                  </div>
                  <span className="text-white font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Achievement */}
          <div className="lg:col-span-2 rounded-xl border-2 border-[#ffed4e] bg-[#16172a] p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Featured Achievement</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={mockNFTs[0].image}
                  alt={mockNFTs[0].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#ffed4e]/90 text-[#0a0b14] border-2 border-[#ffed4e] px-3 py-1 text-xs font-bold backdrop-blur-sm">
                    <Trophy className="h-3 w-3" />
                    Legendary
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#ffed4e] mb-2">{mockNFTs[0].title}</h4>
                  <p className="text-sm text-[#d0d0da]">{mockNFTs[0].description}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a1a1b0]">Event</span>
                    <span className="text-white font-semibold">{mockNFTs[0].eventName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a1a1b0]">Date</span>
                    <span className="text-white font-semibold">{mockNFTs[0].eventDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a1a1b0]">Value</span>
                    <span className="text-[#ffed4e] font-bold">{mockNFTs[0].price} BNB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-[#d0d0da]" />
            <span className="text-sm font-semibold text-white">Filter by Rarity:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setRarityFilter("all")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                rarityFilter === "all"
                  ? "bg-[#ffed4e] text-white"
                  : "border border-[#3a3b52] bg-[#16172a] text-white hover:bg-[#1f2139]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setRarityFilter("Legendary")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                rarityFilter === "Legendary"
                  ? "bg-[#ffed4e] text-white"
                  : "border border-[#ffed4e] bg-[#16172a] text-[#ffed4e] hover:bg-[#ffed4e]/10"
              }`}
            >
              Legendary
            </button>
            <button
              onClick={() => setRarityFilter("Epic")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                rarityFilter === "Epic"
                  ? "bg-[#c946ff] text-white"
                  : "border border-[#c946ff] bg-[#16172a] text-[#c946ff] hover:bg-[#c946ff]/10"
              }`}
            >
              Epic
            </button>
            <button
              onClick={() => setRarityFilter("Rare")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                rarityFilter === "Rare"
                  ? "bg-[#00d4ff] text-white"
                  : "border border-[#00d4ff] bg-[#16172a] text-[#00d4ff] hover:bg-[#00d4ff]/10"
              }`}
            >
              Rare
            </button>
            <button
              onClick={() => setRarityFilter("Common")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                rarityFilter === "Common"
                  ? "bg-[#6b7280] text-white"
                  : "border border-[#6b7280] bg-[#16172a] text-[#6b7280] hover:bg-[#6b7280]/10"
              }`}
            >
              Common
            </button>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
          {filteredNFTs.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              onClick={() => setSelectedNFT(nft)}
              showPrice={true}
            />
          ))}
        </div>

        {/* Info Banner */}
        <div className="rounded-xl border-2 border-[#00d4ff] bg-[#00d4ff]/5 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/20">
                <ExternalLink className="h-6 w-6 text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Trade Your NFTs</h3>
                <p className="text-sm text-[#d0d0da]">
                  Visit the marketplace to buy, sell, or trade achievement NFTs
                </p>
              </div>
            </div>
            <Link
              to="/nft-marketplace"
              className="rounded-lg bg-[#00d4ff] px-6 py-3 font-bold text-white hover:bg-[#00bddf] transition-colors whitespace-nowrap"
            >
              Go to Marketplace
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-xl border border-[#3a3b52] bg-[#16172a] p-6 hover:bg-[#1a1b2e] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffed4e]/20">
                <ShoppingBag className="h-5 w-5 text-[#ffed4e]" />
              </div>
              <h4 className="font-bold text-white">List NFTs</h4>
            </div>
            <p className="text-sm text-[#d0d0da] mb-4">
              Select NFTs from your collection and list them on the marketplace
            </p>
            <button className="text-sm font-semibold text-[#ffed4e] hover:underline">
              Start Listing →
            </button>
          </div>

          <div className="rounded-xl border border-[#3a3b52] bg-[#16172a] p-6 hover:bg-[#1a1b2e] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c946ff]/20">
                <WalletIcon className="h-5 w-5 text-[#c946ff]" />
              </div>
              <h4 className="font-bold text-white">Transfer NFTs</h4>
            </div>
            <p className="text-sm text-[#d0d0da] mb-4">
              Send NFTs to another wallet address or gift to friends
            </p>
            <button className="text-sm font-semibold text-[#c946ff] hover:underline">
              Transfer Now →
            </button>
          </div>

          <div className="rounded-xl border border-[#3a3b52] bg-[#16172a] p-6 hover:bg-[#1a1b2e] transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00d4ff]/20">
                <Trophy className="h-5 w-5 text-[#00d4ff]" />
              </div>
              <h4 className="font-bold text-white">Earn More NFTs</h4>
            </div>
            <p className="text-sm text-[#d0d0da] mb-4">
              Make predictions on upcoming events to earn new achievement NFTs
            </p>
            <Link
              to="/predictions"
              className="text-sm font-semibold text-[#00d4ff] hover:underline"
            >
              View Predictions →
            </Link>
          </div>
        </div>
      </div>
      {selectedNFT && (
        <NFTDetailModal
          nft={selectedNFT}
          onClose={() => setSelectedNFT(null)}
          isOwned={true}
        />
      )}
    </div>
  );
}