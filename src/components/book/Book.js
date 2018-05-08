import React from 'react';
import './Book.css';
import noImage from '../../images/No_Image_Available.jpg'
import plus from '../../images/plus.svg'

class Book extends React.Component {

  //function to check if thumbnail exist and remplace if not
  checkThumbnail() {
    if (!this.props.book.imageLinks) {
      return   <img
          src={noImage}
          alt={this.props.book.title}/>
    } else {
      return <img
          src={this.props.book.imageLinks.thumbnail}
          alt={this.props.book.title}/>
    }
  }
  //to avoid gigantics caps titles
  checkTitleLength() {
    if (this.props.book.title.length < 50) {
      return <h1>Title : <strong>{this.props.book.title}</strong></h1>
    } else {
      return <h1>Title : <strong>See Details</strong></h1>
    }
  }

  render () {
    return (
      <div className="book">
        <div className="image">
          {this.checkThumbnail()}
        </div>
        <div className="text">
          {this.checkTitleLength()}
          <p>Author : <strong>{this.props.book.authors}</strong></p>
          <p>Language : <strong>{this.props.book.language}</strong></p>
          <a
            href={this.props.book.previewLink}
            target="_blank">
            Read More
          </a>
        </div>
        <select id="selectShelvee">
          <option value="none" selected disabled hidden>Move to...</option>
          <option value="read" className="select">Read</option>
          <option value="wantToRead" className="select">Want to Read</option>
          <option value="currentlyReading" className="select">Curently Reading</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Book;
