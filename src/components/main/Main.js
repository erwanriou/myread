import React from 'react';
import {Link} from 'react-router-dom';

import './Main.css';
import BooksList from '../bookslist/BooksList.js';


class Main extends React.Component {

  render () {

    const curentlyReadingBooks = this.props.myBooks.filter(book => book.shelf === 'currentlyReading');
    const readBooks = this.props.myBooks.filter(book => book.shelf === 'read');
    const wantToReadBooks = this.props.myBooks.filter(book => book.shelf === 'wantToRead');

    return (
      <div>
        <header className='header'>
          <h1>Welcome to MyRead Applicaton - Featured by Udacity</h1>
          <Link
            className='link'
            to='/search'>
            Search a Book
          </Link>
        </header>
        <main>
          <BooksList
            books={curentlyReadingBooks}
            shelf={this.props.shelf}
          />
          <BooksList
            books={readBooks}
            shelf={this.props.shelf}
          />
          <BooksList
            books={wantToReadBooks}
            shelf={this.props.shelf}
          />
        </main>
      </div>
    )
  }
}

export default Main;
