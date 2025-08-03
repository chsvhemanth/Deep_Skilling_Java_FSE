import React from 'react';
import ListofPlayers from './Components/ListofPlayers.js';
import IndianPlayers from './Components/IndianPlayers.js';

function App() {
  const flag = false;

  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  return (
    <div className="App">
      {flag ? <ListofPlayers players={players} /> : <IndianPlayers />}
    </div>
  );
}

export default App;