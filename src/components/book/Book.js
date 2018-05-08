import React from 'react';
import './Book.css';
import noImage from '../../images/No_Image_Available.jpg'

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
