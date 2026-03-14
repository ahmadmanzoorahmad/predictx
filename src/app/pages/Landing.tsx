import { Link } from "react-router";
import { ArrowRight, Trophy, TrendingUp, Coins, Shield, PlayCircle, Wallet } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { WalletUpgradeModal } from "../components/WalletUpgradeModal";

export function Landing() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const handleDemoMode = () => {
    setIsDemoMode(true);
    // In a real app, this would set demo mode state globally
    window.location.href = "/dashboard?demo=true";
  };

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Enhanced Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b14] via-[#16172a] to-[#0a0b14]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,237,78,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(201,70,255,0.1),transparent_50%)]" />
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff] bg-[#16172a]/80 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="text-sm font-medium text-[#00d4ff]">Powered by BNB Chain</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                <span className="text-[#ffed4e]">
                  Predict.
                </span>
                <br />
                <span className="text-[#00d4ff]">
                  Compete.
                </span>
                <br />
                <span className="text-[#c946ff]">
                  Earn.
                </span>
              </h1>

              <p className="text-xl text-[#d0d0da] max-w-lg leading-relaxed">
                A skill-based prediction platform where you predict outcomes of real sports events like Formula 1 races and football matches. Earn points, reputation, and platform coins for accurate predictions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleConnectWallet}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffed4e] px-8 py-4 font-bold text-white hover:bg-[#ffe01a] transition-colors"
                >
                  <Wallet className="h-5 w-5" />
                  Connect Wallet
                </button>
                <button
                  onClick={handleDemoMode}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#00d4ff] bg-[#16172a]/80 px-8 py-4 font-bold text-[#00d4ff] backdrop-blur-sm hover:bg-[#00d4ff]/10 transition-colors"
                >
                  <PlayCircle className="h-5 w-5" />
                  Try Demo Mode
                </button>
              </div>

              {/* Demo Mode Info */}
              <div className="rounded-xl border border-[#3a3b52] bg-[#16172a]/50 backdrop-blur-sm p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d4ff]/20">
                    <PlayCircle className="h-4 w-4 text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white mb-1">
                      New to Web3? Try Demo Mode
                    </div>
                    <p className="text-xs text-[#d0d0da]">
                      Explore the platform without connecting a wallet. Predictions in demo mode are simulated.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#ffed4e]">50K+</div>
                  <div className="text-sm text-[#d0d0da] mt-1">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00d4ff]">1M+</div>
                  <div className="text-sm text-[#d0d0da] mt-1">Predictions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#c946ff]">$2M+</div>
                  <div className="text-sm text-[#d0d0da] mt-1">Rewards</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffed4e] via-[#00d4ff] to-[#c946ff] rounded-2xl blur-3xl opacity-20" />
              <div className="relative space-y-4">
                <div className="rounded-xl border border-[#00d4ff] bg-[#16172a]/90 p-6 backdrop-blur-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1635414765065-0924107bf919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHJhY2luZyUyMGNhciUyMHRyYWNrfGVufDF8fHx8MTc3MjU4NTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Formula 1 Racing"
                    className="h-48 w-full rounded-lg object-cover"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#d0d0da]">F1 - Monaco GP</span>
                      <span className="text-xs font-bold text-[#00ff88] bg-[#00ff88]/20 px-2 py-1 rounded">Live</span>
                    </div>
                    <div className="text-lg font-bold text-white">Race Winner</div>
                    <div className="flex gap-2">
                      <button className="flex-1 rounded-lg border border-[#00d4ff] bg-[#00d4ff]/20 px-3 py-2 text-sm font-bold text-[#00d4ff] hover:bg-[#00d4ff]/30 transition-colors">
                        Verstappen
                      </button>
                      <button className="flex-1 rounded-lg border border-[#3a3b52] bg-[#1f2139] px-3 py-2 text-sm font-semibold text-white hover:bg-[#3a3b52] transition-colors">
                        Hamilton
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#00d4ff] bg-[#16172a]/90 p-6 backdrop-blur-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHN0YWRpdW0lMjBtYXRjaHxlbnwxfHx8fDE3NzI0NzYzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Football Match"
                    className="h-48 w-full rounded-lg object-cover"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#d0d0da]">EPL - Man Utd vs Arsenal</span>
                      <span className="text-xs font-bold text-[#c946ff] bg-[#c946ff]/20 px-2 py-1 rounded">Upcoming</span>
                    </div>
                    <div className="text-lg font-bold text-white">Match Outcome</div>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="rounded-lg border border-[#3a3b52] bg-[#1f2139] px-2 py-2 text-sm font-bold text-white hover:bg-[#3a3b52] transition-colors">
                        Home
                      </button>
                      <button className="rounded-lg border border-[#3a3b52] bg-[#1f2139] px-2 py-2 text-sm font-bold text-white hover:bg-[#3a3b52] transition-colors">
                        Draw
                      </button>
                      <button className="rounded-lg border border-[#3a3b52] bg-[#1f2139] px-2 py-2 text-sm font-bold text-white hover:bg-[#3a3b52] transition-colors">
                        Away
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-[#2a2b3d] bg-[#0a0b14] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Why PredictX?</h2>
            <p className="text-[#a1a1b0] max-w-2xl mx-auto">
              Skill-based predictions meet Web3 technology. No gambling, just pure strategy and knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6 hover:border-[#ffd700] transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <Trophy className="h-6 w-6 text-[#ffd700]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill-Based</h3>
              <p className="text-sm text-[#a1a1b0]">
                Use your sports knowledge and analytical skills to make accurate predictions.
              </p>
            </div>

            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6 hover:border-[#00d4ff] transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/10">
                <TrendingUp className="h-6 w-6 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn NFT Rewards</h3>
              <p className="text-sm text-[#a1a1b0]">
                Get achievement NFT cards, platform coins, and rare collectibles for accurate predictions.
              </p>
            </div>

            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6 hover:border-[#b026ff] transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#b026ff]/10">
                <Coins className="h-6 w-6 text-[#b026ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web3 Powered</h3>
              <p className="text-sm text-[#a1a1b0]">
                Built on BNB Chain with transparent reward distribution and NFT achievements.
              </p>
            </div>

            <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6 hover:border-[#ffd700] transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffd700]/10">
                <Shield className="h-6 w-6 text-[#ffd700]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair & Secure</h3>
              <p className="text-sm text-[#a1a1b0]">
                Blockchain-verified predictions with transparent leaderboards and ranking systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#2a2b3d] bg-gradient-to-br from-[#0a0b14] to-[#151621] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Winning?
          </h2>
          <p className="text-xl text-[#a1a1b0] mb-8 max-w-2xl mx-auto">
            Join thousands of predictors competing for rewards on the blockchain
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ffd700] to-[#00d4ff] px-10 py-4 text-lg font-semibold text-[#0a0b14] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all"
          >
            Get Started Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Wallet Upgrade Modal */}
      <WalletUpgradeModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onComplete={(username) => {
          console.log("Identity created for:", username);
          window.location.href = "/dashboard";
        }}
      />
    </div>
  );
}