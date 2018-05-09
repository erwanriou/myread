import React from 'react';
import {Link} from 'react-router-dom';

import './Main.css';
import BooksList from '../bookslist/BooksList.js';


class Main extends React.Component {

  render () {

    //apply filter on each shelf
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
          <h2>Curently Reading</h2>
          <BooksList
            books={curentlyReadingBooks}
            updateShelf={this.props.updateShelf}
          />
          <h2>Want to Read</h2>
          <BooksList
            books={wantToReadBooks}
            updateShelf={this.props.updateShelf}
          />
          <h2>Read</h2>
          <BooksList
            books={readBooks}
            updateShelf={this.props.updateShelf}
          />
        </main>
      </div>
    )
  }
}

export default Main;
