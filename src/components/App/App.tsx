import React from 'react';
import Game from '../Game';
import ScoreBoard from '../ScoreBoard';

function App() {
  return (
    <div>
      <main style={{ display: 'flex' }}>
        <Game />
        <ScoreBoard />
      </main>
    </div>
  );
}

export default App;
