import { Link } from 'react-router';
import { Flag, MapPin, Calendar, Clock, Trophy, Zap, ChevronRight, Timer } from 'lucide-react';
import { getF1Events } from '../data/sportsEvents';
import { CountdownTimer } from '../components/CountdownTimer';

export function F1Calendar() {
  const f1Events = getF1Events();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pb-20">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-red-900/20 to-orange-900/20 border-b border-purple-500/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMCwgMCwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <Link to="/calendar" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Calendar
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-purple-500 via-red-500 to-orange-500 rounded-2xl">
              <Flag className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Formula 1 Season 2026
              </h1>
              <p className="text-gray-400 mt-2 text-lg">Complete race calendar • Practice • Qualifying • Grand Prix</p>
            </div>
          </div>

          {/* Season Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400">{f1Events.length}</div>
              <div className="text-sm text-gray-400">Total Races</div>
            </div>
            <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-red-400">{f1Events.filter(e => e.status === 'upcoming').length}</div>
              <div className="text-sm text-gray-400">Upcoming</div>
            </div>
            <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400">{f1Events.filter(e => e.status === 'live').length}</div>
              <div className="text-sm text-gray-400">Live Now</div>
            </div>
            <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-4">
              <div className="text-3xl font-bold text-orange-400">{f1Events.filter(e => e.ai_recommended).length}</div>
              <div className="text-sm text-gray-400">AI Picks</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Race Calendar */}
        <div className="space-y-6">
          {f1Events.map((event, index) => (
            <div 
              key={event.id}
              className="group relative bg-gradient-to-r from-purple-900/20 via-red-900/20 to-orange-900/20 border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-400 transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            >
              {/* Race Number Badge */}
              <div className="absolute top-0 left-0 bg-gradient-to-br from-purple-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-br-2xl">
                Round {index + 1}
              </div>

              {/* AI Recommended Badge */}
              {event.ai_recommended && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  <Zap className="w-3.5 h-3.5" />
                  AI RECOMMENDED
                </div>
              )}

              <div className="p-8 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Event Info */}
                  <div className="lg:col-span-2">
                    {/* Status Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      {event.status === 'upcoming' && (
                        <div className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                          UPCOMING
                        </div>
                      )}
                      {event.status === 'live' && (
                        <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                          🔴 LIVE NOW
                        </div>
                      )}
                      {event.status === 'finished' && (
                        <div className="bg-gray-500/20 border border-gray-500/50 text-gray-400 px-3 py-1 rounded-full text-sm font-bold">
                          FINISHED
                        </div>
                      )}
                      <div className="text-sm text-gray-400">{event.timezone}</div>
                    </div>

                    {/* Grand Prix Name */}
                    <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                      <span className="text-4xl">{event.flag}</span>
                      {event.event_title}
                    </h2>

                    {/* Venue */}
                    <div className="flex items-center gap-2 text-gray-300 mb-6">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span className="text-lg">{event.venue}, {event.country}</span>
                    </div>

                    {/* Sessions Schedule */}
                    {event.sessions && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {event.sessions.practice1 && (
                          <SessionCard 
                            label="Practice 1" 
                            time={event.sessions.practice1}
                            color="blue"
                          />
                        )}
                        {event.sessions.practice2 && (
                          <SessionCard 
                            label="Practice 2" 
                            time={event.sessions.practice2}
                            color="blue"
                          />
                        )}
                        {event.sessions.practice3 && (
                          <SessionCard 
                            label="Practice 3" 
                            time={event.sessions.practice3}
                            color="blue"
                          />
                        )}
                        {event.sessions.sprint && (
                          <SessionCard 
                            label="Sprint Race" 
                            time={event.sessions.sprint}
                            color="orange"
                          />
                        )}
                        {event.sessions.qualifying && (
                          <SessionCard 
                            label="Qualifying" 
                            time={event.sessions.qualifying}
                            color="yellow"
                          />
                        )}
                        {event.sessions.race && (
                          <SessionCard 
                            label="🏁 Grand Prix" 
                            time={event.sessions.race}
                            color="red"
                            highlight
                          />
                        )}
                      </div>
                    )}

                    {/* Prediction Categories */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Prediction Categories:</div>
                      <div className="flex flex-wrap gap-2">
                        {event.prediction_categories.map(cat => (
                          <div 
                            key={cat}
                            className="bg-purple-900/30 border border-purple-500/30 px-3 py-1.5 rounded-lg text-sm text-purple-300"
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Reward */}
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                      <div>
                        <div className="text-sm text-gray-400">Potential Reward</div>
                        <div className="font-bold text-yellow-400">{event.reward_type} • {event.reward_value}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Countdown & Actions */}
                  <div className="space-y-4">
                    {event.status === 'upcoming' && (
                      <>
                        <div className="bg-black/40 border border-yellow-500/30 rounded-xl p-6">
                          <div className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                            <Timer className="w-4 h-4" />
                            Race starts in:
                          </div>
                          <CountdownTimer targetDate={event.date_time} showIcon={false} />
                        </div>

                        <div className="bg-black/40 border border-red-500/30 rounded-xl p-6">
                          <div className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Predictions close in:
                          </div>
                          <CountdownTimer targetDate={event.prediction_close_time} showIcon={false} />
                        </div>
                      </>
                    )}

                    <Link
                      to={`/event/f1/${event.id}`}
                      className="block w-full bg-gradient-to-r from-purple-500 via-red-500 to-orange-500 hover:from-purple-600 hover:via-red-600 hover:to-orange-600 text-white py-4 px-6 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl"
                    >
                      {event.status === 'upcoming' ? '🏎️ Make Prediction' : 'View Details'}
                    </Link>

                    <button className="w-full border border-purple-500/50 hover:bg-purple-500/10 text-purple-300 py-3 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                      <Timer className="w-5 h-5" />
                      Set Reminder
                    </button>

                    <Link
                      to="/ai-assistant"
                      className="block w-full border border-blue-500/50 hover:bg-blue-500/10 text-blue-300 py-3 px-6 rounded-xl font-medium transition-all text-center"
                    >
                      <Zap className="w-4 h-4 inline mr-2" />
                      AI Analysis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SessionCard({ 
  label, 
  time, 
  color,
  highlight = false 
}: { 
  label: string; 
  time: string; 
  color: string;
  highlight?: boolean;
}) {
  const colorClasses = {
    blue: 'border-blue-500/30 text-blue-400',
    yellow: 'border-yellow-500/30 text-yellow-400',
    orange: 'border-orange-500/30 text-orange-400',
    red: 'border-red-500/30 text-red-400',
  };

  return (
    <div className={`p-3 rounded-lg border ${colorClasses[color as keyof typeof colorClasses]} ${
      highlight ? 'bg-gradient-to-r from-red-900/30 to-orange-900/30' : 'bg-black/30'
    }`}>
      <div className={`text-xs mb-1 ${highlight ? 'font-bold' : 'text-gray-400'}`}>{label}</div>
      <div className={`text-sm font-mono ${highlight ? 'font-bold text-lg' : ''}`}>
        {new Date(time).toLocaleString('en-US', { 
          weekday: 'short',
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>
  );
}
