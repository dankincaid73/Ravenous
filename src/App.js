// Import all needed Components and files
import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends React.Component {
  // Retrieve Props and set State
  constructor(props) {
    super(props);
    this.state = { 'businesses' : [] };
    this.searchYelp = this.searchYelp.bind(this);
  }
  // Make a call to the searchYelp Method. Change state
  // when a response is recieved
  searchYelp( term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({ 'businesses': businesses });
    });
  }
  // Render Components
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
// Export App Component
export default App;
