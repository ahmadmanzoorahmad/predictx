import { Info, X, Wallet } from "lucide-react";
import { useState } from "react";

interface DemoModeBannerProps {
  onConnectWallet?: () => void;
}

export function DemoModeBanner({ onConnectWallet }: DemoModeBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 mx-auto max-w-4xl px-4">
      <div className="rounded-xl border-2 border-[#ffed4e] bg-gradient-to-r from-[#ffed4e]/10 via-[#00d4ff]/10 to-[#c946ff]/10 backdrop-blur-md p-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffed4e]/20 border-2 border-[#ffed4e]">
            <Info className="h-5 w-5 text-[#ffed4e]" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold text-white">Demo Mode Active</span>
              <span className="inline-block h-2 w-2 rounded-full bg-[#00ff88] animate-pulse" />
            </div>
            <p className="text-sm text-[#d0d0da]">
              Predictions here are <span className="font-semibold text-[#ffed4e]">not recorded on blockchain</span>. Connect your wallet to earn real rewards and NFTs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onConnectWallet}
              className="flex items-center gap-2 rounded-lg bg-[#ffed4e] px-4 py-2 text-sm font-bold text-white hover:bg-[#ffe01a] transition-colors whitespace-nowrap"
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#16172a] border border-[#3a3b52] text-white hover:bg-[#1f2139] transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
