import React from 'react';

const ListofPlayers = ({ players }) => {
  const below70 = players.filter(p => p.score <= 70);

  return (
    <div>
      <h1>List of Players</h1>
      {players.map((p, i) => (
        <li key={i}>Mr. {p.name} <span>{p.score}</span></li>
      ))}
      <hr />
      <h1>List of Players having Scores Less than 70</h1>
      {below70.map((p, i) => (
        <li key={i}>Mr. {p.name} <span>{p.score}</span></li>
      ))}
    </div>
  );
};

export default ListofPlayers;