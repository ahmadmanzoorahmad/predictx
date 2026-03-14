import { Link } from 'react-router';
import { Calendar, Clock, Zap, Timer, Trophy, Flag } from 'lucide-react';
import { 
  getUpcomingEvents, 
  getLiveEvents, 
  getClosingSoonEvents, 
  getRecommendedEvents 
} from '../data/sportsEvents';
import { CountdownTimer } from './CountdownTimer';

export function UpcomingEventsWidget() {
  const upcomingEvents = getUpcomingEvents().slice(0, 5);

  return (
    <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#00d4ff]" />
          Upcoming Events
        </h3>
        <Link to="/calendar" className="text-sm text-[#00d4ff] hover:underline">
          View Calendar
        </Link>
      </div>
      <div className="space-y-3">
        {upcomingEvents.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.sport_type.toLowerCase()}/${event.id}`}
            className="block rounded-lg border border-[#2a2b3d] bg-[#1f2130] p-4 hover:border-[#00d4ff] transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#00d4ff]">
                    {event.sport_type === 'F1' ? '🏎️ F1' : '⚽ Football'}
                  </span>
                  {event.ai_recommended && (
                    <span className="flex items-center gap-1 text-xs font-bold text-[#c946ff]">
                      <Zap className="w-3 h-3" />
                      AI
                    </span>
                  )}
                </div>
                <div className="font-semibold text-white text-sm mb-1">{event.event_title}</div>
                <div className="text-xs text-[#a1a1b0]">{event.competition_name}</div>
              </div>
              <div className="text-right">
                <CountdownTimer targetDate={event.date_time} compact showIcon={false} />
                <div className="text-xs text-[#a1a1b0] mt-1">
                  {new Date(event.date_time).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function LiveNowWidget() {
  const liveEvents = getLiveEvents();

  if (liveEvents.length === 0) {
    return (
      <div className="rounded-xl border border-[#2a2b3d] bg-[#151621] p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <h3 className="text-xl font-semibold text-white">Live Now</h3>
        </div>
        <div className="text-center py-8">
          <div className="text-gray-400 text-sm">No live events at the moment</div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#2a2b3d] bg-gradient-to-br from-[#151621] to-[#1f2130] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <h3 className="text-xl font-semibold text-white">Live Now</h3>
      </div>
      <div className="space-y-4">
        {liveEvents.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.sport_type.toLowerCase()}/${event.id}`}
            className="block rounded-lg border-2 border-red-500/50 bg-gradient-to-r from-red-900/20 to-orange-900/20 p-4 hover:border-red-400 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                🔴 LIVE
              </span>
              <span className="text-xs text-gray-300">{event.sport_type}</span>
            </div>
            <div className="font-bold text-white mb-1">{event.event_title}</div>
            <div className="text-sm text-gray-400">{event.venue}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ClosingSoonWidget() {
  const closingSoon = getClosingSoonEvents();

  if (closingSoon.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border-2 border-[#ffed4e] bg-gradient-to-br from-[#ffed4e]/10 to-[#ff8c00]/10 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Timer className="w-5 h-5 text-[#ffed4e]" />
        <h3 className="text-xl font-semibold text-white">Closing Soon</h3>
      </div>
      <div className="space-y-4">
        {closingSoon.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.sport_type.toLowerCase()}/${event.id}`}
            className="block rounded-lg border border-[#ffed4e]/30 bg-black/30 p-4 hover:border-[#ffed4e] transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#ffed4e]">
                {event.sport_type === 'F1' ? '🏎️ F1' : '⚽ Football'}
              </span>
            </div>
            <div className="font-semibold text-white text-sm mb-2">{event.event_title}</div>
            <div className="flex items-center gap-2 mb-2">
              <Timer className="w-4 h-4 text-[#ffed4e]" />
              <span className="text-xs text-gray-400">Predictions close in:</span>
            </div>
            <CountdownTimer targetDate={event.prediction_close_time} compact />
            <Link
              to={`/event/${event.sport_type.toLowerCase()}/${event.id}`}
              className="mt-3 block w-full bg-gradient-to-r from-[#ffed4e] to-[#ff8c00] hover:from-[#ffe01a] hover:to-[#ff7700] text-black font-bold py-2 px-4 rounded-lg text-center text-sm transition-all"
            >
              Predict Now
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function RecommendedEventsWidget() {
  const recommended = getRecommendedEvents();

  return (
    <div className="rounded-xl border-2 border-[#c946ff] bg-gradient-to-br from-[#151621] to-[#2a1f3d] p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#c946ff] to-[#00d4ff]">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">AI Recommended</h3>
          <p className="text-xs text-gray-400">Top picks for you</p>
        </div>
      </div>
      <div className="space-y-3">
        {recommended.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.sport_type.toLowerCase()}/${event.id}`}
            className="block rounded-lg border border-[#c946ff]/30 bg-gradient-to-r from-[#c946ff]/10 to-[#00d4ff]/10 p-4 hover:border-[#c946ff] transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#c946ff]">
                    {event.sport_type === 'F1' ? '🏎️' : '⚽'}
                  </span>
                  <span className="text-xs text-gray-400">{event.sport_type}</span>
                  <div className="flex items-center gap-1 bg-[#c946ff]/20 px-2 py-0.5 rounded-full">
                    <Zap className="w-3 h-3 text-[#c946ff]" />
                    <span className="text-xs font-bold text-[#c946ff]">{Math.floor(Math.random() * 20 + 75)}%</span>
                  </div>
                </div>
                <div className="font-semibold text-white text-sm mb-1">{event.event_title}</div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Trophy className="w-3 h-3" />
                  {event.reward_value}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/calendar"
        className="mt-4 block w-full bg-gradient-to-r from-[#c946ff] to-[#00d4ff] hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg text-center text-sm transition-all"
      >
        View All Events
      </Link>
    </div>
  );
}

export function CalendarQuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link
        to="/calendar/f1"
        className="group rounded-xl border border-[#c946ff]/30 bg-gradient-to-br from-[#c946ff]/10 to-[#ff0080]/10 p-6 hover:border-[#c946ff] transition-all"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 bg-gradient-to-br from-[#c946ff] to-[#ff0080] rounded-lg">
            <Flag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">Formula 1</h3>
            <p className="text-xs text-gray-400">Full season calendar</p>
          </div>
        </div>
        <div className="text-sm text-gray-300 group-hover:text-[#c946ff] transition-colors">
          View all F1 races →
        </div>
      </Link>

      <Link
        to="/calendar/football"
        className="group rounded-xl border border-[#00d4ff]/30 bg-gradient-to-br from-[#00d4ff]/10 to-[#00ff88]/10 p-6 hover:border-[#00d4ff] transition-all"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 bg-gradient-to-br from-[#00d4ff] to-[#00ff88] rounded-lg">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">Football</h3>
            <p className="text-xs text-gray-400">All leagues & cups</p>
          </div>
        </div>
        <div className="text-sm text-gray-300 group-hover:text-[#00d4ff] transition-colors">
          View all matches →
        </div>
      </Link>
    </div>
  );
}
