import React from 'react';
// importing components from the app
import './App.css';
import Main from '../main/Main.js';
import SearchBar from '../searchbar/SearchBar.js';
import BooksList from '../bookslist/BooksList.js';
import Footer from '../footer/Footer.js';
import * as BookAPI from '../../util/bookAPI.js';
// importing modules from node
import { Route} from 'react-router-dom';

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      searchBooks: [],
      myBooks: [],
      query: ''
    }

    this.updateQuery = this.updateQuery.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
  }

  async componentDidMount() {
    const myBooks = await BookAPI.getAll();
    this.setState({myBooks});
  }

  async updateQuery(query) {
    this.setState(() => ({
      query: query.trim()
    }))
    if (this.state.query) {
      const searchBooks = await BookAPI.search(this.state.query);
      if (searchBooks.error) {
        this.setState({searchBooks: []});
      } else if (this.state.query === '') {
        this.setState({searchBooks: []});
      } else {
        this.setState({searchBooks});
      }
    }
  }

  async updateShelf(book, shelf) {
    let newBooks = this.state.myBooks.filter(myBooks => myBooks.id !== book.id)
    this.setState({
      myBooks: newBooks.concat([book])
    });
    book.shelf = shelf;
    await BookAPI.update(book, shelf);
  }

  render() {
    return (
      <div>
        {/* Main landing page */}
        <Route exact path='/' render={() => (
          <Main
            myBooks={this.state.myBooks}
            updateShelf={this.updateShelf}
          />
        )} />
        {/* Page to Search new books */}
        <Route exact path='/search' render={() => (
          <div>
            <SearchBar
              query={this.state.query}
              updateQuery={this.updateQuery}
            />
            <BooksList
              books={this.state.searchBooks}
              updateShelf={this.updateShelf}
            />
          </div>
        )} />
        {/* Main landing page */}
        <Route  path='/' render={() => (
          <Footer />
        )} />
      </div>
    );
  }
}

export default App;
