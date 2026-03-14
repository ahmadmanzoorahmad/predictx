import { useState } from "react";
import { X, Trophy, Sparkles, Lock } from "lucide-react";
import { NFTCardData } from "./NFTCard";
import { motion, AnimatePresence } from "motion/react";

interface DemoPredictionRewardProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectWallet: () => void;
  nftReward: NFTCardData;
}

export function DemoPredictionReward({
  isOpen,
  onClose,
  onConnectWallet,
  nftReward,
}: DemoPredictionRewardProps) {
  if (!isOpen) return null;

  const rarityColors = {
    Common: "#6b7280",
    Rare: "#00d4ff",
    Epic: "#c946ff",
    Legendary: "#ffed4e",
  };

  const rarityColor = rarityColors[nftReward.rarity];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-lg rounded-2xl border-2 bg-[#16172a] p-8"
          style={{
            borderColor: rarityColor,
            boxShadow: `0 0 40px ${rarityColor}40`,
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0b14] border border-[#3a3b52] text-white hover:bg-[#1f2139]"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="text-center space-y-6">
            {/* Demo Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffed4e]/10 border border-[#ffed4e] px-4 py-2 mb-2">
              <span className="text-xs font-bold text-[#ffed4e]">DEMO MODE</span>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full border-4"
                  style={{
                    backgroundColor: `${rarityColor}20`,
                    borderColor: rarityColor,
                  }}
                >
                  <Sparkles className="h-12 w-12" style={{ color: rarityColor }} />
                </div>
                {/* Lock overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full backdrop-blur-sm">
                  <Lock className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>

            <div>
              <div className="text-sm text-[#a1a1b0] mb-2">Demo Reward</div>
              <h2 className="text-3xl font-bold text-white mb-3">
                {nftReward.rarity} PredictX Card!
              </h2>
              <p className="text-[#d0d0da]">
                You would have earned this exclusive NFT achievement
              </p>
            </div>

            {/* NFT Preview with Lock Overlay */}
            <div
              className="relative rounded-xl border-2 overflow-hidden"
              style={{ borderColor: rarityColor }}
            >
              <div className="relative">
                <img
                  src={nftReward.image}
                  alt={nftReward.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] via-black/50 to-transparent" />
                
                {/* Lock Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="h-12 w-12 text-white mx-auto mb-2" />
                    <div className="text-sm font-bold text-white">Locked in Demo Mode</div>
                  </div>
                </div>

                <div className="absolute top-3 right-3">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold border-2"
                    style={{
                      backgroundColor: rarityColor,
                      borderColor: rarityColor,
                      color: "#fff",
                    }}
                  >
                    <Trophy className="h-3 w-3" />
                    {nftReward.rarity}
                  </span>
                </div>
              </div>
              <div className="bg-[#0a0b14] p-4">
                <h3 className="text-xl font-bold text-white mb-2">{nftReward.title}</h3>
                <p className="text-sm text-[#d0d0da]">{nftReward.eventName}</p>
              </div>
            </div>

            {/* Info Box */}
            <div className="rounded-xl border-2 border-[#00d4ff] bg-[#00d4ff]/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]">
                  <Trophy className="h-4 w-4 text-[#00d4ff]" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm font-semibold text-white mb-2">
                    Connect Wallet to Earn Real Rewards
                  </div>
                  <p className="text-xs text-[#d0d0da]">
                    In demo mode, predictions are simulated and NFTs cannot be earned. Connect your wallet to:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-[#d0d0da]">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00ff88]" />
                      <span>Mint real NFT achievement cards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00ff88]" />
                      <span>Build your on-chain reputation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00ff88]" />
                      <span>Trade NFTs on the marketplace</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00ff88]" />
                      <span>Compete on global leaderboards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onClose}
                className="rounded-lg border border-[#3a3b52] px-6 py-3 font-semibold text-white hover:bg-[#1f2139] transition-colors"
              >
                Continue Demo
              </button>
              <button
                onClick={onConnectWallet}
                className="rounded-lg px-6 py-3 font-bold text-white transition-colors"
                style={{ backgroundColor: rarityColor }}
              >
                Connect Wallet
              </button>
            </div>

            <p className="text-xs text-[#a1a1b0]">
              Try more predictions in demo mode or connect to earn real rewards
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
