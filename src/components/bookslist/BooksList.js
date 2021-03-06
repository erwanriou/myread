import React from 'react';
import './BooksList.css';
import Book from '../book/Book.js'

class BooksList extends React.Component {

  render () {
    return (
      <div className="bookList">
        {this.props.books === 'No result Found'
        ? <p
            className="noresult">
            No result Found
          </p>
          : this.props.books.map(book => {
            return <Book
              book={book}
              shelf={book.shelf}
              updateShelf={this.props.updateShelf}
              key={book.id}
            />;
          })
        }
      </div>


    )
  }
}

export default BooksList;
