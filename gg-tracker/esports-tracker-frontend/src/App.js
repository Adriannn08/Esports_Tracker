import React, { useState } from 'react';
import GameName from './components/GameName';
import Matchlist from './components/Matchlist';
import './App.css'; // Don't forget to import CSS




const dummyMatches = {
  'Mobile Legends': [
    { id: 1, team1: "TWIS", team2: "RORA", date: "2025-02-28 17:00" },
    { id: 2, team1: "ONIC", team2: "TNC", date: "2025-02-28 19:30" },
    { id: 3, team1: "FLCN", team2: "TLPH", date: "2025-03-01 14:30" },
    { id: 4, team1: "TNC", team2: "APBR", date: "2025-03-01 17:00" },
    { id: 5, team1: "RORA", team2: "ONIC", date: "2025-03-01 19:30" },
    { id: 6, team1: "OMG", team2: "FLCN", date: "2025-03-02 17:00" },
    { id: 7, team1: "TLPH", team2: "TWIS", date: "2025-03-02 19:30" },
    { id: 8, team1: "FLCN", team2: "ONIC", date: "2025-03-07 17:00" },
    { id: 9, team1: "APBR", team2: "RORA", date: "2025-03-07 19:30" },
    { id: 10, team1: "TNC", team2: "OMG", date: "2025-03-08 14:30" },
    { id: 11, team1: "TWIS", team2: "FLCN", date: "2025-03-08 17:00" },
    { id: 12, team1: "TLPH", team2: "APBR", date: "2025-03-08 19:30" },
    { id: 13, team1: "TWIS", team2: "TNC", date: "2025-03-09 17:00" },
    { id: 14, team1: "OMG", team2: "TLPH", date: "2025-03-09 19:30" },
    { id: 15, team1: "OMG", team2: "TWIS", date: "2025-03-14 17:00" },
    { id: 16, team1: "TNC", team2: "FLCN", date: "2025-03-14 19:30" },
    { id: 17, team1: "APBR", team2: "TWIS", date: "2025-03-15 14:30" },
    { id: 18, team1: "OMG", team2: "RORA", date: "2025-03-15 17:00" },
    { id: 19, team1: "TLPH", team2: "ONIC", date: "2025-03-15 19:30" },
    { id: 20, team1: "RORA", team2: "TNC", date: "2025-03-16 17:00" },
    { id: 21, team1: "ONIC", team2: "APBR", date: "2025-03-16 19:30" },
    { id: 22, team1: "TNC", team2: "TLPH", date: "2025-03-21 17:00" },
    { id: 23, team1: "APBR", team2: "OMG", date: "2025-03-21 19:30" },
    { id: 24, team1: "RORA", team2: "TLPH", date: "2025-03-22 14:30" },
    { id: 25, team1: "ONIC", team2: "OMG", date: "2025-03-22 17:00" },
    { id: 26, team1: "FLCN", team2: "APBR", date: "2025-03-22 19:30" },
    { id: 27, team1: "TWIS", team2: "ONIC", date: "2025-03-23 17:00" },
    { id: 28, team1: "FLCN", team2: "RORA", date: "2025-03-23 19:30" },
    { id: 29, team1: "RORA", team2: "TWIS", date: "2025-03-28 17:00" },
    { id: 30, team1: "TNC", team2: "ONIC", date: "2025-03-28 19:30" },
    { id: 31, team1: "TLPH", team2: "FLCN", date: "2025-03-29 14:30" },
    { id: 32, team1: "APBR", team2: "TNC", date: "2025-03-29 17:00" },
    { id: 33, team1: "ONIC", team2: "RORA", date: "2025-03-29 19:30" },
    { id: 34, team1: "FLCN", team2: "OMG", date: "2025-03-30 17:00" },
    { id: 35, team1: "TWIS", team2: "TLPH", date: "2025-03-30 19:30" },
    { id: 36, team1: "ONIC", team2: "FLCN", date: "2025-04-04 17:00" },
    { id: 37, team1: "RORA", team2: "APBR", date: "2025-04-04 19:30" },
    { id: 38, team1: "OMG", team2: "TNC", date: "2025-04-05 14:30" },
    { id: 39, team1: "FLCN", team2: "TWIS", date: "2025-04-05 17:00" },
    { id: 40, team1: "APBR", team2: "TLPH", date: "2025-04-05 19:30" },
    { id: 41, team1: "TNC", team2: "TWIS", date: "2025-04-06 17:00" },
    { id: 42, team1: "TLPH", team2: "OMG", date: "2025-04-06 19:30" },
    { id: 43, team1: "TWIS", team2: "OMG", date: "2025-04-25 17:00" },
    { id: 44, team1: "FLCN", team2: "TNC", date: "2025-04-25 19:30" },
    { id: 45, team1: "TWIS", team2: "APBR", date: "2025-04-26 14:30" },
    { id: 46, team1: "RORA", team2: "OMG", date: "2025-04-26 17:00" },
    { id: 47, team1: "ONIC", team2: "TLPH", date: "2025-04-26 19:30" },
    { id: 48, team1: "TNC", team2: "RORA", date: "2025-04-27 17:00" },
    { id: 49, team1: "APBR", team2: "ONIC", date: "2025-04-27 19:30" },
    { id: 50, team1: "TLPH", team2: "TNC", date: "2025-05-02 17:00" },
    { id: 51, team1: "OMG", team2: "APBR", date: "2025-05-02 19:30" },
    { id: 52, team1: "TLPH", team2: "RORA", date: "2025-05-03 14:30" },
    { id: 53, team1: "OMG", team2: "ONIC", date: "2025-05-03 17:00" },
    { id: 54, team1: "APBR", team2: "FLCN", date: "2025-05-03 19:30" },
    { id: 55, team1: "ONIC", team2: "TWIS", date: "2025-05-04 17:00" },
    { id: 56, team1: "RORA", team2: "FLCN", date: "2025-05-04 19:30" },
    { id: 57, team1: "RANK 3", team2: "RANK 6", date: "2024-05-28 15:00" },
    { id: 58, team1: "RANK 4", team2: "RANK 5", date: "2024-05-28 19:00" },
    { id: 59, team1: "Winner of Match 1", team2: "RANK 2", date: "2024-05-29 15:00" },
    { id: 60, team1: "Winner of Match 2", team2: "RANK 1", date: "2024-05-29 19:00" },
    { id: 61, team1: "Winner of Match 3", team2: "Winner of Match 4", date: "2024-05-30 15:00" },
    { id: 62, team1: "Loser of Match 3", team2: "Loser of Match 4", date: "2024-05-30 19:00" },
    { id: 63, team1: "Winner of Match 6", team2: "Loser of Match 5", date: "2024-05-31 17:00" },
    { id: 64, team1: "Winner of Match 5", team2: "Winner of Match 7", date: "2024-06-01 17:00" },
  ],

  'Valorant': [
    { id: 65, team1: "TALON", team2: "Gen.G", date: "2025-04-26 16:00" },
    { id: 66, team1: "DRX", team2: "T1", date: "2025-04-26 19:00" },
    { id: 67, team1: "BOOM Esports", team2: "Gen.G", date: "2025-04-27 16:00" },
    { id: 68, team1: "Rex Regum Qeon", team2: "DRX", date: "2025-04-27 18:10" },
    { id: 69, team1: "TALON", team2: "Nongshim RedForce", date: "2025-05-03 16:00" },
    { id: 70, team1: "T1", team2: "Paper Rex", date: "2025-05-03 18:00" },
    { id: 71, team1: "TBD", team2: "TBD", date: "2025-05-04 16:00" },
    { id: 72, team1: "TBD", team2: "TBD", date: "2025-05-04 18:00" },
    { id: 73, team1: "Gen.G", team2: "TBD", date: "2025-05-09 16:00" },
    { id: 74, team1: "TBD", team2: "TBD", date: "2025-05-09 18:00" },
    { id: 75, team1: "TBD", team2: "TBD", date: "2025-05-10 16:00" },
    { id: 76, team1: "TBD", team2: "TBD", date: "2025-05-11 16:00" },
  ],

  'League of Legends': [
    { id: 77, team1: "MGN Vikings Esports", team2: "Fukuoka SoftBank HAWKS gaming", date: "2025-04-19 17:30" },
    { id: 78, team1: "CTBC Flying Oyster", team2: "Talon", date: "2025-04-19 20:00" },
    { id: 79, team1: "DetonatioN FocusMe", team2: "The Chiefs Esports Club", date: "2025-04-20 17:30" },
    { id: 80, team1: "Team Secret Whales", team2: "GAM Esports", date: "2025-04-20 20:00" },
    { id: 81, team1: "The Chiefs Esports Club", team2: "Talon", date: "2025-04-26 17:30" },
    { id: 82, team1: "Fukuoka SoftBank HAWKS gaming", team2: "GAM Esports", date: "2025-04-26 20:00" },
    { id: 83, team1: "DetonatioN FocusMe", team2: "MGN Vikings Esports", date: "2025-04-27 17:30" },
    { id: 84, team1: "CTBC Flying Oyster", team2: "Team Secret Whales", date: "2025-04-27 20:00" },
    { id: 85, team1: "DetonatioN FocusMe", team2: "Fukuoka SoftBank HAWKS gaming", date: "2025-05-03 17:30" },
    { id: 86, team1: "GAM Esports", team2: "CTBC Flying Oyster", date: "2025-05-03 20:00" },
    { id: 87, team1: "The Chiefs Esports Club", team2: "MGN Vikings Esports", date: "2025-05-04 17:30" },
    { id: 88, team1: "Talon", team2: "Team Secret Whales", date: "2025-05-04 20:00" },
    { id: 89, team1: "GAM Esports", team2: "The Chiefs Esports Club", date: "2025-05-10 17:30" },
    { id: 90, team1: "Talon", team2: "Fukuoka SoftBank HAWKS gaming", date: "2025-05-10 20:00" },
    { id: 91, team1: "MGN Vikings Esports", team2: "Team Secret Whales", date: "2025-05-11 17:30" },
    { id: 92, team1: "DetonatioN FocusMe", team2: "CTBC Flying Oyster", date: "2025-05-11 20:00" },
  ]
};

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);


  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const handleBackToGames = () => {
    setSelectedGame(null);
  };

  const handleLogin = () => {
    if (password === '12345') {
      setIsLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
      setIsLoggedIn(false);
    }
  };


  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <div className="login-container">
          <h1 className="app-title-left">Esports Tracker</h1>
          <div className="login-card">
            <h2>Login</h2>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
            {loginError && <p className="login-error-message">Incorrect password</p>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="app-title-left" onClick={handleBackToGames} style={{ cursor: 'pointer' }}>
        Esports Tracker
      </h1>
      <div className="game-tabs">
        {Object.keys(dummyMatches).map((game) => (
          <button
            key={game}
            className={`game-tab-button ${selectedGame === game ? 'active' : ''}`}
            onClick={() => handleGameSelect(game)}
          >
            {game}
          </button>
        ))}
      </div>

      <div className="content-area">
        {selectedGame ? (
          <div className="match-history">
            <h2>{selectedGame} Match History</h2>
            <Matchlist matches={dummyMatches[selectedGame]} onBack={handleBackToGames} />
          </div>
        ) : (
          <div className="card-container">
            {Object.keys(dummyMatches).map((game) => (
              <GameName
                key={game}
                title={game}
                description={`Track ${game} matches!`}
                onClick={() => handleGameSelect(game)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;   