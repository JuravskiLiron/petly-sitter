//import React from 'react';

const SitterCard = ({ sitter }: { sitter: any }) => {
  return (
    <div className="sitter-card">
      <img src={sitter.image} alt="Sitter Profile" className="sitter-img" />
      <div className="sitter-info">
        <h3>{sitter.name}</h3>
        <p>{sitter.location}</p>
        <p>Available: {sitter.availableDates}</p>
      </div>
      <button className="view-profile-btn">View Profile</button>
    </div>
  );
};

export default SitterCard;
