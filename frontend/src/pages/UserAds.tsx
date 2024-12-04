import React from 'react';
import '../styles/UserAds.css';

const UserAds: React.FC = () => {
    return (
        <div className="ads-container">
            <h2>Your Ads</h2>
            <div className="ad-item">
                <h3>Need a sitter for my cat</h3>
                <p>Location: New York</p>
                <p>Dates: 10/10 - 10/15</p>
                <button className="btn-edit">Edit Ad</button>
            </div>
            <div className="ad-item">
                <h3>Looking for a sitter for my dog</h3>
                <p>Location: Los Angeles</p>
                <p>Dates: 10/20 - 10/25</p>
                <button className="btn-edit">Edit Ad</button>
            </div>
        </div>
    );
};

export default UserAds;
