export interface SportsEvent {
  id: string;
  sport_type: 'F1' | 'Football';
  competition_name: string;
  event_id: string;
  event_title: string;
  participants: string[];
  date_time: string;
  timezone: string;
  status: 'upcoming' | 'live' | 'finished';
  prediction_close_time: string;
  result_status: 'pending' | 'verified' | 'distributed';
  reward_type: string;
  venue?: string;
  country?: string;
  flag?: string;
  sessions?: {
    practice1?: string;
    practice2?: string;
    practice3?: string;
    qualifying?: string;
    sprint?: string;
    race?: string;
  };
  team_logos?: {
    home?: string;
    away?: string;
  };
  prediction_categories: string[];
  ai_recommended?: boolean;
  popularity_score?: number;
  reward_value?: string;
}

// Helper to generate dates
const now = new Date('2026-03-13T12:00:00');

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toISOString();
};

const addHours = (date: Date, hours: number) => {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result.toISOString();
};

export const sportsEvents: SportsEvent[] = [
  // Formula 1 Events
  {
    id: 'f1-bahrain-2026',
    sport_type: 'F1',
    competition_name: 'Formula 1 World Championship',
    event_id: 'f1-bahrain-gp-2026',
    event_title: 'Bahrain Grand Prix',
    participants: ['Verstappen', 'Hamilton', 'Leclerc', 'Norris', 'Sainz'],
    date_time: addDays(now, 2),
    timezone: 'GMT+3',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 2)), -2),
    result_status: 'pending',
    reward_type: 'Gold NFT Achievement',
    venue: 'Bahrain International Circuit',
    country: 'Bahrain',
    flag: '🇧🇭',
    sessions: {
      practice1: addHours(new Date(addDays(now, 1)), 10),
      practice2: addHours(new Date(addDays(now, 1)), 14),
      practice3: addHours(new Date(addDays(now, 2)), 11),
      qualifying: addHours(new Date(addDays(now, 2)), 14),
      race: addDays(now, 2),
    },
    prediction_categories: ['Race Winner', 'Podium Finish', 'Fastest Lap', 'Safety Car', 'Pole Position'],
    ai_recommended: true,
    popularity_score: 95,
    reward_value: '500 XP',
  },
  {
    id: 'f1-saudi-2026',
    sport_type: 'F1',
    competition_name: 'Formula 1 World Championship',
    event_id: 'f1-saudi-gp-2026',
    event_title: 'Saudi Arabian Grand Prix',
    participants: ['Verstappen', 'Perez', 'Hamilton', 'Russell', 'Leclerc'],
    date_time: addDays(now, 9),
    timezone: 'GMT+3',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 9)), -2),
    result_status: 'pending',
    reward_type: 'Platinum NFT Achievement',
    venue: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    sessions: {
      practice1: addHours(new Date(addDays(now, 8)), 13),
      practice2: addHours(new Date(addDays(now, 8)), 17),
      practice3: addHours(new Date(addDays(now, 9)), 13),
      qualifying: addHours(new Date(addDays(now, 9)), 17),
      race: addDays(now, 9),
    },
    prediction_categories: ['Race Winner', 'Podium Finish', 'Fastest Lap', 'Safety Car', 'Pole Position'],
    ai_recommended: false,
    popularity_score: 88,
    reward_value: '450 XP',
  },
  {
    id: 'f1-australia-2026',
    sport_type: 'F1',
    competition_name: 'Formula 1 World Championship',
    event_id: 'f1-australia-gp-2026',
    event_title: 'Australian Grand Prix',
    participants: ['Piastri', 'Norris', 'Verstappen', 'Leclerc', 'Alonso'],
    date_time: addDays(now, 16),
    timezone: 'GMT+11',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 16)), -2),
    result_status: 'pending',
    reward_type: 'Diamond NFT Achievement',
    venue: 'Albert Park Circuit',
    country: 'Australia',
    flag: '🇦🇺',
    sessions: {
      practice1: addHours(new Date(addDays(now, 15)), 11),
      practice2: addHours(new Date(addDays(now, 15)), 15),
      practice3: addHours(new Date(addDays(now, 16)), 11),
      qualifying: addHours(new Date(addDays(now, 16)), 14),
      race: addDays(now, 16),
    },
    prediction_categories: ['Race Winner', 'Podium Finish', 'Fastest Lap', 'Safety Car', 'Pole Position'],
    ai_recommended: true,
    popularity_score: 92,
    reward_value: '550 XP',
  },
  {
    id: 'f1-japan-2026',
    sport_type: 'F1',
    competition_name: 'Formula 1 World Championship',
    event_id: 'f1-japan-gp-2026',
    event_title: 'Japanese Grand Prix',
    participants: ['Verstappen', 'Tsunoda', 'Hamilton', 'Leclerc', 'Sainz'],
    date_time: addDays(now, 23),
    timezone: 'GMT+9',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 23)), -2),
    result_status: 'pending',
    reward_type: 'Legendary NFT Achievement',
    venue: 'Suzuka Circuit',
    country: 'Japan',
    flag: '🇯🇵',
    sessions: {
      practice1: addHours(new Date(addDays(now, 22)), 10),
      practice2: addHours(new Date(addDays(now, 22)), 14),
      practice3: addHours(new Date(addDays(now, 23)), 11),
      qualifying: addHours(new Date(addDays(now, 23)), 14),
      race: addDays(now, 23),
    },
    prediction_categories: ['Race Winner', 'Podium Finish', 'Fastest Lap', 'Safety Car', 'Pole Position'],
    ai_recommended: true,
    popularity_score: 97,
    reward_value: '600 XP',
  },
  
  // Football Events
  {
    id: 'football-ucl-final-2026',
    sport_type: 'Football',
    competition_name: 'UEFA Champions League',
    event_id: 'ucl-final-2026',
    event_title: 'Champions League Final',
    participants: ['Real Madrid', 'Manchester City'],
    date_time: addHours(now, 36),
    timezone: 'GMT+1',
    status: 'upcoming',
    prediction_close_time: addHours(now, 34),
    result_status: 'pending',
    reward_type: 'Legendary NFT Achievement',
    venue: 'Wembley Stadium',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    team_logos: {
      home: '⚪',
      away: '🔵',
    },
    prediction_categories: ['Match Winner', 'Correct Score', 'First Goal', 'Clean Sheet', 'Over/Under Goals'],
    ai_recommended: true,
    popularity_score: 99,
    reward_value: '800 XP',
  },
  {
    id: 'football-el-clasico-2026',
    sport_type: 'Football',
    competition_name: 'La Liga',
    event_id: 'el-clasico-march-2026',
    event_title: 'El Clásico - Barcelona vs Real Madrid',
    participants: ['Barcelona', 'Real Madrid'],
    date_time: addDays(now, 3),
    timezone: 'GMT+1',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 3)), -2),
    result_status: 'pending',
    reward_type: 'Diamond NFT Achievement',
    venue: 'Camp Nou',
    country: 'Spain',
    flag: '🇪🇸',
    team_logos: {
      home: '🔴🔵',
      away: '⚪',
    },
    prediction_categories: ['Match Winner', 'Correct Score', 'First Goal', 'Clean Sheet', 'Over/Under Goals'],
    ai_recommended: true,
    popularity_score: 98,
    reward_value: '700 XP',
  },
  {
    id: 'football-world-cup-qualifier-1',
    sport_type: 'Football',
    competition_name: 'FIFA World Cup Qualifiers',
    event_id: 'wcq-eng-bra-2026',
    event_title: 'England vs Brazil',
    participants: ['England', 'Brazil'],
    date_time: addDays(now, 6),
    timezone: 'GMT',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 6)), -2),
    result_status: 'pending',
    reward_type: 'Platinum NFT Achievement',
    venue: 'Wembley Stadium',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    team_logos: {
      home: '🦁',
      away: '🇧🇷',
    },
    prediction_categories: ['Match Winner', 'Correct Score', 'First Goal', 'Clean Sheet', 'Over/Under Goals'],
    ai_recommended: false,
    popularity_score: 94,
    reward_value: '650 XP',
  },
  {
    id: 'football-premier-league-1',
    sport_type: 'Football',
    competition_name: 'Premier League',
    event_id: 'epl-liv-mci-2026',
    event_title: 'Liverpool vs Manchester City',
    participants: ['Liverpool', 'Manchester City'],
    date_time: addDays(now, 1),
    timezone: 'GMT',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 1)), -2),
    result_status: 'pending',
    reward_type: 'Gold NFT Achievement',
    venue: 'Anfield',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    team_logos: {
      home: '🔴',
      away: '🔵',
    },
    prediction_categories: ['Match Winner', 'Correct Score', 'First Goal', 'Clean Sheet', 'Over/Under Goals'],
    ai_recommended: true,
    popularity_score: 96,
    reward_value: '600 XP',
  },
  {
    id: 'football-serie-a-derby',
    sport_type: 'Football',
    competition_name: 'Serie A',
    event_id: 'seria-inter-milan-2026',
    event_title: 'Derby della Madonnina - Inter vs AC Milan',
    participants: ['Inter Milan', 'AC Milan'],
    date_time: addDays(now, 5),
    timezone: 'GMT+1',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 5)), -2),
    result_status: 'pending',
    reward_type: 'Platinum NFT Achievement',
    venue: 'San Siro',
    country: 'Italy',
    flag: '🇮🇹',
    team_logos: {
      home: '🔵⚫',
      away: '🔴⚫',
    },
    prediction_categories: ['Match Winner', 'Correct Score', 'First Goal', 'Clean Sheet', 'Over/Under Goals'],
    ai_recommended: false,
    popularity_score: 89,
    reward_value: '550 XP',
  },
  {
    id: 'football-bundesliga-1',
    sport_type: 'Football',
    competition_name: 'Bundesliga',
    event_id: 'buli-bayern-dortmund-2026',
    event_title: 'Der Klassiker - Bayern Munich vs Borussia Dortmund',
    participants: ['Bayern Munich', 'Borussia Dortmund'],
    date_time: addDays(now, 8),
    timezone: 'GMT+1',
    status: 'upcoming',
    prediction_close_time: addHours(new Date(addDays(now, 8)), -2),
    result_status: 'pending',
    reward_type: 'Diamond NFT Achievement',
    venue: 'Allianz Arena',
    country: 'Germany',
    flag: '🇩🇪',
    team_logos: {
      home: '🔴',
      away: '🟡⚫',
    },
    prediction_categories: ['Match Winner', 'Correct Score', 'First Goal', 'Clean Sheet', 'Over/Under Goals'],
    ai_recommended: true,
    popularity_score: 93,
    reward_value: '650 XP',
  },
  
  // Live and Finished Events for demonstration
  {
    id: 'f1-testing-live',
    sport_type: 'F1',
    competition_name: 'Formula 1 Pre-Season Testing',
    event_id: 'f1-testing-bahrain-2026',
    event_title: 'Pre-Season Testing - Day 3',
    participants: ['All Teams'],
    date_time: addHours(now, -2),
    timezone: 'GMT+3',
    status: 'live',
    prediction_close_time: addHours(now, -4),
    result_status: 'pending',
    reward_type: 'Bronze NFT Achievement',
    venue: 'Bahrain International Circuit',
    country: 'Bahrain',
    flag: '🇧🇭',
    prediction_categories: ['Fastest Team', 'Most Laps Completed'],
    ai_recommended: false,
    popularity_score: 65,
    reward_value: '200 XP',
  },
  {
    id: 'football-friendly-finished',
    sport_type: 'Football',
    competition_name: 'International Friendly',
    event_id: 'friendly-arg-uru-2026',
    event_title: 'Argentina vs Uruguay',
    participants: ['Argentina', 'Uruguay'],
    date_time: addDays(now, -2),
    timezone: 'GMT-3',
    status: 'finished',
    prediction_close_time: addHours(new Date(addDays(now, -2)), -2),
    result_status: 'distributed',
    reward_type: 'Silver NFT Achievement',
    venue: 'La Bombonera',
    country: 'Argentina',
    flag: '🇦🇷',
    team_logos: {
      home: '🇦🇷',
      away: '🇺🇾',
    },
    prediction_categories: ['Match Winner', 'Correct Score', 'First Goal', 'Clean Sheet'],
    ai_recommended: false,
    popularity_score: 78,
    reward_value: '400 XP',
  },
];

// Helper functions to filter events
export const getUpcomingEvents = () => 
  sportsEvents.filter(e => e.status === 'upcoming').sort((a, b) => 
    new Date(a.date_time).getTime() - new Date(b.date_time).getTime()
  );

export const getLiveEvents = () => 
  sportsEvents.filter(e => e.status === 'live');

export const getFinishedEvents = () => 
  sportsEvents.filter(e => e.status === 'finished').sort((a, b) => 
    new Date(b.date_time).getTime() - new Date(a.date_time).getTime()
  );

export const getEventsByTimeframe = (timeframe: 'today' | 'week' | 'month') => {
  const nowDate = new Date('2026-03-13T12:00:00');
  const events = getUpcomingEvents();
  
  switch (timeframe) {
    case 'today':
      return events.filter(e => {
        const eventDate = new Date(e.date_time);
        return eventDate.toDateString() === nowDate.toDateString();
      });
    case 'week':
      const weekFromNow = new Date(nowDate);
      weekFromNow.setDate(nowDate.getDate() + 7);
      return events.filter(e => {
        const eventDate = new Date(e.date_time);
        return eventDate <= weekFromNow;
      });
    case 'month':
      const monthFromNow = new Date(nowDate);
      monthFromNow.setMonth(nowDate.getMonth() + 1);
      return events.filter(e => {
        const eventDate = new Date(e.date_time);
        return eventDate <= monthFromNow;
      });
    default:
      return events;
  }
};

export const getF1Events = () => 
  sportsEvents.filter(e => e.sport_type === 'F1').sort((a, b) => 
    new Date(a.date_time).getTime() - new Date(b.date_time).getTime()
  );

export const getFootballEvents = () => 
  sportsEvents.filter(e => e.sport_type === 'Football').sort((a, b) => 
    new Date(a.date_time).getTime() - new Date(b.date_time).getTime()
  );

export const getEventById = (id: string) => 
  sportsEvents.find(e => e.id === id);

export const getClosingSoonEvents = () => {
  const nowDate = new Date('2026-03-13T12:00:00');
  const twoHoursFromNow = new Date(nowDate.getTime() + 2 * 60 * 60 * 1000);
  
  return getUpcomingEvents().filter(e => {
    const closeTime = new Date(e.prediction_close_time);
    return closeTime <= twoHoursFromNow && closeTime > nowDate;
  });
};

export const getRecommendedEvents = () => 
  getUpcomingEvents().filter(e => e.ai_recommended).slice(0, 5);
