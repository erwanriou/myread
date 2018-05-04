import React from 'react';

import SearchBar from '../searchbar/SearchBar.js';
import BooksList from '../bookslist/BooksList.js';
import * as BookAPI from '../../util/bookAPI.js';

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BookAPI.getAll().then(books => this.setState({books: books}));
  }



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
