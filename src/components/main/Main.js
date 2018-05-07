import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';

class Main extends React.Component {

  render () {
    return (
      <div>
        <Link
          to='/search'>
          Search a Book
        </Link>
      </div>
    )
  }
}

export default Main;
