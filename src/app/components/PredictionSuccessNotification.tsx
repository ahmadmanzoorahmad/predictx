import { useState } from "react";
import { X, Trophy, Sparkles } from "lucide-react";
import { NFTCardData } from "./NFTCard";
import { MintingFlowModal } from "./MintingFlowModal";
import { motion, AnimatePresence } from "motion/react";

interface PredictionSuccessNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  nftReward: NFTCardData;
}

export function PredictionSuccessNotification({
  isVisible,
  onClose,
  nftReward,
}: PredictionSuccessNotificationProps) {
  const [showMintingFlow, setShowMintingFlow] = useState(false);

  const handleClaimReward = () => {
    setShowMintingFlow(true);
  };

  const rarityColors = {
    Common: "#6b7280",
    Rare: "#00d4ff",
    Epic: "#c946ff",
    Legendary: "#ffed4e",
  };

  const rarityColor = rarityColors[nftReward.rarity];

  return (
    <>
      <AnimatePresence>
        {isVisible && !showMintingFlow && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-4 right-4 z-40 w-full max-w-md"
          >
            <div
              className="rounded-xl border-2 bg-[#16172a] p-6 shadow-2xl"
              style={{
                borderColor: rarityColor,
                boxShadow: `0 0 30px ${rarityColor}40`,
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#0a0b14] border border-[#3a3b52] text-white hover:bg-[#1f2139]"
              >
                <X className="h-3 w-3" />
              </button>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2"
                    style={{
                      backgroundColor: `${rarityColor}20`,
                      borderColor: rarityColor,
                    }}
                  >
                    <Sparkles className="h-6 w-6" style={{ color: rarityColor }} />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="h-4 w-4 text-[#00ff88]" />
                      <span className="text-sm font-semibold text-[#00ff88]">
                        Prediction Correct!
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      You Earned an NFT Reward
                    </h3>
                    <p className="text-sm text-[#d0d0da]">
                      Claim your <span style={{ color: rarityColor }} className="font-bold">{nftReward.rarity}</span> achievement card now
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-lg border overflow-hidden"
                  style={{ borderColor: rarityColor }}
                >
                  <div className="relative h-24 bg-gradient-to-br from-[#0a0b14] to-[#16172a]">
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <div className="flex-1">
                        <div className="text-xs text-[#a1a1b0] mb-1">Achievement</div>
                        <div className="text-sm font-bold text-white mb-1">
                          {nftReward.title}
                        </div>
                        <div className="text-xs text-[#d0d0da]">{nftReward.eventName}</div>
                      </div>
                      <img
                        src={nftReward.image}
                        alt={nftReward.title}
                        className="h-20 w-20 rounded-lg object-cover border-2"
                        style={{ borderColor: rarityColor }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClaimReward}
                  className="w-full rounded-lg px-4 py-3 font-bold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: rarityColor }}
                >
                  Claim NFT Reward →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MintingFlowModal
        isOpen={showMintingFlow}
        onClose={() => {
          setShowMintingFlow(false);
          onClose();
        }}
        nftData={nftReward}
      />
    </>
  );
}
