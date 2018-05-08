import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.string.isRequired
  }

  checkThumbnail() {
    if (!this.props.book.imageLinks.thumbnail) {
      return   <img
          src='#'
          alt={this.props.book.title}/>
    } else {
      return <img
          src={this.props.book.imageLinks.thumbnail}
          alt={this.props.book.title}/>
    }
  }

  render () {

    return (
      <div className="book">
        <div className="image">
          {this.checkThumbnail()}
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
