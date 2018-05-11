import React from 'react';
import './Book.css';
import noImage from '../../images/No_Image_Available.jpg'

class Book extends React.Component {

  //function to check if thumbnail exist and remplace if not
  checkThumbnail() {
    const { imageLinks, title } = this.props.book
    const cover = imageLinks ? imageLinks.thumbnail : noImage
    return <img
      src={cover}
      alt={title}/>
  }
  //to avoid gigantics caps titles
  checkTitleLength() {
    if (this.props.book.title.length < 40) {
      return <h1>Title : <strong>{this.props.book.title}</strong></h1>
    } else {
      return <h1>Title : <strong>See Details</strong></h1>
    }
  }

  //to update the shelf
  checkSelectDefaultValue() {
    const {shelf} = this.props.book
    return <select
      value={shelf ? shelf : 'none'}
      onChange={(event) => this.props.updateShelf(this.props.book, event.target.value)}>
      <option value="read" className="select">Read</option>
      <option value="wantToRead" className="select">Want to Read</option>
      <option value="currentlyReading" className="select">Curently Reading</option>
      <option value="none">None</option>
    </select>
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
        {this.checkSelectDefaultValue()}
      </div>
    )
  }
}

export default Book;
