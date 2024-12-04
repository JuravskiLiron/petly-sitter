import React from 'react';
import '../styles/SitterSearchPage.css';
import SitterCard from '../components/SitterCard';

const SitterSearchPage: React.FC = () => {
    const sitters = [
        {name: 'Jane Smith', location: 'New York', availableDates: '10/10 - 10/20', image: '...'},
        {name: 'John Doe', location: 'Los Angeles', availableDates: '10/15 - 10/30', image: '...'},
    ];

    return (
        <div className="search-page-container">
            <h2>Find a Sitter</h2>
            <div className="search-results">
                {sitters.map((sitter, index) => (
                    <SitterCard key={index} sitter={sitter}/>
                ))}
            </div>
        </div>
    );
};

export default SitterSearchPage;
