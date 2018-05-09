import React from 'react';
import './BooksList.css';
import Book from '../book/Book.js'

class BooksList extends React.Component {

  render () {
    return (
      <div className="bookList">
        {
          this.props.books.map(book => {
            return <Book
              book={book}
              key={book.id}
              shelf={book.shelf}
            />;
          })
        }
      </div>


    )
  }
}

export default BooksList;
