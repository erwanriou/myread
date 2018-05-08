import React from 'react';
import {Link} from 'react-router-dom';

import './Main.css';
import RShelves from '../rShelves/RShelves.js'
import WTRShelves from '../wTRShelves/WTRShelves.js'
import CRShelves from '../cRShelves/CRShelves.js'

class Main extends React.Component {

  render () {
    return (
      <div>
        <header className='header'>
          <h1>Welcome to MyRead Applicaton - Featured by Udacity</h1>
          <Link
            className='link'
            to='/search'>
            Search a Book
          </Link>
        </header>
        <main>
          <CRShelves
            books={this.props.myBooks}
            shelf={this.props.shelf}
          />
          <WTRShelves
            books={this.props.myBooks}
            shelf={this.props.shelf}
          />
          <RShelves
            books={this.props.myBooks}
            shelf={this.props.shelf}
          />
        </main>
      </div>
    )
  }
}

export default Main;
