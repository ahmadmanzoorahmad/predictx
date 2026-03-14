import { useState } from "react";
import { X, ShoppingCart, Wallet, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { NFTCardData } from "./NFTCard";
import { motion, AnimatePresence } from "motion/react";

interface PurchaseFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: NFTCardData;
}

type PurchaseStep = "review" | "confirm" | "processing" | "success";

export function PurchaseFlowModal({ isOpen, onClose, nft }: PurchaseFlowModalProps) {
  const [currentStep, setCurrentStep] = useState<PurchaseStep>("review");
  const [walletBalance] = useState(5.8); // Mock wallet balance

  const handleClose = () => {
    setCurrentStep("review");
    onClose();
  };

  const handleConfirm = () => {
    setCurrentStep("processing");
    
    // Simulate blockchain transaction
    setTimeout(() => {
      setCurrentStep("success");
    }, 3000);
  };

  const gasFee = 0.003;
  const totalCost = (nft.price || 0) + gasFee;
  const hasEnoughBalance = walletBalance >= totalCost;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {/* Step 1: Review Purchase */}
        {currentStep === "review" && (
          <motion.div
            key="review"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-lg rounded-2xl border-2 border-[#3a3b52] bg-[#16172a] p-8"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0b14] border border-[#3a3b52] text-white hover:bg-[#1f2139]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Purchase NFT</h2>
                <p className="text-sm text-[#d0d0da]">Review the details before purchasing</p>
              </div>

              {/* NFT Preview */}
              <div className="rounded-xl border border-[#3a3b52] overflow-hidden">
                <div className="relative">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold border-2 ${
                      nft.rarity === "Legendary"
                        ? "bg-[#ffed4e] border-[#ffed4e] text-white"
                        : nft.rarity === "Epic"
                        ? "bg-[#c946ff] border-[#c946ff] text-white"
                        : nft.rarity === "Rare"
                        ? "bg-[#00d4ff] border-[#00d4ff] text-white"
                        : "bg-[#6b7280] border-[#6b7280] text-white"
                    }`}>
                      {nft.rarity}
                    </span>
                  </div>
                </div>
                <div className="bg-[#0a0b14] p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{nft.title}</h3>
                  <p className="text-sm text-[#d0d0da] mb-3">{nft.eventName}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#a1a1b0]">Seller</span>
                    <span className="text-sm font-mono text-white">{nft.walletAddress}</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-[#a1a1b0]">NFT Price</span>
                  <span className="text-sm font-semibold text-white">{nft.price} BNB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-[#a1a1b0]">Gas Fee (estimated)</span>
                  <span className="text-sm font-semibold text-white">{gasFee} BNB</span>
                </div>
                <div className="h-px bg-[#3a3b52]" />
                <div className="flex justify-between">
                  <span className="font-semibold text-white">Total Cost</span>
                  <span className="text-xl font-bold text-[#ffed4e]">{totalCost.toFixed(3)} BNB</span>
                </div>
              </div>

              {/* Wallet Balance */}
              <div className={`rounded-xl border p-4 ${
                hasEnoughBalance 
                  ? "border-[#00ff88] bg-[#00ff88]/5"
                  : "border-[#ff4444] bg-[#ff4444]/5"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Wallet className={`h-5 w-5 ${hasEnoughBalance ? "text-[#00ff88]" : "text-[#ff4444]"}`} />
                    <span className="text-sm font-semibold text-white">Wallet Balance</span>
                  </div>
                  <span className={`text-lg font-bold ${hasEnoughBalance ? "text-[#00ff88]" : "text-[#ff4444]"}`}>
                    {walletBalance} BNB
                  </span>
                </div>
                {!hasEnoughBalance && (
                  <p className="text-xs text-[#ff4444]">
                    Insufficient balance. You need {(totalCost - walletBalance).toFixed(3)} more BNB.
                  </p>
                )}
              </div>

              <button
                onClick={() => setCurrentStep("confirm")}
                disabled={!hasEnoughBalance}
                className="w-full rounded-lg bg-[#ffed4e] px-6 py-4 font-bold text-white hover:bg-[#ffe01a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Purchase
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Confirm Purchase */}
        {currentStep === "confirm" && (
          <motion.div
            key="confirm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#ffed4e] bg-[#16172a] p-8"
          >
            <div className="space-y-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffed4e]/20 border-2 border-[#ffed4e]">
                    <ShoppingCart className="h-8 w-8 text-[#ffed4e]" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Confirm Purchase</h2>
                <p className="text-sm text-[#d0d0da]">
                  Authorize the transaction in your wallet
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#a1a1b0]">NFT</span>
                  <span className="text-sm font-semibold text-white">{nft.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#a1a1b0]">Price</span>
                  <span className="text-sm font-semibold text-white">{nft.price} BNB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#a1a1b0]">Gas Fee</span>
                  <span className="text-sm font-semibold text-white">{gasFee} BNB</span>
                </div>
                <div className="h-px bg-[#3a3b52]" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-lg font-bold text-[#ffed4e]">{totalCost.toFixed(3)} BNB</span>
                </div>
              </div>

              <div className="rounded-xl border border-[#00d4ff] bg-[#00d4ff]/5 p-4">
                <div className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-[#00d4ff]" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-1">Transaction Details</div>
                    <p className="text-xs text-[#d0d0da]">
                      From: {nft.walletAddress}
                    </p>
                    <p className="text-xs text-[#d0d0da]">
                      To: 0x1a2b...3c4d (Your Wallet)
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setCurrentStep("review")}
                  className="rounded-lg border border-[#3a3b52] px-6 py-3 font-semibold text-white hover:bg-[#1f2139] transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="rounded-lg bg-[#ffed4e] px-6 py-3 font-bold text-white hover:bg-[#ffe01a] transition-colors"
                >
                  Confirm
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
                  Processing Purchase
                </h2>
                <p className="text-sm text-[#d0d0da]">
                  Confirming transaction on blockchain...
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88]" />
                  <span>Authorizing payment...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span>Transferring NFT...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#3a3b52] animate-pulse" />
                  <span>Confirming ownership...</span>
                </div>
              </div>

              <div className="rounded-xl border border-[#ffed4e] bg-[#ffed4e]/5 p-4">
                <p className="text-xs text-[#d0d0da]">
                  Please do not close this window. This may take a few moments.
                </p>
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
                  🎉 Purchase Complete!
                </h2>
                <p className="text-[#d0d0da]">
                  The NFT has been added to your collection
                </p>
              </div>

              {/* NFT Card */}
              <div className="rounded-xl border-2 border-[#00ff88] overflow-hidden">
                <div className="relative">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14] to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-white mb-1">{nft.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#d0d0da]">Now in your wallet</span>
                      <span className="text-sm font-bold text-[#00ff88]">OWNED</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                  <div className="text-xs text-[#a1a1b0] mb-1">Paid</div>
                  <div className="text-lg font-bold text-white">{nft.price} BNB</div>
                </div>
                <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                  <div className="text-xs text-[#a1a1b0] mb-1">NFT ID</div>
                  <div className="text-lg font-mono font-bold text-white">#{nft.id}</div>
                </div>
              </div>

              <div className="rounded-xl border border-[#00d4ff] bg-[#00d4ff]/5 p-4">
                <div className="text-sm text-[#d0d0da] mb-1">Transaction Hash</div>
                <div className="text-xs font-mono text-[#00d4ff]">0x7a3f8d2c9b4e1f6a5c3d8e2b7f4a9c6d1e8b5a2f7c4d9e6b3a8f1c4e7d2b5a9c</div>
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
