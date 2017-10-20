// Import React
import React from 'react';

// Import CSS
import './BusinessList.css';

// Import the Business Component
import Business from '../Business/Business';

// Create BusinessList Component
class BusinessList extends React.Component {
  render() {
    (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
};

// Export the BusinessList Component
export default BusinessList;
