import { Trophy, Calendar, User, Wallet } from "lucide-react";

export type NFTRarity = "Common" | "Rare" | "Epic" | "Legendary";

export interface NFTCardData {
  id: string;
  title: string;
  eventName: string;
  eventDate: string;
  username: string;
  walletAddress: string;
  rarity: NFTRarity;
  image: string;
  sportType: "f1" | "football";
  description: string;
  price?: number;
  owner?: string;
}

interface NFTCardProps {
  nft: NFTCardData;
  onClick?: () => void;
  showPrice?: boolean;
}

const rarityConfig = {
  Common: {
    border: "border-[#6b7280]",
    bg: "bg-[#6b7280]/10",
    text: "text-[#9ca3af]",
    glow: "shadow-[0_0_20px_rgba(107,114,128,0.3)]",
  },
  Rare: {
    border: "border-[#00d4ff]",
    bg: "bg-[#00d4ff]/10",
    text: "text-[#00d4ff]",
    glow: "shadow-[0_0_20px_rgba(0,212,255,0.5)]",
  },
  Epic: {
    border: "border-[#c946ff]",
    bg: "bg-[#c946ff]/10",
    text: "text-[#c946ff]",
    glow: "shadow-[0_0_20px_rgba(201,70,255,0.5)]",
  },
  Legendary: {
    border: "border-[#ffed4e]",
    bg: "bg-[#ffed4e]/10",
    text: "text-[#ffed4e]",
    glow: "shadow-[0_0_30px_rgba(255,237,78,0.6)]",
  },
};

export function NFTCard({ nft, onClick, showPrice = false }: NFTCardProps) {
  const config = rarityConfig[nft.rarity];

  return (
    <div
      onClick={onClick}
      className={`relative rounded-xl border-2 ${config.border} bg-[#16172a] overflow-hidden cursor-pointer transition-all hover:scale-105 hover:${config.glow} group`}
    >
      {/* Animated Glow Effect */}
      <div className={`absolute inset-0 ${config.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Rarity Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className={`inline-flex items-center gap-1 rounded-full ${config.bg} ${config.text} border ${config.border} px-3 py-1 text-xs font-bold backdrop-blur-sm`}>
          <Trophy className="h-3 w-3" />
          {nft.rarity}
        </span>
      </div>

      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={nft.image}
          alt={nft.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16172a] via-transparent to-transparent" />
        
        {/* Sport Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-2xl">{nft.sportType === "f1" ? "🏎️" : "⚽"}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-4 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold text-white line-clamp-1">{nft.title}</h3>

        {/* Event Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
            <Trophy className="h-4 w-4 text-[#00d4ff]" />
            <span className="line-clamp-1">{nft.eventName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
            <Calendar className="h-4 w-4 text-[#c946ff]" />
            <span>{nft.eventDate}</span>
          </div>
        </div>

        {/* Owner Info */}
        <div className="pt-3 border-t border-[#3a3b52] space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#a1a1b0]">
            <User className="h-3 w-3" />
            <span>{nft.username}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#a1a1b0]">
            <Wallet className="h-3 w-3" />
            <span className="font-mono">{nft.walletAddress}</span>
          </div>
        </div>

        {/* Price */}
        {showPrice && nft.price && (
          <div className="pt-3 border-t border-[#3a3b52]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#a1a1b0]">Price</span>
              <span className="text-lg font-bold text-[#ffed4e]">{nft.price} BNB</span>
            </div>
          </div>
        )}

        {/* Card ID */}
        <div className="text-xs text-[#6b7280] text-center font-mono">
          #{nft.id}
        </div>
      </div>

      {/* PredictX Logo Watermark */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <span className="text-2xl font-bold">⚡</span>
      </div>
    </div>
  );
}
