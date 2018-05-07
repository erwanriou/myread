import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  render () {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.props.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
        <button
          onClick={this.props.clearQuery}>
          Show all
        </button>
      </div>
    )
  }
}

export default SearchBar;
