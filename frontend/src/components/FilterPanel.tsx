import React from 'react';

const FilterPanel: React.FC = () => {
  return (
    <div className="filter-panel">
      <input type="text" placeholder="Enter location" />
      <input type="date" />
      <button className="apply-filter-btn">Apply Filters</button>
    </div>
  );
};

export default FilterPanel;
