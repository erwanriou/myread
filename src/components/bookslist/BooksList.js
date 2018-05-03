import React from 'react';
import './BooksList.css';
import Book from '../book/Book.js'

class BooksList extends React.Component {

  render () {
    return (
      <div>
        <Book />
      </div>
    )
  }
}

export default BooksList;
