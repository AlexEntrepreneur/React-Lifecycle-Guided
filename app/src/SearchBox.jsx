import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <form onSubmit={this.props.fetchDoggos}>
        <input
          type="text"
          value={this.props.doggoSearchText}
          onChange={this.props.onSearchInputChange}
        />
        <button>Fetch Doggos</button>
      </form>
    );
  }
}

export default SearchBox;