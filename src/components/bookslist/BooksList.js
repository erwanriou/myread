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
              shelf={book.shelf}
              onChange={this.props.updateShelf}
              key={book.id}
            />;
          })
        }
      </div>


    )
  }
}

export default BooksList;
