import React from 'react';
import BooksList from '../bookslist/BooksList.js';
import './CRShelves.css';

class CRShelves extends React.Component {

  render () {
    return (
      <div>
        <h1>Curently Reading</h1>
        <BooksList 
          books={this.props.books}
          shelf={this.props.shelf}
        />
      </div>
    )
  }
}

export default CRShelves;
