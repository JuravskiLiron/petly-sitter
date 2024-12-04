import React from 'react';
import '../styles/SitterProfile.css';

const SitterProfile: React.FC = () => {
    return (
        <div className="sitter-profile-container">
            <h2>Sitter Profile</h2>
            <div className="sitter-info">
                <p>Name: Jane Smith</p>
                <p>Location: New York</p>
                <p>Availability: 10/10 - 10/20</p>
            </div>
            <button className="btn-message">Message</button>
        </div>
    );
};

export default SitterProfile;
