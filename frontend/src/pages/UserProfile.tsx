import React from 'react';
import '../styles/UserProfile.css';

const UserProfile: React.FC = () => {
    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-info">
                <p>Name: John Doe</p>
                <p>Email: johndoe@example.com</p>
                <p>Role: Pet Owner</p>
            </div>
            <button className="btn-edit">Edit Profile</button>
            <h3>Your Ads</h3>
            <div className="ads-container">
                <div className="ad-item">Looking for a sitter from 10/10 to 10/20</div>
            </div>
        </div>
    );
};

export default UserProfile;
