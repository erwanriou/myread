import React from 'react';
// importing components from the app
import './App.css';
import Main from '../main/Main.js';
import SearchBar from '../searchbar/SearchBar.js';
import BooksList from '../bookslist/BooksList.js';
import * as BookAPI from '../../util/bookAPI.js';
// importing modules from node
import { Route} from 'react-router-dom';

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      query: ''
    }

    this.updateQuery = this.updateQuery.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
  }


  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
    if ((this.state.query)) {
      BookAPI.search(this.state.query)
        .then((books) => {
          if (books.error) {
            this.setState({books: []});
          } else {
            this.setState({books});
          }
        })
    }
  }

  clearQuery = (query) => {
    this.updateQuery('')
  }



  render() {
    return (
      <div>
        {/* Main landing page */}
        <Route exact path='/' render={() => (
          <Main />
        )} />
        {/* Page to Search new books */}
        <Route exact path='/search' render={() => (
          <div>
            <SearchBar
              query={this.state.query}
              updateQuery={this.updateQuery}
            />
            <BooksList books={this.state.books}/>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
