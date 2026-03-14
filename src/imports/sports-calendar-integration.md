Extend the existing PredictX platform by adding a complete real-time sports calendar and live event integration system for the 2 launch sports only:

1. Formula 1
2. Football

Important:
Do not redesign the whole app.
Only add the real-time calendar, event ingestion, event detail pages, prediction lock timing, and sports data sync flows.

Product context:
PredictX is a Web3 skill-based sports prediction platform where users make predictions on real-world sporting events, earn NFT achievement cards, build a digital prediction identity, use an AI prediction assistant, and trade collectible NFTs in a marketplace.

Goal:
Add a real-time sports event layer so the app automatically shows upcoming, live, and completed events for Formula 1 and Football, and allows users to make predictions before events start.

--------------------------------------------------
FEATURE MODULE TO ADD:
REAL-TIME SPORTS CALENDAR + EVENT DATA SYSTEM
--------------------------------------------------

Create the following screens, UI blocks, and user flows:

1. Global Real-Time Sports Calendar
Add a page called:
"PredictX Live Sports Calendar"

Show all upcoming and live events for:
- Formula 1
- Football

Views:
- Today
- This Week
- This Month

Each event card should show:
- Sport type icon
- Competition or league name
- Event title
- Teams or drivers
- Start date and time
- Countdown timer
- Live / Upcoming / Finished status
- Predict Now button
- View Details button

--------------------------------------------------

2. Formula 1 Calendar Module
Create a dedicated F1 season calendar screen.

Display:
- Full Formula 1 season schedule
- Grand Prix name
- Country flag
- Track / venue
- Practice sessions
- Qualifying time
- Sprint session if applicable
- Race start time
- Countdown timer
- Prediction open / closed status

Each F1 race detail page should include prediction categories:
- Race Winner
- Podium Finish
- Fastest Lap
- Safety Car Yes/No
- Pole Position (optional)

Include:
- Event status badges:
  Upcoming
  Live
  Finished

--------------------------------------------------

3. Football Calendar Module
Create a dedicated Football schedule screen.

Display:
- Match cards by competition
- League / tournament name
- Team names and logos
- Match date
- Kickoff time
- Venue if available
- Prediction status
- Countdown timer

Football event detail pages should include prediction categories:
- Match Winner
- Correct Score
- First Goal
- Clean Sheet
- Over/Under Goals (optional)

Support the ability to group matches by:
- FIFA tournaments
- International competitions
- Major football leagues

--------------------------------------------------

4. Event Detail Page
Create a universal event detail page usable for both F1 and Football.

Sections:
- Event title
- Date and time
- Live status
- Countdown to prediction close
- AI Prediction Assistant panel
- Prediction options
- Historical data section
- Event stats and trends
- Reward preview section
- NFT reward badge preview

Buttons:
- Make Prediction
- View AI Insights
- Add Reminder
- Share Event

--------------------------------------------------

5. Prediction Lock System
Add UI and logic for prediction closing rules.

Requirements:
- Show exact countdown until predictions close
- Lock predictions automatically at configured event cutoff time
- Show “Predictions Closed” state after lock
- Show “Live Event” state after event starts
- Show “Results Pending” after event finishes
- Show “Rewards Distributed” once results are finalized

Display status banner examples:
- Predictions close in 01:42:12
- Predictions are now closed
- Event is live
- Results are being verified
- Rewards have been distributed

--------------------------------------------------

6. Dashboard Calendar Widgets
Add these dashboard widgets:

A. Upcoming Events
- Next 5 events across F1 and Football

B. Live Now
- Events happening now

C. Closing Soon
- Events where prediction deadline is near

D. Recommended Events
- AI-recommended events to predict

Each card should have:
- Mini countdown
- Event title
- Sport tag
- Predict button

--------------------------------------------------

7. Calendar Filters and Sorting
Add filters:
- Sport: F1 / Football
- Competition
- Upcoming / Live / Finished
- Today / Week / Month

Sorting options:
- Soonest first
- Most popular
- Highest reward
- AI recommended

--------------------------------------------------

8. Demo Mode Calendar
Add real-time calendar support to demo mode.

Demo users can:
- View live and upcoming events
- Explore event details
- Simulate predictions

Show message:
"Demo Mode: live sports data is visible, but demo predictions do not mint blockchain rewards."

CTA:
"Connect Wallet to make real predictions and earn NFT rewards"

--------------------------------------------------

9. Notification / Reminder Layer
Add event reminder UX:

Users can:
- Set reminder for race start
- Set reminder before prediction close
- Follow favorite team or driver
- Follow only F1 or only Football

Notification examples:
- Japanese Grand Prix predictions close in 1 hour
- El Clasico kicks off in 30 minutes
- Your selected event is now live

--------------------------------------------------

10. Data Integration / Backend Notes
Design supporting admin and system notes for real-time sports data integration.

System should support:
- automatic event sync from sports data providers
- real-time event status updates
- schedule refresh
- result verification
- prediction lock timing
- event-to-reward mapping

Event object should include:
- sport_type
- competition_name
- event_id
- event_title
- participants
- date_time
- timezone
- status
- prediction_close_time
- result_status
- reward_type

--------------------------------------------------

11. Design Style Requirements
Maintain the existing PredictX visual language:
- dark Web3 dashboard
- neon yellow, electric blue, purple accents
- sports analytics visual style
- glowing cards
- premium futuristic UI
- responsive desktop + mobile layouts

Use visual distinctions:
- Formula 1 = sleek racetrack style cards
- Football = stadium light / scoreboard style cards

--------------------------------------------------

12. Technical Product Goal
This calendar module should make PredictX feel like a real sports intelligence platform, not a static prototype.

The final experience should allow users to:
- browse real sports schedules
- view upcoming and live events
- make timely predictions
- receive NFT rewards after verified results
- stay engaged through a constantly updated sports calendar