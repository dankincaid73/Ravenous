// Import React
import React from 'react';

// Import CSS
import './BusinessList.css';

// Import the Business Component
import Business from '../Business/Business';

// Create BusinessList Component
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
          {
              this.props.businesses.map(function(business, i) {
                  return <Business key={business.id} business={business} />;
              })
          }
      </div>
    );
  }
};

// Export the BusinessList Component
export default BusinessList;
