import { useState, useEffect } from "react";
import { X, Trophy, Sparkles, CheckCircle, Loader2, ExternalLink } from "lucide-react";
import { NFTCardData, NFTRarity } from "./NFTCard";
import { motion, AnimatePresence } from "motion/react";

interface MintingFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  nftData: NFTCardData;
}

type MintingStep = "result" | "reward" | "confirm" | "minting" | "success";

export function MintingFlowModal({ isOpen, onClose, nftData }: MintingFlowModalProps) {
  const [currentStep, setCurrentStep] = useState<MintingStep>("result");
  const [mintingProgress, setMintingProgress] = useState(0);

  useEffect(() => {
    if (currentStep === "minting") {
      const interval = setInterval(() => {
        setMintingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setCurrentStep("success"), 500);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleClose = () => {
    setCurrentStep("result");
    setMintingProgress(0);
    onClose();
  };

  if (!isOpen) return null;

  const rarityConfig = {
    Common: { color: "#6b7280", glow: "rgba(107,114,128,0.5)" },
    Rare: { color: "#00d4ff", glow: "rgba(0,212,255,0.5)" },
    Epic: { color: "#c946ff", glow: "rgba(201,70,255,0.5)" },
    Legendary: { color: "#ffed4e", glow: "rgba(255,237,78,0.6)" },
  };

  const config = rarityConfig[nftData.rarity as NFTRarity];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {/* Step 1: Prediction Result */}
        {currentStep === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#00ff88] bg-[#16172a] p-8"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0b14] border border-[#3a3b52] text-white hover:bg-[#1f2139]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00ff88]/20 border-4 border-[#00ff88]">
                  <CheckCircle className="h-10 w-10 text-[#00ff88]" />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  🎉 You Predicted Correctly!
                </h2>
                <p className="text-[#d0d0da]">
                  Your prediction for <span className="text-[#00ff88] font-semibold">{nftData.eventName}</span> was accurate!
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                <div className="text-sm text-[#a1a1b0] mb-1">Your Prediction</div>
                <div className="text-lg font-bold text-white">{nftData.description}</div>
              </div>

              <button
                onClick={() => setCurrentStep("reward")}
                className="w-full rounded-lg bg-[#00ff88] px-6 py-4 font-bold text-white hover:bg-[#00e077] transition-colors"
              >
                Claim Your Reward →
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: NFT Reward Popup */}
        {currentStep === "reward" && (
          <motion.div
            key="reward"
            initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-lg rounded-2xl border-2 bg-[#16172a] p-8"
            style={{
              borderColor: config.color,
              boxShadow: `0 0 40px ${config.glow}`,
            }}
          >
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="flex justify-center"
              >
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full border-4"
                  style={{
                    backgroundColor: `${config.color}20`,
                    borderColor: config.color,
                  }}
                >
                  <Sparkles className="h-12 w-12" style={{ color: config.color }} />
                </div>
              </motion.div>

              <div>
                <div className="text-sm text-[#a1a1b0] mb-2">Achievement Unlocked</div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  You Earned a {nftData.rarity} Card!
                </h2>
                <p className="text-[#d0d0da]">
                  Mint this exclusive NFT achievement card to your wallet
                </p>
              </div>

              {/* NFT Preview */}
              <div
                className="rounded-xl border-2 overflow-hidden"
                style={{ borderColor: config.color }}
              >
                <div className="relative">
                  <img
                    src={nftData.image}
                    alt={nftData.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold border-2"
                      style={{
                        backgroundColor: config.color,
                        borderColor: config.color,
                        color: "#fff",
                      }}
                    >
                      <Trophy className="h-3 w-3" />
                      {nftData.rarity}
                    </span>
                  </div>
                </div>
                <div className="bg-[#0a0b14] p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{nftData.title}</h3>
                  <p className="text-sm text-[#d0d0da]">{nftData.eventName}</p>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep("confirm")}
                className="w-full rounded-lg px-6 py-4 font-bold text-white transition-colors"
                style={{ backgroundColor: config.color }}
              >
                Mint NFT to Wallet
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Mint Confirmation */}
        {currentStep === "confirm" && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#3a3b52] bg-[#16172a] p-8"
          >
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Confirm NFT Minting
                </h2>
                <p className="text-sm text-[#d0d0da]">
                  Review the details before minting to blockchain
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#a1a1b0]">NFT Title</span>
                    <span className="text-sm font-semibold text-white">{nftData.title}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#a1a1b0]">Rarity</span>
                    <span className="text-sm font-semibold" style={{ color: config.color }}>
                      {nftData.rarity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#a1a1b0]">Event</span>
                    <span className="text-sm font-semibold text-white">{nftData.eventName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#a1a1b0]">Wallet</span>
                    <span className="text-sm font-mono text-white">{nftData.walletAddress}</span>
                  </div>
                </div>

                <div className="rounded-xl border border-[#ffed4e] bg-[#ffed4e]/5 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#a1a1b0]">Gas Fee (estimated)</span>
                    <span className="text-sm font-semibold text-white">0.002 BNB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#a1a1b0]">Network</span>
                    <span className="text-sm font-semibold text-[#ffed4e]">BNB Smart Chain</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCurrentStep("reward")}
                  className="rounded-lg border border-[#3a3b52] px-6 py-3 font-semibold text-white hover:bg-[#1f2139] transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("minting")}
                  className="rounded-lg px-6 py-3 font-bold text-white transition-colors"
                  style={{ backgroundColor: config.color }}
                >
                  Confirm Mint
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Minting Progress */}
        {currentStep === "minting" && (
          <motion.div
            key="minting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#00d4ff] bg-[#16172a] p-8"
          >
            <div className="text-center space-y-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="flex justify-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00d4ff]/20 border-4 border-[#00d4ff]">
                  <Loader2 className="h-10 w-10 text-[#00d4ff]" />
                </div>
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Minting NFT to Blockchain
                </h2>
                <p className="text-sm text-[#d0d0da]">
                  Please wait while we process your transaction...
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="h-3 rounded-full bg-[#0a0b14] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00d4ff] to-[#c946ff]"
                    initial={{ width: 0 }}
                    animate={{ width: `${mintingProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="text-sm font-semibold text-[#00d4ff]">
                  {mintingProgress}% Complete
                </div>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88]" />
                  <span>Creating token metadata...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88]" />
                  <span>Uploading to IPFS...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className={`h-2 w-2 rounded-full ${mintingProgress > 50 ? "bg-[#00ff88]" : "bg-[#3a3b52]"}`} />
                  <span>Minting on BNB Chain...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className={`h-2 w-2 rounded-full ${mintingProgress === 100 ? "bg-[#00ff88]" : "bg-[#3a3b52]"}`} />
                  <span>Transferring to wallet...</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 5: Success */}
        {currentStep === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-lg rounded-2xl border-2 border-[#00ff88] bg-[#16172a] p-8"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0b14] border border-[#3a3b52] text-white hover:bg-[#1f2139]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="flex justify-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#00ff88]/20 border-4 border-[#00ff88]">
                  <CheckCircle className="h-12 w-12 text-[#00ff88]" />
                </div>
              </motion.div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  🎉 NFT Successfully Minted!
                </h2>
                <p className="text-[#d0d0da]">
                  Your achievement NFT has been minted to your wallet
                </p>
              </div>

              {/* NFT Card */}
              <div
                className="rounded-xl border-2 overflow-hidden"
                style={{ borderColor: config.color }}
              >
                <div className="relative">
                  <img
                    src={nftData.image}
                    alt={nftData.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white">{nftData.title}</h3>
                    <p className="text-sm text-[#d0d0da]">#{nftData.id}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#a1a1b0]">Transaction Hash</span>
                  <button className="flex items-center gap-1 text-[#00d4ff] hover:underline">
                    <span className="font-mono">0x7a3f...8d2c</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleClose}
                  className="rounded-lg border border-[#3a3b52] px-6 py-3 font-semibold text-white hover:bg-[#1f2139] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleClose}
                  className="rounded-lg bg-[#00ff88] px-6 py-3 font-bold text-white hover:bg-[#00e077] transition-colors"
                >
                  View Collection
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
