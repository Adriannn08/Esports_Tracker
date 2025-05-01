import React from 'react';


function Matchlist({ matches, onBack }) {
  return (
    <div className="match-list-container">
      <button onClick={onBack} className="back-button">
        Back to Games
      </button>
      <ul className="matches-grid">
        {matches.map((match) => {
          // Assuming your date format is now consistent, e.g., "YYYY-MM-DD HH:MM"
          const dateTimeParts = match.date.split(' ');
          const datePart = dateTimeParts[0];
          const timePart = dateTimeParts[1];

          return (
            <li key={match.id} className="match-item-detailed">
              <span className="match-time">{timePart}</span>
              <div className="teams-container">
                <span className="team">{match.team1}</span>
                <span className="versus">vs</span>
                <span className="team">{match.team2}</span>
              </div>
              <span className="match-date">{datePart}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Matchlist; 