import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Predictions } from "./pages/Predictions";
import { Leaderboard } from "./pages/Leaderboard";
import { Rewards } from "./pages/Rewards";
import { Profile } from "./pages/Profile";
import { NFTCollection } from "./pages/NFTCollection";
import { NFTMarketplace } from "./pages/NFTMarketplace";
import { PredictionIdentity } from "./pages/PredictionIdentity";
import { AIAssistant } from "./pages/AIAssistant";
import { SportsCalendar } from "./pages/SportsCalendar";
import { F1Calendar } from "./pages/F1Calendar";
import { FootballCalendar } from "./pages/FootballCalendar";
import { EventDetail } from "./pages/EventDetail";
import { NotFound } from "./pages/NotFound";
import { LogoShowcase } from "./components/LogoShowcase";
import { FeaturesDocumentation } from "./components/FeaturesDocumentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Landing },
      { path: "dashboard", Component: Dashboard },
      { path: "predictions", Component: Predictions },
      { path: "leaderboard", Component: Leaderboard },
      { path: "rewards", Component: Rewards },
      { path: "profile", Component: Profile },
      { path: "identity", Component: PredictionIdentity },
      { path: "nft-collection", Component: NFTCollection },
      { path: "nft-marketplace", Component: NFTMarketplace },
      { path: "ai-assistant", Component: AIAssistant },
      { path: "calendar", Component: SportsCalendar },
      { path: "calendar/f1", Component: F1Calendar },
      { path: "calendar/football", Component: FootballCalendar },
      { path: "event/:sport/:eventId", Component: EventDetail },
      { path: "logo-showcase", Component: LogoShowcase },
      { path: "features", Component: FeaturesDocumentation },
      { path: "*", Component: NotFound },
    ],
  },
]);