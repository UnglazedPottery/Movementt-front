import React, { Component } from 'react'

class SearchBox extends Component {

    state = {
      searchInput: 'Search...'
    }

  handleChange(event) {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return(
      <div >
        <input className="search" onChange={this.handleInput} value={this.state.searchInput}></input>
     </div>
   );
  }
};

export default SearchBox;