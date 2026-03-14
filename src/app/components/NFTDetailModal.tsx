import { X, ExternalLink, History, TrendingUp, Share2 } from "lucide-react";
import { NFTCardData } from "./NFTCard";
import { useState } from "react";
import { SellNFTModal } from "./SellNFTModal";
import { PurchaseFlowModal } from "./PurchaseFlowModal";

interface NFTDetailModalProps {
  nft: NFTCardData | null;
  onClose: () => void;
  isOwned?: boolean;
}

const mockTransactionHistory = [
  { type: "Minted", date: "2026-03-28 15:30", from: "PredictX Platform", to: "0x7a3f...8d2c", price: null },
  { type: "Listed", date: "2026-03-29 10:15", from: "0x7a3f...8d2c", to: "Marketplace", price: 2.5 },
];

export function NFTDetailModal({ nft, onClose, isOwned = false }: NFTDetailModalProps) {
  const [showSellModal, setShowSellModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  if (!nft) return null;

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-[#3a3b52] bg-[#0a0b14]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#16172a] border border-[#3a3b52] text-white hover:bg-[#1f2139] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left: Card Image */}
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#3a3b52]">
              <img
                src={nft.image}
                alt={nft.title}
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4">
                <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm ${
                  nft.rarity === "Legendary"
                    ? "bg-[#ffed4e]/90 text-white border-2 border-[#ffed4e]"
                    : nft.rarity === "Epic"
                    ? "bg-[#c946ff]/90 text-white border-2 border-[#c946ff]"
                    : nft.rarity === "Rare"
                    ? "bg-[#00d4ff]/90 text-white border-2 border-[#00d4ff]"
                    : "bg-[#6b7280]/90 text-white border-2 border-[#6b7280]"
                }`}>
                  {nft.rarity}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center gap-2 rounded-lg border border-[#3a3b52] bg-[#16172a] p-4 hover:bg-[#1f2139] transition-colors">
                <Share2 className="h-5 w-5 text-[#00d4ff]" />
                <span className="text-xs text-white">Share</span>
              </button>
              <button className="flex flex-col items-center gap-2 rounded-lg border border-[#3a3b52] bg-[#16172a] p-4 hover:bg-[#1f2139] transition-colors">
                <ExternalLink className="h-5 w-5 text-[#c946ff]" />
                <span className="text-xs text-white">Blockchain</span>
              </button>
              <button className="flex flex-col items-center gap-2 rounded-lg border border-[#3a3b52] bg-[#16172a] p-4 hover:bg-[#1f2139] transition-colors">
                <TrendingUp className="h-5 w-5 text-[#ffed4e]" />
                <span className="text-xs text-white">Analytics</span>
              </button>
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-[#a1a1b0] mb-2">Achievement NFT</div>
              <h2 className="text-3xl font-bold text-white mb-3">{nft.title}</h2>
              <p className="text-[#d0d0da]">{nft.description}</p>
            </div>

            {/* Owner Info */}
            <div className="rounded-xl border border-[#3a3b52] bg-[#16172a] p-4">
              <div className="text-sm text-[#a1a1b0] mb-2">Current Owner</div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{nft.username}</div>
                  <div className="text-sm text-[#a1a1b0] font-mono">{nft.walletAddress}</div>
                </div>
                <button className="rounded-lg border border-[#00d4ff] bg-[#00d4ff]/10 px-4 py-2 text-sm font-semibold text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-colors">
                  View Profile
                </button>
              </div>
            </div>

            {/* Event Details */}
            <div className="rounded-xl border border-[#3a3b52] bg-[#16172a] p-4 space-y-3">
              <div className="text-sm font-bold text-white mb-3">Event Details</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-[#a1a1b0] mb-1">Event Name</div>
                  <div className="text-sm text-white font-semibold">{nft.eventName}</div>
                </div>
                <div>
                  <div className="text-xs text-[#a1a1b0] mb-1">Event Date</div>
                  <div className="text-sm text-white font-semibold">{nft.eventDate}</div>
                </div>
                <div>
                  <div className="text-xs text-[#a1a1b0] mb-1">Sport Type</div>
                  <div className="text-sm text-white font-semibold">
                    {nft.sportType === "f1" ? "🏎️ Formula 1" : "⚽ Football"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#a1a1b0] mb-1">NFT ID</div>
                  <div className="text-sm text-white font-mono font-semibold">#{nft.id}</div>
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="rounded-xl border-2 border-[#ffed4e] bg-[#ffed4e]/5 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-[#a1a1b0] mb-1">Current Price</div>
                  <div className="text-3xl font-bold text-[#ffed4e]">{nft.price} BNB</div>
                  <div className="text-sm text-[#a1a1b0]">≈ $1,250 USD</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#a1a1b0] mb-1">Market Activity</div>
                  <div className="flex items-center gap-1 text-[#00ff88]">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">+15.5%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {isOwned ? (
                  <>
                    <button 
                      onClick={() => setShowSellModal(true)}
                      className="rounded-lg bg-[#ffed4e] px-6 py-3 font-bold text-white hover:bg-[#ffe01a] transition-colors"
                    >
                      List for Sale
                    </button>
                    <button className="rounded-lg border border-[#ffed4e] bg-transparent px-6 py-3 font-bold text-[#ffed4e] hover:bg-[#ffed4e]/10 transition-colors">
                      Transfer NFT
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => setShowPurchaseModal(true)}
                      className="rounded-lg bg-[#ffed4e] px-6 py-3 font-bold text-white hover:bg-[#ffe01a] transition-colors"
                    >
                      Buy Now
                    </button>
                    <button className="rounded-lg border border-[#ffed4e] bg-transparent px-6 py-3 font-bold text-[#ffed4e] hover:bg-[#ffed4e]/10 transition-colors">
                      Make Offer
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Transaction History */}
            <div className="rounded-xl border border-[#3a3b52] bg-[#16172a] p-4">
              <div className="flex items-center gap-2 mb-4">
                <History className="h-5 w-5 text-[#00d4ff]" />
                <h3 className="font-bold text-white">Transaction History</h3>
              </div>
              <div className="space-y-3">
                {mockTransactionHistory.map((tx, index) => (
                  <div key={index} className="flex items-start justify-between border-b border-[#3a3b52] pb-3 last:border-0">
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{tx.type}</div>
                      <div className="text-xs text-[#a1a1b0]">{tx.date}</div>
                      <div className="text-xs text-[#a1a1b0] font-mono mt-1">
                        {tx.from} → {tx.to}
                      </div>
                    </div>
                    {tx.price && (
                      <div className="text-sm font-bold text-[#ffed4e]">{tx.price} BNB</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modals */}
    {showSellModal && nft && (
      <SellNFTModal
        isOpen={showSellModal}
        onClose={() => setShowSellModal(false)}
        nft={nft}
      />
    )}
    {showPurchaseModal && nft && (
      <PurchaseFlowModal
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        nft={nft}
      />
    )}
    </>
  );
}