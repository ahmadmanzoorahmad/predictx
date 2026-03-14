import { useState } from 'react';
import { Link } from 'react-router';
import { Trophy, MapPin, Clock, Zap, ChevronRight, Timer, Filter } from 'lucide-react';
import { getFootballEvents } from '../data/sportsEvents';
import { CountdownTimer } from '../components/CountdownTimer';

export function FootballCalendar() {
  const footballEvents = getFootballEvents();
  const [competitionFilter, setCompetitionFilter] = useState<string>('all');

  const competitions = ['all', ...new Set(footballEvents.map(e => e.competition_name))];
  const filteredEvents = competitionFilter === 'all' 
    ? footballEvents 
    : footballEvents.filter(e => e.competition_name === competitionFilter);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pb-20">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-green-900/20 to-blue-900/20 border-b border-blue-500/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIiBzdHJva2U9InJnYmEoMCwgMTI3LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-40"></div>
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <Link to="/calendar" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Calendar
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 rounded-2xl">
              <Trophy className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Football Calendar 2026
              </h1>
              <p className="text-gray-400 mt-2 text-lg">Champions League • Premier League • La Liga • Serie A • Bundesliga</p>
            </div>
          </div>

          {/* Season Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400">{footballEvents.length}</div>
              <div className="text-sm text-gray-400">Total Matches</div>
            </div>
            <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400">{footballEvents.filter(e => e.status === 'upcoming').length}</div>
              <div className="text-sm text-gray-400">Upcoming</div>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400">{competitions.length - 1}</div>
              <div className="text-sm text-gray-400">Competitions</div>
            </div>
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400">{footballEvents.filter(e => e.ai_recommended).length}</div>
              <div className="text-sm text-gray-400">AI Picks</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Competition Filter */}
        <div className="mb-8 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">Competition:</span>
          </div>
          {competitions.map(comp => (
            <button
              key={comp}
              onClick={() => setCompetitionFilter(comp)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                competitionFilter === comp
                  ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                  : 'bg-blue-900/20 text-gray-400 hover:text-white border border-blue-500/30'
              }`}
            >
              {comp === 'all' ? 'All Competitions' : comp}
            </button>
          ))}
        </div>

        {/* Matches by Competition */}
        <div className="space-y-8">
          {getGroupedEvents(filteredEvents).map(group => (
            <div key={group.competition}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-blue-400" />
                {group.competition}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {group.events.map(event => (
                  <MatchCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MatchCard({ event }: { event: any }) {
  const [homeTeam, awayTeam] = event.participants;
  
  const statusConfig = {
    upcoming: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/50', text: 'text-yellow-400', label: 'UPCOMING' },
    live: { bg: 'bg-green-500/20', border: 'border-green-500/50', text: 'text-green-400', label: '🔴 LIVE' },
    finished: { bg: 'bg-gray-500/20', border: 'border-gray-500/50', text: 'text-gray-400', label: 'FINISHED' },
  };

  const status = statusConfig[event.status];

  return (
    <div className="group relative bg-gradient-to-br from-blue-900/30 via-green-900/30 to-blue-900/30 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
      {/* AI Recommended Badge */}
      {event.ai_recommended && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          <Zap className="w-3 h-3" />
          AI PICK
        </div>
      )}

      {/* Status Badge */}
      <div className={`${status.bg} ${status.border} border ${status.text} px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block`}>
        {status.label}
      </div>

      {/* Teams */}
      <div className="mb-6">
        {/* Home Team */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
            {event.team_logos?.home || '⚽'}
          </div>
          <div className="flex-1">
            <div className="font-bold text-xl">{homeTeam}</div>
            <div className="text-sm text-gray-400">Home</div>
          </div>
        </div>

        {/* VS Divider */}
        <div className="text-center text-gray-400 font-bold text-sm my-2">VS</div>

        {/* Away Team */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-2xl">
            {event.team_logos?.away || '⚽'}
          </div>
          <div className="flex-1">
            <div className="font-bold text-xl">{awayTeam}</div>
            <div className="text-sm text-gray-400">Away</div>
          </div>
        </div>
      </div>

      {/* Match Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <MapPin className="w-4 h-4 text-blue-400" />
          {event.venue}, {event.country} {event.flag}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Clock className="w-4 h-4 text-blue-400" />
          {new Date(event.date_time).toLocaleString('en-US', { 
            weekday: 'long',
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>

      {/* Countdown */}
      {event.status === 'upcoming' && (
        <div className="mb-6 space-y-3">
          <div className="p-3 bg-black/30 rounded-lg border border-yellow-500/20">
            <div className="text-xs text-gray-400 mb-2">Kickoff in:</div>
            <CountdownTimer targetDate={event.date_time} compact />
          </div>
          <div className="p-3 bg-black/30 rounded-lg border border-red-500/20">
            <div className="text-xs text-gray-400 mb-2">Predictions close in:</div>
            <CountdownTimer targetDate={event.prediction_close_time} compact />
          </div>
        </div>
      )}

      {/* Prediction Categories */}
      <div className="mb-6">
        <div className="text-xs text-gray-400 mb-2">Predict:</div>
        <div className="flex flex-wrap gap-2">
          {event.prediction_categories.slice(0, 3).map((cat: string) => (
            <div 
              key={cat}
              className="bg-blue-900/30 border border-blue-500/30 px-2 py-1 rounded text-xs text-blue-300"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Reward */}
      <div className="flex items-center gap-2 mb-6 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg">
        <Trophy className="w-4 h-4 text-yellow-400" />
        <div className="flex-1">
          <div className="text-xs text-gray-400">Reward</div>
          <div className="text-sm font-bold text-yellow-400">{event.reward_value}</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link 
          to={`/event/football/${event.id}`}
          className="flex-1 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 px-4 rounded-lg font-medium text-center transition-all"
        >
          {event.status === 'upcoming' ? '⚽ Predict Match' : 'View Details'}
        </Link>
        <button className="px-4 py-3 border border-blue-500/50 rounded-lg hover:bg-blue-500/10 transition-all">
          <Timer className="w-5 h-5 text-blue-400" />
        </button>
      </div>
    </div>
  );
}

function getGroupedEvents(events: any[]) {
  const groups: { [key: string]: any[] } = {};
  
  events.forEach(event => {
    if (!groups[event.competition_name]) {
      groups[event.competition_name] = [];
    }
    groups[event.competition_name].push(event);
  });

  return Object.entries(groups).map(([competition, events]) => ({
    competition,
    events: events.sort((a, b) => new Date(a.date_time).getTime() - new Date(b.date_time).getTime())
  }));
}
