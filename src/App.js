// Importing the CSS file for styles

import React from 'react';
import './App.css';  

function App() {
  return (
    <div className="container">

      {/* Monthly Leaderboard Winner */}
      <div className="task-card leaderboard-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
        <div className="task-content">
          <p className="task-title">Monthly Leaderboard Winner 🏆</p>
          <p className="task-points">Earn 10 Points</p>
        </div>
      </div>

      {/* Claim 10 Points Every Hour */}

      <div className="task-card points-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
        <div className="task-content">
          <p className="task-title">Claim 10 Points Every Hour</p>
          <div className="claim-progress">
            <div className="progress-bar">
              <div></div>
            </div>
            <p className="claim-time">70% Ready</p>
          </div>
        </div>
      </div>

      {/* Share with 5 Friends */}

      <div className="task-card share-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
        <div className="task-content">
          <p className="task-title">Share with 5 friends!</p>
          <p className="task-points">Earn 10 Points</p>
        </div>
      </div>

      {/* Earn Daily Win Big Reward */}

      <div className="task-card reward-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
        <div className="task-content">
          <p className="task-title">Earn Daily Win Big Reward!</p>
          <p className="task-points">Earn 10 Points</p>
        </div>
      </div>

      {/* Weekly Leaderboard Prize */}

      <div className="task-card weekly-card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
        <div className="task-content">
          <p className="task-title">Weekly Leaderboard Prize</p>
          <p className="task-points">Earn 10 Points</p>
        </div>
      </div>
    </div>
  );
}

export default App;
