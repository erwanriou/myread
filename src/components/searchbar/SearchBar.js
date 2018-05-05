import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render () {
    return (
      <div>
        <input type="text" placeholder="Write the book you want to look for here"/>
      </div>
    )
  }
}

export default SearchBar;
