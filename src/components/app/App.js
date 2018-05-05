import React from 'react';

import './App.css';
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
    BookAPI.search('linux').then(books => this.setState({books: books}));
  }



  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
        <BooksList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
