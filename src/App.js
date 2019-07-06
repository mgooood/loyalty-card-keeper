import React, { Component } from 'react';

import vic from './images/vic.png';
import safeway from './images/safeway.png';
import giant from './images/giant.png';
import cvs from './images/cvs.png';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loyaltyCards: [
        {
          id: 1,
          imgSrc: vic,
          name: 'VIC'
        },
        {
          id: 2,
          imgSrc: safeway,
          name: 'Safeway'
        },
        {
          id: 3,
          imgSrc: giant,
          name: 'Giant'
        },
        {
          id: 4,
          imgSrc: cvs,
          name: 'CVS'
        }
      ],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }  

  render() {
    const { loyaltyCards, searchField } = this.state;
    const filteredLoyaltyCards = loyaltyCards.filter( card => card.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1 className='title'>Loyalty Card Store</h1>
        <SearchBox 
          placeholder='search loyalty cards'
          handleChange={this.handleChange}
        />
        <CardList loyaltyCards={filteredLoyaltyCards} />
      </div>
    );
  }
}

export default App;
