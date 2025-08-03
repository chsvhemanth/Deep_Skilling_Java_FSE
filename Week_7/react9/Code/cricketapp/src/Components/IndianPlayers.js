import React from 'react';

const IndianPlayers = () => {
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];
  const [first,, third,, fifth] = IndianTeam;
  const [, second,, fourth,, sixth] = IndianTeam;

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h1>Odd Players</h1>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>

      <hr />
      <h1>Even Players</h1>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>

      <hr />
      <h1>List of Indian Players Merged:</h1>
      {mergedPlayers.map((p, i) => (
        <li key={i}>Mr. {p}</li>
      ))}
    </div>
  );
};

export default IndianPlayers;