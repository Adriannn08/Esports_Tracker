import React from 'react';

const GameName = ({ title, description, onClick }) => {
  return (
    <div
      className="game-card"
      onClick={onClick}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        cursor: 'pointer',
        width: '200px',
        textAlign: 'center',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p> 
    </div>
  );
};

export default GameName; 
  