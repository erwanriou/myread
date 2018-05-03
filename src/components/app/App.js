import React from 'react';

import SearchBar from '../searchbar/SearchBar.js';
import BooksList from '../bookslist/BooksList.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
        <BooksList />
      </div>
    );
  }
}

export default App;
