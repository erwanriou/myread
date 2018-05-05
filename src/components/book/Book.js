import React from 'react';
import './Book.css';

class Book extends React.Component {

  render () {
    return (
      <div className="book">
        <div className="image">
          <img src={this.props.book.imageLinks.thumbnail} alt={this.props.book.title}/>
        </div>
        <div className="text">
          <h1>{this.props.book.title}</h1>
          <h2>{this.props.book.subtitle}</h2>  
        </div>

      </div>
    )
  }
}

export default Book;
