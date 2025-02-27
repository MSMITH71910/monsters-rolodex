import React from 'react';
import './MonsterCard.css'; // Import the CSS file for styling

const MonsterCard = ({ monster }) => {
  return (
    <div className="monster-card">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={`Monster ${monster.name}`}
      />
      <h2>{monster.name}</h2>
      <p>Email: {monster.email}</p>
    </div>
  );
};

export default MonsterCard;