import React from 'react';
import {Link} from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends React.Component {

  render () {
    return (
      <div className="header">
        <Link
          className='link'
          to='/'>
          Back
        </Link>
        <input
          type="text"
          placeholder="Search"
          value={this.props.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar;
