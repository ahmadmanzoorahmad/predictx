import { useState } from "react";
import { X, TrendingUp, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { NFTCardData } from "./NFTCard";
import { motion, AnimatePresence } from "motion/react";

interface SellNFTModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: NFTCardData;
}

type SellStep = "setPrice" | "confirm" | "processing" | "success";

export function SellNFTModal({ isOpen, onClose, nft }: SellNFTModalProps) {
  const [currentStep, setCurrentStep] = useState<SellStep>("setPrice");
  const [price, setPrice] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClose = () => {
    setCurrentStep("setPrice");
    setPrice("");
    setIsProcessing(false);
    onClose();
  };

  const handleConfirm = () => {
    setCurrentStep("processing");
    setIsProcessing(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep("success");
    }, 3000);
  };

  const platformFee = price ? (parseFloat(price) * 0.025).toFixed(3) : "0";
  const youReceive = price ? (parseFloat(price) * 0.975).toFixed(3) : "0";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {/* Step 1: Set Price */}
        {currentStep === "setPrice" && (
          <motion.div
            key="setPrice"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#3a3b52] bg-[#16172a] p-8"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0b14] border border-[#3a3b52] text-white hover:bg-[#1f2139]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">List NFT for Sale</h2>
                <p className="text-sm text-[#d0d0da]">Set your selling price for this NFT</p>
              </div>

              {/* NFT Preview */}
              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                <div className="flex gap-4">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{nft.title}</h3>
                    <p className="text-sm text-[#d0d0da] mb-1">{nft.eventName}</p>
                    <span className={`inline-block text-xs font-bold px-2 py-1 rounded ${
                      nft.rarity === "Legendary"
                        ? "bg-[#ffed4e]/20 text-[#ffed4e]"
                        : nft.rarity === "Epic"
                        ? "bg-[#c946ff]/20 text-[#c946ff]"
                        : nft.rarity === "Rare"
                        ? "bg-[#00d4ff]/20 text-[#00d4ff]"
                        : "bg-[#6b7280]/20 text-[#6b7280]"
                    }`}>
                      {nft.rarity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Listing Price
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-lg border-2 border-[#3a3b52] bg-[#0a0b14] px-4 py-3 pr-16 text-lg font-semibold text-white placeholder-[#6b7280] focus:border-[#ffed4e] focus:outline-none"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ffed4e] font-bold">
                    BNB
                  </div>
                </div>
                
                {/* Suggested Prices */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setPrice("0.5")}
                    className="flex-1 rounded-lg border border-[#3a3b52] bg-[#0a0b14] px-3 py-2 text-sm text-white hover:bg-[#1f2139] transition-colors"
                  >
                    0.5 BNB
                  </button>
                  <button
                    onClick={() => setPrice("1.0")}
                    className="flex-1 rounded-lg border border-[#3a3b52] bg-[#0a0b14] px-3 py-2 text-sm text-white hover:bg-[#1f2139] transition-colors"
                  >
                    1.0 BNB
                  </button>
                  <button
                    onClick={() => setPrice("2.0")}
                    className="flex-1 rounded-lg border border-[#3a3b52] bg-[#0a0b14] px-3 py-2 text-sm text-white hover:bg-[#1f2139] transition-colors"
                  >
                    2.0 BNB
                  </button>
                </div>
              </div>

              {/* Market Info */}
              <div className="rounded-xl border border-[#00d4ff] bg-[#00d4ff]/5 p-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-[#00d4ff] mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-1">Market Insight</div>
                    <p className="text-xs text-[#d0d0da]">
                      Similar {nft.rarity} NFTs are selling for 0.8 - 2.5 BNB
                    </p>
                  </div>
                </div>
              </div>

              {/* Fee Breakdown */}
              {price && parseFloat(price) > 0 && (
                <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a1a1b0]">Listing Price</span>
                    <span className="text-white font-semibold">{price} BNB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a1a1b0]">Platform Fee (2.5%)</span>
                    <span className="text-white font-semibold">{platformFee} BNB</span>
                  </div>
                  <div className="h-px bg-[#3a3b52]" />
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-white">You Receive</span>
                    <span className="text-lg font-bold text-[#00ff88]">{youReceive} BNB</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => setCurrentStep("confirm")}
                disabled={!price || parseFloat(price) <= 0}
                className="w-full rounded-lg bg-[#ffed4e] px-6 py-4 font-bold text-white hover:bg-[#ffe01a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Confirm Listing */}
        {currentStep === "confirm" && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#3a3b52] bg-[#16172a] p-8"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Confirm Listing</h2>
                <p className="text-sm text-[#d0d0da]">Review before listing on marketplace</p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-[#a1a1b0]">NFT Title</span>
                  <span className="text-sm font-semibold text-white">{nft.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#a1a1b0]">NFT ID</span>
                  <span className="text-sm font-mono text-white">#{nft.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#a1a1b0]">Listing Price</span>
                  <span className="text-lg font-bold text-[#ffed4e]">{price} BNB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#a1a1b0]">You Receive</span>
                  <span className="text-sm font-bold text-[#00ff88]">{youReceive} BNB</span>
                </div>
              </div>

              <div className="rounded-xl border border-[#ffed4e] bg-[#ffed4e]/5 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-[#ffed4e] mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-1">Important</div>
                    <p className="text-xs text-[#d0d0da]">
                      Once listed, this NFT will be available for purchase. You can cancel the listing anytime before it sells.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#a1a1b0]">Estimated Gas Fee</span>
                  <span className="text-sm font-semibold text-white">0.001 BNB</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCurrentStep("setPrice")}
                  className="rounded-lg border border-[#3a3b52] px-6 py-3 font-semibold text-white hover:bg-[#1f2139] transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="rounded-lg bg-[#ffed4e] px-6 py-3 font-bold text-white hover:bg-[#ffe01a] transition-colors"
                >
                  List NFT
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Processing */}
        {currentStep === "processing" && (
          <motion.div
            key="processing"
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
                  Processing Listing
                </h2>
                <p className="text-sm text-[#d0d0da]">
                  Confirming transaction on blockchain...
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88]" />
                  <span>Approving NFT transfer...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span>Listing on marketplace...</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Success */}
        {currentStep === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#00ff88] bg-[#16172a] p-8"
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
                  🎉 NFT Listed Successfully!
                </h2>
                <p className="text-[#d0d0da]">
                  Your NFT is now available on the marketplace
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                <div className="flex gap-4">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-white mb-1">{nft.title}</h3>
                    <p className="text-sm text-[#d0d0da] mb-2">Listed for</p>
                    <p className="text-xl font-bold text-[#ffed4e]">{price} BNB</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#00d4ff] bg-[#00d4ff]/5 p-4">
                <p className="text-sm text-[#d0d0da]">
                  Buyers can now purchase your NFT. You'll be notified when it sells.
                </p>
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
                  View Marketplace
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
