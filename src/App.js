import React, { Component } from 'react';
import './App.css';
import MonsterCard from './components/MonsterCard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [], // List of all monsters
      searchField: '', // Search input value
      filteredMonsters: [], // Filtered list of monsters
    };
  }

  componentDidMount() {
    // Fetch monsters from an API
    fetch('https://jsonplaceholder.typicode.com/users') // Example API
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users, filteredMonsters: users }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  // Event handler for search input
  handleSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    this.setState({ searchField, filteredMonsters });
  };

  // Sort monsters by a given attribute
  sortMonsters = (sortBy) => {
    const { filteredMonsters } = this.state;
    const sortedMonsters = [...filteredMonsters].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
    this.setState({ filteredMonsters: sortedMonsters });
  };

  render() {
    const { filteredMonsters, searchField } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Monsters Rolodex</h1>
          <input
            type="search"
            placeholder="Search monsters"
            value={searchField}
            onChange={this.handleSearchChange}
            className="search-box"
          />
          <div className="sort-buttons">
            <button onClick={() => this.sortMonsters('name')}>Sort by Name</button>
            <button onClick={() => this.sortMonsters('email')}>Sort by Email</button>
          </div>
        </header>
        <div className="monster-list">
          {filteredMonsters.map((monster) => (
            <MonsterCard key={monster.id} monster={monster} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;