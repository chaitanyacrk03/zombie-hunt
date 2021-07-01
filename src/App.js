import './App.css';
import React, { Component } from 'react';
import { CardList } from './component/cardlist/cardlist.component';
import { SearchBox } from './component/searchbox/search-box.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
      ],
      searchmonsters: ""
    }
  }
  handlechange = (e) => {
    this.setState({ searchmonsters: e.target.value })
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
      .then(value => this.setState({ monster: value }));
  };

  render() {
    return <div className="App">
      <h1> MONSTER HUNT</h1>
      <SearchBox placevalue="search monsters" handle={this.handlechange} />
      <CardList searchmonster={this.state.searchmonsters} monster={this.state.monster} />
    </div >
  }
}
export default App;