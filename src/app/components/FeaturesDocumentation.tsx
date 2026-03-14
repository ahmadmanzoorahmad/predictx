import { 
  Trophy, TrendingUp, Coins, Shield, Sparkles, Calendar, 
  Brain, Wallet, Award, BarChart3, Users, Target, Clock,
  Zap, Star, Medal, Gift, Crown, Gamepad2, Radio, Lock,
  ChevronRight, Image, Store, Fingerprint, Bot, ChartBar
} from "lucide-react";
import { PredictXLogo } from "./PredictXLogo";

export function FeaturesDocumentation() {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      {/* Hero Header */}
      <div className="relative overflow-hidden border-b border-[#3a3b52]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b14] via-[#16172a] to-[#0a0b14]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,237,78,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(201,70,255,0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-6 py-16 relative">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <PredictXLogo size={60} />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#F3BA2F] via-[#2F80ED] to-[#9D4EDD] bg-clip-text text-transparent">
              Complete Feature Documentation
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive Web3 gamified sports prediction platform with NFT collectibles, 
              AI-powered insights, digital identity, and real-time event tracking
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-gray-400">Powered by BNB Chain</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F3BA2F]" />
                <span className="text-gray-400">100% Web3 Native</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2F80ED]" />
                <span className="text-gray-400">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Table of Contents */}
        <div className="mb-12 bg-[#16172a] rounded-xl border border-[#3a3b52] p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-[#F3BA2F]" />
            Quick Navigation
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="#core-platform" className="text-[#2F80ED] hover:text-[#F3BA2F] transition-colors flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              Core Platform Features
            </a>
            <a href="#nft-system" className="text-[#2F80ED] hover:text-[#F3BA2F] transition-colors flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              NFT & Blockchain
            </a>
            <a href="#digital-identity" className="text-[#2F80ED] hover:text-[#F3BA2F] transition-colors flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              Digital Identity
            </a>
            <a href="#ai-assistant" className="text-[#2F80ED] hover:text-[#F3BA2F] transition-colors flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              AI Prediction Assistant
            </a>
            <a href="#calendar-events" className="text-[#2F80ED] hover:text-[#F3BA2F] transition-colors flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              Calendar & Live Events
            </a>
            <a href="#ui-branding" className="text-[#2F80ED] hover:text-[#F3BA2F] transition-colors flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              UI & Branding
            </a>
          </div>
        </div>

        {/* Core Platform Features */}
        <section id="core-platform" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Trophy className="h-8 w-8 text-[#F3BA2F]" />
            Core Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Landing Page */}
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-[#F3BA2F]" />}
              title="Landing Page"
              features={[
                "Hero section with gradient backgrounds",
                "Connect Wallet integration",
                "Demo Mode entry point",
                "Feature highlights showcase",
                "Platform statistics display",
                "Sports category cards (F1, Football)",
                "How it works section",
                "Web3 trust indicators"
              ]}
            />

            {/* Dashboard */}
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6 text-[#2F80ED]" />}
              title="User Dashboard"
              features={[
                "Performance metrics overview",
                "Active predictions tracker",
                "Win rate statistics",
                "Earnings summary",
                "Live events widget",
                "Upcoming events calendar",
                "Recent activity feed",
                "Quick prediction access",
                "AI recommendations"
              ]}
            />

            {/* Predictions Page */}
            <FeatureCard
              icon={<Target className="h-6 w-6 text-[#9D4EDD]" />}
              title="Prediction Interface"
              features={[
                "Multi-sport prediction (F1, Football)",
                "Live event cards with countdowns",
                "AI confidence indicators (color-coded)",
                "Win probability percentages",
                "Stake amount selection",
                "Prediction lock system",
                "Real-time odds updates",
                "Event details and statistics",
                "Prediction history"
              ]}
            />

            {/* Leaderboard */}
            <FeatureCard
              icon={<Crown className="h-6 w-6 text-[#F3BA2F]" />}
              title="Global Leaderboard"
              features={[
                "Top predictors ranking",
                "Accuracy rate display",
                "Total earnings tracking",
                "Win streaks visualization",
                "Time-based filters (All-time, Monthly, Weekly)",
                "User rank badges",
                "Prediction count metrics",
                "Profile quick links"
              ]}
            />

            {/* Rewards System */}
            <FeatureCard
              icon={<Gift className="h-6 w-6 text-[#00ff88]" />}
              title="Rewards & Earnings"
              features={[
                "Wallet balance display",
                "Available rewards tracking",
                "Pending predictions status",
                "Achievement badges (30+)",
                "Milestone rewards",
                "Daily login bonuses",
                "Streak rewards",
                "Claim rewards functionality",
                "Transaction history"
              ]}
            />

            {/* User Profile */}
            <FeatureCard
              icon={<Users className="h-6 w-6 text-[#2F80ED]" />}
              title="User Profile"
              features={[
                "Profile statistics overview",
                "Prediction history",
                "Achievement showcase",
                "Performance charts (Recharts)",
                "Win/Loss breakdown",
                "Favorite sports preferences",
                "Account settings",
                "Wallet connection status"
              ]}
            />
          </div>
        </section>

        {/* NFT & Blockchain Features */}
        <section id="nft-system" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Image className="h-8 w-8 text-[#9D4EDD]" />
            NFT & Blockchain Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* NFT Collection */}
            <FeatureCard
              icon={<Award className="h-6 w-6 text-[#F3BA2F]" />}
              title="NFT Collection Page"
              features={[
                "Personal NFT gallery",
                "Achievement-based NFT cards",
                "Rarity tiers (Common, Rare, Epic, Legendary)",
                "3D card flip animations",
                "Metadata display (Mint date, Token ID)",
                "Filtering by rarity",
                "Collection statistics",
                "View NFT details",
                "Blockchain verification"
              ]}
            />

            {/* NFT Marketplace */}
            <FeatureCard
              icon={<Store className="h-6 w-6 text-[#2F80ED]" />}
              title="NFT Marketplace"
              features={[
                "Browse available NFTs",
                "Buy/Sell functionality",
                "Price listings in ETH/BNB",
                "Rarity filtering",
                "Sort by price/rarity/recent",
                "NFT preview cards",
                "Transaction confirmation",
                "Seller information",
                "Purchase history"
              ]}
            />

            {/* Wallet Integration */}
            <FeatureCard
              icon={<Wallet className="h-6 w-6 text-[#F3BA2F]" />}
              title="Web3 Wallet Integration"
              features={[
                "Connect/Disconnect wallet",
                "Wallet address display",
                "Balance tracking",
                "Transaction signing",
                "Multi-wallet support mock",
                "Wallet upgrade modal",
                "Demo mode for non-wallet users",
                "Network status indicator"
              ]}
            />

            {/* Achievement NFTs */}
            <FeatureCard
              icon={<Medal className="h-6 w-6 text-[#9D4EDD]" />}
              title="Achievement NFT System"
              features={[
                "Auto-minted achievement cards",
                "Milestone-based unlocks",
                "Unique artwork per achievement",
                "Rarity-based rewards",
                "Collectible series",
                "Trading enabled NFTs",
                "Showcase on profile",
                "Blockchain provenance"
              ]}
            />
          </div>
        </section>

        {/* Digital Identity System */}
        <section id="digital-identity" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Fingerprint className="h-8 w-8 text-[#2F80ED]" />
            Digital Identity System
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Identity Profile */}
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-[#00ff88]" />}
              title="Identity Profile"
              features={[
                "Comprehensive reputation score (0-1000)",
                "Skill level progression system",
                "Sports expertise breakdown",
                "Identity verification badges",
                "Trust score calculation",
                "Performance metrics",
                "Skill tier badges (Novice to Legend)",
                "Visual identity card"
              ]}
            />

            {/* Reputation System */}
            <FeatureCard
              icon={<Star className="h-6 w-6 text-[#F3BA2F]" />}
              title="Reputation Scoring"
              features={[
                "Dynamic reputation calculation",
                "Prediction accuracy weight",
                "Consistency rewards",
                "Streak bonuses",
                "Community engagement points",
                "Reputation levels (1-10)",
                "Progress visualization",
                "Reputation history chart"
              ]}
            />

            {/* Skill Levels */}
            <FeatureCard
              icon={<TrendingUp className="h-6 w-6 text-[#9D4EDD]" />}
              title="Skill Level System"
              features={[
                "Sport-specific skill ratings",
                "Experience points (XP)",
                "Level progression (1-100)",
                "Skill tier classifications",
                "Expertise badges",
                "Skill comparison charts",
                "Improvement tracking",
                "Specialization bonuses"
              ]}
            />

            {/* Demo Mode */}
            <FeatureCard
              icon={<Gamepad2 className="h-6 w-6 text-[#2F80ED]" />}
              title="Demo Mode Onboarding"
              features={[
                "Wallet-free experience",
                "Tutorial walkthrough",
                "Mock predictions",
                "Sample rewards",
                "Feature exploration",
                "Upgrade to full mode",
                "Progress saving",
                "Guided tour"
              ]}
            />
          </div>
        </section>

        {/* AI Prediction Assistant */}
        <section id="ai-assistant" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Bot className="h-8 w-8 text-[#F3BA2F]" />
            AI Prediction Assistant
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* AI Analysis */}
            <FeatureCard
              icon={<Brain className="h-6 w-6 text-[#2F80ED]" />}
              title="AI Analysis Dashboard"
              features={[
                "Real-time event analysis",
                "Live prediction confidence",
                "Performance metrics charts",
                "Win probability calculations",
                "Strategy recommendations",
                "Data-driven insights",
                "Statistical breakdowns",
                "Trend analysis"
              ]}
            />

            {/* AI Chat Interface */}
            <FeatureCard
              icon={<Sparkles className="h-6 w-6 text-[#9D4EDD]" />}
              title="Interactive AI Chat"
              features={[
                "Natural language queries",
                "Event-specific advice",
                "Prediction strategy tips",
                "Historical data lookup",
                "Player/team analysis",
                "Risk assessment",
                "Confidence explanations",
                "Real-time responses"
              ]}
            />

            {/* AI Confidence Indicators */}
            <FeatureCard
              icon={<ChartBar className="h-6 w-6 text-[#F3BA2F]" />}
              title="AI Confidence System"
              features={[
                "Color-coded probability (Red/Yellow/Green)",
                "Percentage-based confidence",
                "Visual indicators on predictions",
                "Risk level classification",
                "High/Medium/Low markers",
                "Recommendation strength",
                "Confidence trends",
                "Accuracy tracking"
              ]}
            />

            {/* AI Recommendations */}
            <FeatureCard
              icon={<Target className="h-6 w-6 text-[#00ff88]" />}
              title="Smart Recommendations"
              features={[
                "Personalized event suggestions",
                "Optimal betting strategies",
                "Risk/reward analysis",
                "Portfolio optimization",
                "Timing recommendations",
                "Value bet identification",
                "Diversification tips",
                "Performance-based learning"
              ]}
            />
          </div>
        </section>

        {/* Calendar & Live Events */}
        <section id="calendar-events" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Calendar className="h-8 w-8 text-[#9D4EDD]" />
            Calendar & Live Event System
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sports Calendar */}
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-[#2F80ED]" />}
              title="Sports Calendar"
              features={[
                "Multi-sport event calendar",
                "Monthly/Weekly/Daily views",
                "Upcoming events list",
                "Event countdown timers",
                "Sport-specific calendars (F1, Football)",
                "Event filtering",
                "Date navigation",
                "Quick prediction access"
              ]}
            />

            {/* F1 Calendar */}
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-[#F3BA2F]" />}
              title="F1 Grand Prix Calendar"
              features={[
                "Full F1 season schedule",
                "Race weekend details",
                "Circuit information",
                "Practice/Quali/Race times",
                "Driver standings integration",
                "Track weather conditions",
                "Historical race data",
                "Prediction availability"
              ]}
            />

            {/* Football Calendar */}
            <FeatureCard
              icon={<Trophy className="h-6 w-6 text-[#9D4EDD]" />}
              title="Football Match Calendar"
              features={[
                "League fixtures",
                "Match schedules",
                "Team information",
                "Venue details",
                "League standings",
                "Head-to-head stats",
                "Form guides",
                "Prediction markets"
              ]}
            />

            {/* Live Events */}
            <FeatureCard
              icon={<Radio className="h-6 w-6 text-[#00ff88]" />}
              title="Real-Time Event Tracking"
              features={[
                "Live event status",
                "Countdown timers",
                "Event state management",
                "Prediction lock system",
                "Auto-lock before start",
                "Live updates during events",
                "Result notifications",
                "Post-event analytics"
              ]}
            />

            {/* Event Details */}
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-[#2F80ED]" />}
              title="Event Detail Pages"
              features={[
                "Comprehensive event info",
                "Participant details",
                "Historical statistics",
                "Current odds display",
                "AI predictions for event",
                "User prediction interface",
                "Social prediction stats",
                "Event timeline"
              ]}
            />

            {/* Calendar Widgets */}
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6 text-[#F3BA2F]" />}
              title="Dashboard Calendar Widget"
              features={[
                "Upcoming events preview",
                "Quick event access",
                "Today's highlights",
                "Event reminders",
                "Prediction status",
                "AI recommendations",
                "Compact calendar view",
                "Navigation to full calendar"
              ]}
            />
          </div>
        </section>

        {/* UI & Branding */}
        <section id="ui-branding" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Sparkles className="h-8 w-8 text-[#F3BA2F]" />
            UI & Branding Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Design System */}
            <FeatureCard
              icon={<Award className="h-6 w-6 text-[#9D4EDD]" />}
              title="Design System"
              features={[
                "Dark mode theme",
                "Neon accent colors (Yellow, Blue, Purple)",
                "Web3 aesthetic",
                "Gradient backgrounds",
                "Glass morphism effects",
                "Consistent spacing system",
                "Typography hierarchy",
                "Radix UI components"
              ]}
            />

            {/* Logo System */}
            <FeatureCard
              icon={<Star className="h-6 w-6 text-[#F3BA2F]" />}
              title="Professional Logo"
              features={[
                "Custom SVG logo design",
                "Hexagonal Web3 frame",
                "Gradient color scheme",
                "Animated elements",
                "Icon-only variant",
                "Multiple sizes",
                "Transparent background",
                "App icon ready"
              ]}
            />

            {/* Navigation */}
            <FeatureCard
              icon={<ChevronRight className="h-6 w-6 text-[#2F80ED]" />}
              title="Navigation System"
              features={[
                "React Router integration",
                "Sticky header",
                "Centered menu alignment",
                "Mobile responsive menu",
                "Active route highlighting",
                "Smooth transitions",
                "Breadcrumb support",
                "Deep linking"
              ]}
            />

            {/* Responsive Design */}
            <FeatureCard
              icon={<Users className="h-6 w-6 text-[#00ff88]" />}
              title="Responsive Layout"
              features={[
                "Mobile-first approach",
                "Tablet optimization",
                "Desktop enhancements",
                "Flexible grid system",
                "Touch-friendly controls",
                "Adaptive images",
                "Breakpoint management",
                "Cross-device testing"
              ]}
            />

            {/* Data Visualization */}
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6 text-[#9D4EDD]" />}
              title="Charts & Graphs"
              features={[
                "Recharts library integration",
                "Performance line charts",
                "Win rate pie charts",
                "Earnings area charts",
                "Reputation progress bars",
                "Skill level radar charts",
                "Interactive tooltips",
                "Responsive sizing"
              ]}
            />

            {/* Icons & Graphics */}
            <FeatureCard
              icon={<Sparkles className="h-6 w-6 text-[#F3BA2F]" />}
              title="Icons & Visual Elements"
              features={[
                "Lucide React icons",
                "Consistent icon sizing",
                "Color-coded categories",
                "Animated transitions",
                "Sport-specific imagery",
                "Badge system",
                "Loading states",
                "Empty states"
              ]}
            />
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Zap className="h-8 w-8 text-[#2F80ED]" />
            Technical Stack
          </h2>
          
          <div className="bg-[#16172a] rounded-xl border border-[#3a3b52] p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#F3BA2F]">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• React Router v7</li>
                  <li>• Vite</li>
                  <li>• Tailwind CSS v4</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#2F80ED]">UI Libraries</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Radix UI</li>
                  <li>• Lucide React Icons</li>
                  <li>• Recharts</li>
                  <li>• Motion (Framer)</li>
                  <li>• Custom SVG Components</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#9D4EDD]">Features</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Web3 Wallet Mock</li>
                  <li>• NFT Integration</li>
                  <li>• AI Assistant</li>
                  <li>• Real-time Updates</li>
                  <li>• Mock Data System</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 pb-4 border-b border-[#3a3b52]">
            <Trophy className="h-8 w-8 text-[#F3BA2F]" />
            Platform Statistics
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard
              value="15+"
              label="Complete Pages"
              color="text-[#F3BA2F]"
            />
            <StatCard
              value="100+"
              label="Components"
              color="text-[#2F80ED]"
            />
            <StatCard
              value="8"
              label="Major Features"
              color="text-[#9D4EDD]"
            />
            <StatCard
              value="30+"
              label="Achievement Types"
              color="text-[#00ff88]"
            />
            <StatCard
              value="2"
              label="Sports (F1, Football)"
              color="text-[#F3BA2F]"
            />
            <StatCard
              value="1000"
              label="Max Reputation"
              color="text-[#2F80ED]"
            />
            <StatCard
              value="4"
              label="NFT Rarity Tiers"
              color="text-[#9D4EDD]"
            />
            <StatCard
              value="100%"
              label="Responsive"
              color="text-[#00ff88]"
            />
          </div>
        </section>

        {/* Footer Note */}
        <div className="bg-gradient-to-r from-[#16172a] to-[#0a0b14] rounded-xl border border-[#3a3b52] p-8 text-center">
          <PredictXLogo size={50} className="justify-center mb-4" />
          <p className="text-gray-400 mb-2">
            PredictX is a complete, production-ready Web3 sports prediction platform
          </p>
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, Tailwind CSS, and modern Web3 technologies
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function FeatureCard({ 
  icon, 
  title, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  features: string[];
}) {
  return (
    <div className="bg-[#16172a] rounded-xl border border-[#3a3b52] p-6 hover:border-[#F3BA2F] transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0a0b14] border border-[#3a3b52]">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
            <ChevronRight className="h-4 w-4 text-[#F3BA2F] shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatCard({ 
  value, 
  label, 
  color 
}: { 
  value: string; 
  label: string; 
  color: string;
}) {
  return (
    <div className="bg-[#16172a] rounded-xl border border-[#3a3b52] p-6 text-center hover:border-[#F3BA2F] transition-colors">
      <div className={`text-3xl font-bold mb-2 ${color}`}>
        {value}
      </div>
      <div className="text-sm text-gray-400">
        {label}
      </div>
    </div>
  );
}
