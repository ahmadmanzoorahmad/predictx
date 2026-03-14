import { useState } from "react";
import { Search, Filter, TrendingUp, Clock, DollarSign } from "lucide-react";
import { NFTCard, NFTCardData, NFTRarity } from "../components/NFTCard";
import { NFTDetailModal } from "../components/NFTDetailModal";

// Mock Marketplace NFT Data
const marketplaceNFTs: NFTCardData[] = [
  {
    id: "MKT-001",
    title: "Perfect Podium Prediction",
    eventName: "Monaco Grand Prix",
    eventDate: "2026-03-28",
    username: "CryptoRacer",
    walletAddress: "0x9b4f...3e1a",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Correctly predicted all three podium finishers in the correct order",
    price: 3.2,
    owner: "CryptoRacer",
  },
  {
    id: "MKT-002",
    title: "Penalty Kick Prophet",
    eventName: "PSG vs Bayern Munich",
    eventDate: "2026-03-10",
    username: "FootballKing",
    walletAddress: "0x2c8a...7d9f",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "football",
    description: "Predicted penalty shootout outcome perfectly",
    price: 1.8,
    owner: "FootballKing",
  },
  {
    id: "MKT-003",
    title: "Pole Position Master",
    eventName: "Belgian Grand Prix",
    eventDate: "2026-03-18",
    username: "SpeedDemon",
    walletAddress: "0x5f1c...4b2e",
    rarity: "Epic",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Successfully predicted pole position and race winner",
    price: 1.5,
    owner: "SpeedDemon",
  },
  {
    id: "MKT-004",
    title: "Golden Boot Winner",
    eventName: "World Cup Finals",
    eventDate: "2026-03-22",
    username: "GoalHunter",
    walletAddress: "0x8d3b...9c7a",
    rarity: "Legendary",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "football",
    description: "Predicted tournament top scorer before first match",
    price: 4.5,
    owner: "GoalHunter",
  },
  {
    id: "MKT-005",
    title: "Safety Car Sage",
    eventName: "Singapore Grand Prix",
    eventDate: "2026-03-16",
    username: "TrackMaster",
    walletAddress: "0x1a7e...6f4d",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Predicted safety car deployment and race outcome",
    price: 0.9,
    owner: "TrackMaster",
  },
  {
    id: "MKT-006",
    title: "Upset Predictor",
    eventName: "Juventus vs Inter Milan",
    eventDate: "2026-03-14",
    username: "UnderdogFan",
    walletAddress: "0x4c9d...2e8b",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "football",
    description: "Correctly predicted major upset victory",
    price: 1.1,
    owner: "UnderdogFan",
  },
  {
    id: "MKT-007",
    title: "Overtake Oracle",
    eventName: "British Grand Prix",
    eventDate: "2026-03-20",
    username: "RaceWizard",
    walletAddress: "0x7b2f...5a3c",
    rarity: "Common",
    image: "https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "f1",
    description: "Predicted successful overtake maneuver",
    price: 0.4,
    owner: "RaceWizard",
  },
  {
    id: "MKT-008",
    title: "Corner Count King",
    eventName: "Manchester Derby",
    eventDate: "2026-03-11",
    username: "StatsPro",
    walletAddress: "0x3e6a...8d1f",
    rarity: "Common",
    image: "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sportType: "football",
    description: "Accurately predicted total corner kicks",
    price: 0.3,
    owner: "StatsPro",
  },
];

const featuredNFTs = marketplaceNFTs.slice(0, 3);
const recentlySold = [
  { title: "Championship Winner", price: 5.2, time: "2h ago" },
  { title: "Triple Crown Master", price: 3.8, time: "5h ago" },
  { title: "Fastest Qualifier", price: 2.1, time: "8h ago" },
];

type SportFilter = "all" | "f1" | "football";
type PriceFilter = "all" | "under1" | "1to2" | "over2";

export function NFTMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sportFilter, setSportFilter] = useState<SportFilter>("all");
  const [rarityFilter, setRarityFilter] = useState<NFTRarity | "all">("all");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [selectedNFT, setSelectedNFT] = useState<NFTCardData | null>(null);

  const filteredNFTs = marketplaceNFTs.filter((nft) => {
    const matchesSearch = nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         nft.eventName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = sportFilter === "all" || nft.sportType === sportFilter;
    const matchesRarity = rarityFilter === "all" || nft.rarity === rarityFilter;
    const matchesPrice = priceFilter === "all" ||
                        (priceFilter === "under1" && (nft.price || 0) < 1) ||
                        (priceFilter === "1to2" && (nft.price || 0) >= 1 && (nft.price || 0) <= 2) ||
                        (priceFilter === "over2" && (nft.price || 0) > 2);
    
    return matchesSearch && matchesSport && matchesRarity && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#0a0b14] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">NFT Marketplace</h1>
          <p className="text-[#d0d0da]">Buy and sell achievement NFTs from top predictors</p>
        </div>

        {/* Featured Cards */}
        <div className="mb-8 rounded-xl border-2 border-[#ffed4e] bg-[#16172a] p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-[#ffed4e]" />
            <h2 className="text-2xl font-bold text-white">Featured Rare Cards</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} showPrice={true} onClick={() => setSelectedNFT(nft)} />
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 mb-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-5 w-5 text-[#d0d0da]" />
                <h3 className="font-bold text-white">Search</h3>
              </div>
              <input
                type="text"
                placeholder="Search NFTs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[#3a3b52] bg-[#0a0b14] px-4 py-2 text-sm text-white placeholder-[#6b7280] focus:border-[#00d4ff] focus:outline-none"
              />
            </div>

            {/* Sport Filter */}
            <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-[#d0d0da]" />
                <h3 className="font-bold text-white">Sport Type</h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setSportFilter("all")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    sportFilter === "all"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  All Sports
                </button>
                <button
                  onClick={() => setSportFilter("f1")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    sportFilter === "f1"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  🏎️ Formula 1
                </button>
                <button
                  onClick={() => setSportFilter("football")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    sportFilter === "football"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  ⚽ Football
                </button>
              </div>
            </div>

            {/* Rarity Filter */}
            <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
              <h3 className="font-bold text-white mb-4">Rarity</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setRarityFilter("all")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    rarityFilter === "all"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  All Rarities
                </button>
                <button
                  onClick={() => setRarityFilter("Legendary")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    rarityFilter === "Legendary"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#ffed4e] text-[#ffed4e] hover:bg-[#ffed4e]/10"
                  }`}
                >
                  Legendary
                </button>
                <button
                  onClick={() => setRarityFilter("Epic")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    rarityFilter === "Epic"
                      ? "bg-[#c946ff] text-white"
                      : "border border-[#c946ff] text-[#c946ff] hover:bg-[#c946ff]/10"
                  }`}
                >
                  Epic
                </button>
                <button
                  onClick={() => setRarityFilter("Rare")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    rarityFilter === "Rare"
                      ? "bg-[#00d4ff] text-white"
                      : "border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10"
                  }`}
                >
                  Rare
                </button>
                <button
                  onClick={() => setRarityFilter("Common")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    rarityFilter === "Common"
                      ? "bg-[#6b7280] text-white"
                      : "border border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280]/10"
                  }`}
                >
                  Common
                </button>
              </div>
            </div>

            {/* Price Filter */}
            <div className="rounded-xl border-2 border-[#3a3b52] bg-[#16172a] p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-5 w-5 text-[#d0d0da]" />
                <h3 className="font-bold text-white">Price Range</h3>
              </div>
              <div className="space-y-2">
                <button
                  onClick={() => setPriceFilter("all")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    priceFilter === "all"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  All Prices
                </button>
                <button
                  onClick={() => setPriceFilter("under1")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    priceFilter === "under1"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  Under 1 BNB
                </button>
                <button
                  onClick={() => setPriceFilter("1to2")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    priceFilter === "1to2"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  1-2 BNB
                </button>
                <button
                  onClick={() => setPriceFilter("over2")}
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-left transition-colors ${
                    priceFilter === "over2"
                      ? "bg-[#ffed4e] text-white"
                      : "border border-[#3a3b52] text-white hover:bg-[#1f2139]"
                  }`}
                >
                  Over 2 BNB
                </button>
              </div>
            </div>

            {/* Recently Sold */}
            <div className="rounded-xl border-2 border-[#00d4ff] bg-[#16172a] p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-[#00d4ff]" />
                <h3 className="font-bold text-white">Recently Sold</h3>
              </div>
              <div className="space-y-3">
                {recentlySold.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-sm text-white font-semibold">{item.title}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#a1a1b0]">{item.time}</span>
                      <span className="text-sm font-bold text-[#00ff88]">{item.price} BNB</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                {filteredNFTs.length} NFTs Available
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredNFTs.map((nft) => (
                <NFTCard key={nft.id} nft={nft} showPrice={true} onClick={() => setSelectedNFT(nft)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedNFT && (
        <NFTDetailModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />
      )}
    </div>
  );
}