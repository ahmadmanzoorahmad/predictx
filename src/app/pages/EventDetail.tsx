import { useParams, Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { 
  ChevronRight, 
  Clock, 
  MapPin, 
  Trophy, 
  Zap, 
  TrendingUp, 
  Calendar,
  Share2,
  Bell,
  Target,
  BarChart3,
  Award,
  Flag
} from 'lucide-react';
import { getEventById } from '../data/sportsEvents';
import { CountdownTimer } from '../components/CountdownTimer';
import * as Dialog from '@radix-ui/react-dialog';

export function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [selectedPredictions, setSelectedPredictions] = useState<{ [key: string]: string }>({});
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showDemoDialog, setShowDemoDialog] = useState(false);

  const event = getEventById(eventId || '');

  if (!event) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <Link to="/calendar" className="text-purple-400 hover:text-purple-300">
            Return to Calendar
          </Link>
        </div>
      </div>
    );
  }

  const isPredictionClosed = new Date(event.prediction_close_time) < new Date('2026-03-13T12:00:00');
  const isEventStarted = new Date(event.date_time) < new Date('2026-03-13T12:00:00');

  const handlePredictionSubmit = () => {
    // Demo mode check
    const isDemo = localStorage.getItem('demoMode') === 'true';
    if (isDemo) {
      setShowDemoDialog(true);
    } else {
      setShowSuccessDialog(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-6">
          <Link 
            to={`/calendar/${event.sport_type.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-4 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to {event.sport_type} Calendar
          </Link>

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full text-sm font-bold">
                  {event.sport_type}
                </div>
                <div className="text-sm text-gray-400">{event.competition_name}</div>
                {event.ai_recommended && (
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <Zap className="w-3 h-3" />
                    AI PICK
                  </div>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {event.flag} {event.event_title}
              </h1>

              <div className="flex flex-wrap gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  {event.venue}, {event.country}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  {new Date(event.date_time).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  {new Date(event.date_time).toLocaleTimeString('en-US', { 
                    hour: '2-digit',
                    minute: '2-digit'
                  })} {event.timezone}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="p-3 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all">
                <Bell className="w-5 h-5 text-purple-400" />
              </button>
              <button className="p-3 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all">
                <Share2 className="w-5 h-5 text-purple-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Banner */}
            {isPredictionClosed ? (
              <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-500/50 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-red-300">Predictions Closed</div>
                    <div className="text-sm text-gray-300">This event is {event.status === 'live' ? 'currently live' : 'finished'}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 border border-yellow-500/50 rounded-xl p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-xl text-yellow-300 mb-2">Predictions Close In:</div>
                    <CountdownTimer targetDate={event.prediction_close_time} />
                  </div>
                  <Target className="w-16 h-16 text-yellow-400/30" />
                </div>
              </div>
            )}

            {/* Prediction Categories */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-400" />
                Make Your Predictions
              </h2>

              <div className="space-y-6">
                {event.prediction_categories.map(category => (
                  <PredictionCategory
                    key={category}
                    category={category}
                    event={event}
                    disabled={isPredictionClosed}
                    selected={selectedPredictions[category]}
                    onSelect={(option) => setSelectedPredictions({ ...selectedPredictions, [category]: option })}
                  />
                ))}
              </div>

              {!isPredictionClosed && (
                <button
                  onClick={handlePredictionSubmit}
                  disabled={Object.keys(selectedPredictions).length === 0}
                  className="mt-8 w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg"
                >
                  Submit Predictions & Earn {event.reward_value}
                </button>
              )}
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-400" />
                AI Prediction Assistant
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-black/30 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <div className="font-medium text-blue-300 mb-1">Win Probability Analysis</div>
                      <div className="text-sm text-gray-300">
                        {event.sport_type === 'F1' 
                          ? 'AI predicts high podium probability based on recent qualifying performance and weather conditions.'
                          : 'Home team shows 68% win probability based on form, head-to-head, and venue advantage.'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-black/30 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <div className="font-medium text-blue-300 mb-1">Historical Performance</div>
                      <div className="text-sm text-gray-300">
                        {event.sport_type === 'F1'
                          ? 'Top drivers have 87% success rate at this circuit over past 5 seasons.'
                          : 'Teams average 2.8 goals per match in this fixture historically.'}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/ai-assistant"
                  className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-6 rounded-lg font-medium text-center transition-all"
                >
                  View Full AI Analysis →
                </Link>
              </div>
            </div>

            {/* Event Stats */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Event Statistics & Trends</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">{Math.floor(Math.random() * 5000 + 2000)}</div>
                  <div className="text-sm text-gray-400">Total Predictions</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">{Math.floor(Math.random() * 30 + 60)}%</div>
                  <div className="text-sm text-gray-400">Community Confidence</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400">{Math.floor(Math.random() * 10 + 85)}%</div>
                  <div className="text-sm text-gray-400">AI Accuracy Score</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg">
                  <div className="text-3xl font-bold text-green-400">{Math.floor(Math.random() * 20 + 70)}%</div>
                  <div className="text-sm text-gray-400">Average Win Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Countdown */}
            {!isEventStarted && (
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-sm text-gray-400 mb-3">Event starts in:</div>
                <CountdownTimer targetDate={event.date_time} showIcon={false} />
              </div>
            )}

            {/* Reward Preview */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="text-sm text-gray-400">Potential Reward</div>
                  <div className="font-bold text-lg text-yellow-400">{event.reward_type}</div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">XP Reward</span>
                  <span className="font-bold text-yellow-400">{event.reward_value}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">NFT Achievement</span>
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Flag className="w-5 h-5 text-purple-400" />
                Participants
              </h3>
              <div className="space-y-2">
                {event.participants.map((participant, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-black/30 rounded-lg text-sm font-medium"
                  >
                    {participant}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button className="w-full bg-purple-900/30 border border-purple-500/50 hover:bg-purple-500/20 text-purple-300 py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                <Bell className="w-5 h-5" />
                Set Reminder
              </button>
              <Link
                to="/ai-assistant"
                className="block w-full bg-blue-900/30 border border-blue-500/50 hover:bg-blue-500/20 text-blue-300 py-3 px-4 rounded-lg font-medium transition-all text-center"
              >
                <Zap className="w-4 h-4 inline mr-2" />
                AI Strategy Tips
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog.Root open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-900 to-blue-900 border border-purple-500 rounded-2xl p-8 max-w-md w-full z-50">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <Dialog.Title className="text-2xl font-bold mb-2">Prediction Submitted!</Dialog.Title>
              <Dialog.Description className="text-gray-300 mb-6">
                Your predictions have been recorded on the blockchain. You'll earn {event.reward_value} and an NFT achievement when results are verified.
              </Dialog.Description>
              <div className="flex gap-3">
                <Dialog.Close className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-all">
                  Close
                </Dialog.Close>
                <button 
                  onClick={() => navigate('/predictions')}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all"
                >
                  View My Predictions
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Demo Mode Dialog */}
      <Dialog.Root open={showDemoDialog} onOpenChange={setShowDemoDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-yellow-900 to-orange-900 border border-yellow-500 rounded-2xl p-8 max-w-md w-full z-50">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-yellow-400" />
              </div>
              <Dialog.Title className="text-2xl font-bold mb-2">Demo Mode Active</Dialog.Title>
              <Dialog.Description className="text-gray-300 mb-6">
                Live sports data is visible, but demo predictions do not mint blockchain rewards. Connect your wallet to make real predictions and earn NFT rewards!
              </Dialog.Description>
              <div className="flex gap-3">
                <Dialog.Close className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-all">
                  Continue Demo
                </Dialog.Close>
                <button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all">
                  Connect Wallet
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function PredictionCategory({ 
  category, 
  event, 
  disabled, 
  selected,
  onSelect 
}: { 
  category: string; 
  event: any; 
  disabled: boolean;
  selected: string;
  onSelect: (option: string) => void;
}) {
  const getOptions = (cat: string) => {
    switch (cat) {
      case 'Race Winner':
      case 'Podium Finish':
      case 'Pole Position':
        return event.participants.slice(0, 5);
      case 'Match Winner':
        return [...event.participants, 'Draw'];
      case 'Correct Score':
        return ['1-0', '2-0', '2-1', '3-0', '3-1', '1-1', '2-2'];
      case 'First Goal':
        return event.participants;
      case 'Clean Sheet':
      case 'Safety Car':
        return ['Yes', 'No'];
      case 'Fastest Lap':
        return event.participants.slice(0, 5);
      case 'Over/Under Goals':
        return ['Over 2.5', 'Under 2.5'];
      default:
        return ['Option 1', 'Option 2', 'Option 3'];
    }
  };

  const options = getOptions(category);
  const aiConfidence = [78, 85, 65, 72, 91];

  return (
    <div className="border-b border-purple-500/20 pb-6 last:border-b-0">
      <h3 className="font-bold text-lg mb-4">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option, index) => (
          <button
            key={option}
            onClick={() => !disabled && onSelect(option)}
            disabled={disabled}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selected === option
                ? 'border-purple-500 bg-purple-500/20'
                : 'border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{option}</span>
              {index < aiConfidence.length && (
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  aiConfidence[index] >= 80 ? 'bg-green-500/20 text-green-400' :
                  aiConfidence[index] >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  AI: {aiConfidence[index]}%
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
