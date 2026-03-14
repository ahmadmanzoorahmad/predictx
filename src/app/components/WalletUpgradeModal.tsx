import { useState } from "react";
import { X, Wallet, User, Shield, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WalletUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (username: string) => void;
}

type UpgradeStep = "intro" | "connect" | "username" | "minting" | "success";

export function WalletUpgradeModal({ isOpen, onClose, onComplete }: WalletUpgradeModalProps) {
  const [currentStep, setCurrentStep] = useState<UpgradeStep>("intro");
  const [username, setUsername] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    // Simulate wallet connection
    setTimeout(() => {
      setWalletConnected(true);
      setCurrentStep("username");
    }, 1500);
  };

  const handleCreateIdentity = () => {
    setCurrentStep("minting");
    
    // Simulate identity badge minting
    setTimeout(() => {
      setCurrentStep("success");
    }, 3000);
  };

  const handleComplete = () => {
    onComplete(username);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {/* Step 1: Introduction */}
        {currentStep === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-lg rounded-2xl border-2 border-[#ffed4e] bg-[#16172a] p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0b14] border border-[#3a3b52] text-white hover:bg-[#1f2139]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#ffed4e] via-[#00d4ff] to-[#c946ff]">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Activate Your PredictX Identity
                </h2>
                <p className="text-[#d0d0da]">
                  Upgrade from demo mode to unlock the full experience and earn real NFT rewards
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-6 text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00ff88]/20 border border-[#00ff88]">
                    <CheckCircle className="h-4 w-4 text-[#00ff88]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Earn Real NFTs</div>
                    <div className="text-xs text-[#d0d0da]">Mint achievement cards on-chain</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d4ff]/20 border border-[#00d4ff]">
                    <CheckCircle className="h-4 w-4 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Build Reputation</div>
                    <div className="text-xs text-[#d0d0da]">Compete on global leaderboards</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c946ff]/20 border border-[#c946ff]">
                    <CheckCircle className="h-4 w-4 text-[#c946ff]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Trade on Marketplace</div>
                    <div className="text-xs text-[#d0d0da]">Buy and sell NFT achievements</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep("connect")}
                className="w-full rounded-lg bg-[#ffed4e] px-6 py-4 font-bold text-white hover:bg-[#ffe01a] transition-colors"
              >
                Get Started →
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Connect Wallet */}
        {currentStep === "connect" && (
          <motion.div
            key="connect"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#00d4ff] bg-[#16172a] p-8"
          >
            <div className="text-center space-y-6">
              {!walletConnected ? (
                <>
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00d4ff]/20 border-2 border-[#00d4ff]">
                      <Wallet className="h-10 w-10 text-[#00d4ff]" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Step 1: Connect Wallet
                    </h2>
                    <p className="text-sm text-[#d0d0da]">
                      Connect your Web3 wallet to continue
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleConnectWallet}
                      className="w-full flex items-center justify-between rounded-lg border-2 border-[#ffed4e] bg-[#ffed4e]/10 px-6 py-4 hover:bg-[#ffed4e]/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#ffed4e] flex items-center justify-center">
                          <span className="text-lg">🦊</span>
                        </div>
                        <span className="font-bold text-white">MetaMask</span>
                      </div>
                      <span className="text-sm text-[#ffed4e]">Popular</span>
                    </button>

                    <button className="w-full flex items-center justify-between rounded-lg border border-[#3a3b52] bg-[#0a0b14] px-6 py-4 hover:bg-[#1f2139] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-[#00d4ff]" />
                        </div>
                        <span className="font-bold text-white">WalletConnect</span>
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    className="flex justify-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00ff88]/20 border-2 border-[#00ff88]">
                      <Loader2 className="h-10 w-10 text-[#00ff88] animate-spin" />
                    </div>
                  </motion.div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Connecting...
                    </h2>
                    <p className="text-sm text-[#d0d0da]">
                      Authorizing wallet connection
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 3: Create Username */}
        {currentStep === "username" && (
          <motion.div
            key="username"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#c946ff] bg-[#16172a] p-8"
          >
            <div className="space-y-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c946ff]/20 border-2 border-[#c946ff]">
                    <User className="h-8 w-8 text-[#c946ff]" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Step 2: Create Username
                </h2>
                <p className="text-sm text-[#d0d0da]">
                  Choose your PredictX identity name
                </p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full rounded-lg border-2 border-[#3a3b52] bg-[#0a0b14] px-4 py-3 text-white placeholder-[#6b7280] focus:border-[#c946ff] focus:outline-none"
                />
                <p className="text-xs text-[#a1a1b0]">
                  This will be your display name on PredictX
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#a1a1b0]">Connected Wallet</span>
                  <span className="text-white font-mono">0x7a3f...8d2c</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#00ff88]">
                  <CheckCircle className="h-3 w-3" />
                  <span>Wallet connected</span>
                </div>
              </div>

              <button
                onClick={handleCreateIdentity}
                disabled={!username.trim()}
                className="w-full rounded-lg bg-[#c946ff] px-6 py-4 font-bold text-white hover:bg-[#b835ef] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Identity →
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Minting Identity Badge */}
        {currentStep === "minting" && (
          <motion.div
            key="minting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full max-w-md rounded-2xl border-2 border-[#ffed4e] bg-[#16172a] p-8"
          >
            <div className="text-center space-y-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="flex justify-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffed4e]/20 border-4 border-[#ffed4e]">
                  <Loader2 className="h-10 w-10 text-[#ffed4e]" />
                </div>
              </motion.div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Step 3: Minting Identity Badge
                </h2>
                <p className="text-sm text-[#d0d0da]">
                  Creating your on-chain identity NFT...
                </p>
              </div>

              <div className="rounded-xl border border-[#3a3b52] bg-[#0a0b14] p-4 space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88]" />
                  <span>Creating metadata...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span>Minting identity badge...</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#d0d0da]">
                  <div className="h-2 w-2 rounded-full bg-[#3a3b52]" />
                  <span>Initializing reputation...</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 5: Success */}
        {currentStep === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-lg rounded-2xl border-2 border-[#00ff88] bg-[#16172a] p-8"
          >
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
                <h2 className="text-3xl font-bold text-white mb-3">
                  🎉 Identity Activated!
                </h2>
                <p className="text-[#d0d0da]">
                  Welcome to PredictX, <span className="text-[#ffed4e] font-bold">{username}</span>
                </p>
              </div>

              <div className="rounded-xl border-2 border-[#ffed4e] bg-gradient-to-br from-[#ffed4e]/10 to-[#00d4ff]/10 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#ffed4e] to-[#00d4ff] flex items-center justify-center text-2xl font-bold text-white">
                    {username.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-xl font-bold text-white mb-1">{username}</div>
                    <div className="text-xs text-[#a1a1b0] font-mono">0x7a3f...8d2c</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ffed4e]">0</div>
                    <div className="text-xs text-[#a1a1b0]">Reputation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00d4ff]">0</div>
                    <div className="text-xs text-[#a1a1b0]">Predictions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#c946ff]">0</div>
                    <div className="text-xs text-[#a1a1b0]">NFTs</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#00d4ff] bg-[#00d4ff]/5 p-4">
                <p className="text-sm text-[#d0d0da]">
                  Your identity badge has been minted to your wallet. Start making predictions to earn reputation and NFTs!
                </p>
              </div>

              <button
                onClick={handleComplete}
                className="w-full rounded-lg bg-[#00ff88] px-6 py-4 font-bold text-white hover:bg-[#00e077] transition-colors"
              >
                Start Predicting →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
