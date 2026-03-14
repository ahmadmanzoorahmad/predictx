import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, Filter, TrendingUp, Clock, MapPin, Trophy, Zap, Flag, Timer } from 'lucide-react';
import { sportsEvents, SportsEvent } from '../data/sportsEvents';
import { CountdownTimer } from '../components/CountdownTimer';
import * as Tabs from '@radix-ui/react-tabs';
import * as Select from '@radix-ui/react-select';

type TimeFrame = 'today' | 'week' | 'month';
type SportFilter = 'all' | 'F1' | 'Football';
type StatusFilter = 'all' | 'upcoming' | 'live' | 'finished';
type SortOption = 'soonest' | 'popular' | 'reward' | 'ai';

export function SportsCalendar() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('week');
  const [sportFilter, setSportFilter] = useState<SportFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('soonest');

  const filteredEvents = filterAndSortEvents(
    sportsEvents,
    timeFrame,
    sportFilter,
    statusFilter,
    sortBy
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pb-20">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-[#0a0a0f] to-blue-900/20 border-b border-purple-500/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEyNywgMCwgMjU1LCAwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Live Sports Calendar
              </h1>
              <p className="text-gray-400 mt-1">Real-time events • Formula 1 • Football</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <StatCard 
              icon={<Clock />} 
              label="Upcoming" 
              value={sportsEvents.filter(e => e.status === 'upcoming').length.toString()} 
              color="yellow"
            />
            <StatCard 
              icon={<Zap />} 
              label="Live Now" 
              value={sportsEvents.filter(e => e.status === 'live').length.toString()} 
              color="green"
            />
            <StatCard 
              icon={<Flag />} 
              label="F1 Races" 
              value={sportsEvents.filter(e => e.sport_type === 'F1' && e.status === 'upcoming').length.toString()} 
              color="purple"
            />
            <StatCard 
              icon={<Trophy />} 
              label="Matches" 
              value={sportsEvents.filter(e => e.sport_type === 'Football' && e.status === 'upcoming').length.toString()} 
              color="blue"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Filters and Tabs */}
        <div className="mb-8">
          <Tabs.Root value={timeFrame} onValueChange={(v) => setTimeFrame(v as TimeFrame)}>
            <Tabs.List className="flex gap-2 border-b border-purple-500/20 pb-2 mb-6">
              <Tabs.Trigger
                value="today"
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-gray-400 hover:text-white"
              >
                Today
              </Tabs.Trigger>
              <Tabs.Trigger
                value="week"
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-gray-400 hover:text-white"
              >
                This Week
              </Tabs.Trigger>
              <Tabs.Trigger
                value="month"
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-gray-400 hover:text-white"
              >
                This Month
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-400">Filters:</span>
            </div>

            <FilterButton
              label="All Sports"
              active={sportFilter === 'all'}
              onClick={() => setSportFilter('all')}
            />
            <FilterButton
              label="🏎️ Formula 1"
              active={sportFilter === 'F1'}
              onClick={() => setSportFilter('F1')}
            />
            <FilterButton
              label="⚽ Football"
              active={sportFilter === 'Football'}
              onClick={() => setSportFilter('Football')}
            />

            <div className="h-6 w-px bg-purple-500/20 mx-2"></div>

            <FilterButton
              label="All Status"
              active={statusFilter === 'all'}
              onClick={() => setStatusFilter('all')}
            />
            <FilterButton
              label="Upcoming"
              active={statusFilter === 'upcoming'}
              onClick={() => setStatusFilter('upcoming')}
            />
            <FilterButton
              label="Live"
              active={statusFilter === 'live'}
              onClick={() => setStatusFilter('live')}
            />

            <div className="ml-auto flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-purple-900/20 border border-purple-500/30 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-400"
              >
                <option value="soonest">Soonest First</option>
                <option value="popular">Most Popular</option>
                <option value="reward">Highest Reward</option>
                <option value="ai">AI Recommended</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <Calendar className="w-16 h-16 text-purple-400/30 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No events found for selected filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/calendar/f1" className="group">
            <div className="bg-gradient-to-br from-purple-900/30 to-red-900/30 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all">
              <Flag className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Formula 1 Calendar</h3>
              <p className="text-gray-400 mb-4">View full F1 season schedule with all practice, qualifying, and race sessions</p>
              <div className="text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
                View F1 Schedule →
              </div>
            </div>
          </Link>

          <Link to="/calendar/football" className="group">
            <div className="bg-gradient-to-br from-blue-900/30 to-green-900/30 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 transition-all">
              <Trophy className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-2">Football Calendar</h3>
              <p className="text-gray-400 mb-4">Browse matches across leagues including Champions League, La Liga, Premier League</p>
              <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                View Football Schedule →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  const colorClasses = {
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 text-yellow-400',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} border rounded-xl p-4`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
        active
          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
          : 'bg-purple-900/20 text-gray-400 hover:text-white border border-purple-500/30'
      }`}
    >
      {label}
    </button>
  );
}

function EventCard({ event }: { event: SportsEvent }) {
  const statusConfig = {
    upcoming: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/50', text: 'text-yellow-400', label: 'Upcoming' },
    live: { bg: 'bg-green-500/20', border: 'border-green-500/50', text: 'text-green-400', label: '🔴 LIVE' },
    finished: { bg: 'bg-gray-500/20', border: 'border-gray-500/50', text: 'text-gray-400', label: 'Finished' },
  };

  const status = statusConfig[event.status];
  const sportGradient = event.sport_type === 'F1' 
    ? 'from-purple-900/40 via-red-900/40 to-orange-900/40'
    : 'from-blue-900/40 via-green-900/40 to-blue-900/40';

  return (
    <div className={`group relative bg-gradient-to-br ${sportGradient} border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]`}>
      {/* AI Recommended Badge */}
      {event.ai_recommended && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          <Zap className="w-3 h-3" />
          AI PICK
        </div>
      )}

      {/* Sport Badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className={`${status.bg} ${status.border} border ${status.text} px-3 py-1 rounded-full text-xs font-bold`}>
          {status.label}
        </div>
        <div className="text-xs text-gray-400">{event.sport_type}</div>
        <div className="text-xs text-gray-500">•</div>
        <div className="text-xs text-gray-400">{event.competition_name}</div>
      </div>

      {/* Event Title */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
        {event.flag} {event.event_title}
      </h3>

      {/* Participants */}
      <div className="text-gray-300 mb-4">
        {event.participants.slice(0, 3).join(' • ')}
        {event.participants.length > 3 && ' +more'}
      </div>

      {/* Venue & Date */}
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          {event.venue}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {new Date(event.date_time).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>

      {/* Countdown */}
      {event.status === 'upcoming' && (
        <div className="mb-4 p-3 bg-black/30 rounded-lg border border-yellow-500/20">
          <div className="text-xs text-gray-400 mb-2">Predictions close in:</div>
          <CountdownTimer targetDate={event.prediction_close_time} compact />
        </div>
      )}

      {/* Reward */}
      <div className="flex items-center gap-2 mb-4 text-sm">
        <Trophy className="w-4 h-4 text-yellow-400" />
        <span className="text-yellow-400 font-medium">{event.reward_type}</span>
        <span className="text-gray-500">•</span>
        <span className="text-purple-400">{event.reward_value}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link 
          to={`/event/${event.sport_type.toLowerCase()}/${event.id}`}
          className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-2.5 px-4 rounded-lg font-medium text-center transition-all"
        >
          {event.status === 'upcoming' ? 'Predict Now' : 'View Details'}
        </Link>
        <button className="px-4 py-2.5 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all">
          <Timer className="w-5 h-5 text-purple-400" />
        </button>
      </div>
    </div>
  );
}

function filterAndSortEvents(
  events: SportsEvent[],
  timeFrame: TimeFrame,
  sportFilter: SportFilter,
  statusFilter: StatusFilter,
  sortBy: SortOption
): SportsEvent[] {
  let filtered = [...events];

  // Time frame filter
  const now = new Date('2026-03-13T12:00:00');
  if (timeFrame === 'today') {
    filtered = filtered.filter(e => {
      const eventDate = new Date(e.date_time);
      return eventDate.toDateString() === now.toDateString();
    });
  } else if (timeFrame === 'week') {
    const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    filtered = filtered.filter(e => {
      const eventDate = new Date(e.date_time);
      return eventDate >= now && eventDate <= weekFromNow;
    });
  } else if (timeFrame === 'month') {
    const monthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    filtered = filtered.filter(e => {
      const eventDate = new Date(e.date_time);
      return eventDate >= now && eventDate <= monthFromNow;
    });
  }

  // Sport filter
  if (sportFilter !== 'all') {
    filtered = filtered.filter(e => e.sport_type === sportFilter);
  }

  // Status filter
  if (statusFilter !== 'all') {
    filtered = filtered.filter(e => e.status === statusFilter);
  }

  // Sort
  if (sortBy === 'soonest') {
    filtered.sort((a, b) => new Date(a.date_time).getTime() - new Date(b.date_time).getTime());
  } else if (sortBy === 'popular') {
    filtered.sort((a, b) => (b.popularity_score || 0) - (a.popularity_score || 0));
  } else if (sortBy === 'reward') {
    filtered.sort((a, b) => {
      const aValue = parseInt((a.reward_value || '0').replace(/\D/g, ''));
      const bValue = parseInt((b.reward_value || '0').replace(/\D/g, ''));
      return bValue - aValue;
    });
  } else if (sortBy === 'ai') {
    filtered.sort((a, b) => (b.ai_recommended ? 1 : 0) - (a.ai_recommended ? 1 : 0));
  }

  return filtered;
}
