import { Link } from "react-router";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";
import { PredictXLogo } from "./PredictXLogo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#3a3b52] bg-[#0a0b14]/95 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <PredictXLogo size={40} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            <Link to="/dashboard" className="text-sm font-medium text-white hover:text-[#00d4ff] transition-colors whitespace-nowrap">
              Dashboard
            </Link>
            <Link to="/calendar" className="text-sm font-medium text-white hover:text-[#c946ff] transition-colors whitespace-nowrap">
              Calendar
            </Link>
            <Link to="/predictions" className="text-sm font-medium text-white hover:text-[#ffed4e] transition-colors whitespace-nowrap">
              Predictions
            </Link>
            <Link to="/ai-assistant" className="text-sm font-medium text-white hover:text-[#00d4ff] transition-colors whitespace-nowrap">
              AI<br />Assistant
            </Link>
            <Link to="/identity" className="text-sm font-medium text-white hover:text-[#c946ff] transition-colors whitespace-nowrap">
              My<br />Identity
            </Link>
            <Link to="/leaderboard" className="text-sm font-medium text-white hover:text-[#c946ff] transition-colors whitespace-nowrap">
              Leaderboard
            </Link>
            <Link to="/rewards" className="text-sm font-medium text-white hover:text-[#00ff88] transition-colors whitespace-nowrap">
              Rewards
            </Link>
            <Link to="/nft-collection" className="text-sm font-medium text-white hover:text-[#ffed4e] transition-colors whitespace-nowrap">
              NFT<br />Collection
            </Link>
            <Link to="/nft-marketplace" className="text-sm font-medium text-white hover:text-[#c946ff] transition-colors whitespace-nowrap">
              Marketplace
            </Link>
            <Link to="/profile" className="text-sm font-medium text-white hover:text-[#00d4ff] transition-colors whitespace-nowrap">
              Profile
            </Link>
          </nav>

          {/* Wallet Connect Button */}
          <div className="hidden lg:block shrink-0">
            <button
              onClick={() => setIsWalletConnected(!isWalletConnected)}
              className="flex items-center gap-2 rounded-lg bg-[#ffed4e] px-6 py-2.5 text-sm font-bold text-[#0a0b14] hover:bg-[#ffe01a] transition-colors"
            >
              <Wallet className="h-4 w-4" />
              {isWalletConnected ? "0x7a3f...8d2c" : "Connect Wallet"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-[#3a3b52] py-4 space-y-3">
            <Link to="/dashboard" className="block text-sm font-medium text-white hover:text-[#00d4ff] transition-colors py-2">
              Dashboard
            </Link>
            <Link to="/calendar" className="block text-sm font-medium text-white hover:text-[#c946ff] transition-colors py-2">
              Calendar
            </Link>
            <Link to="/predictions" className="block text-sm font-medium text-white hover:text-[#ffed4e] transition-colors py-2">
              Predictions
            </Link>
            <Link to="/ai-assistant" className="block text-sm font-medium text-white hover:text-[#00d4ff] transition-colors py-2">
              AI Assistant
            </Link>
            <Link to="/identity" className="block text-sm font-medium text-white hover:text-[#c946ff] transition-colors py-2">
              My Identity
            </Link>
            <Link to="/leaderboard" className="block text-sm font-medium text-white hover:text-[#c946ff] transition-colors py-2">
              Leaderboard
            </Link>
            <Link to="/rewards" className="block text-sm font-medium text-white hover:text-[#00ff88] transition-colors py-2">
              Rewards
            </Link>
            <Link to="/nft-collection" className="block text-sm font-medium text-white hover:text-[#ffed4e] transition-colors py-2">
              NFT Collection
            </Link>
            <Link to="/nft-marketplace" className="block text-sm font-medium text-white hover:text-[#c946ff] transition-colors py-2">
              Marketplace
            </Link>
            <Link to="/profile" className="block text-sm font-medium text-white hover:text-[#00d4ff] transition-colors py-2">
              Profile
            </Link>
            <button
              onClick={() => setIsWalletConnected(!isWalletConnected)}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#ffed4e] px-4 py-2.5 text-sm font-bold text-white mt-4"
            >
              <Wallet className="h-4 w-4" />
              {isWalletConnected ? "0x7a3f...8d2c" : "Connect Wallet"}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}