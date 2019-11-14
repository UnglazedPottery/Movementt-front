import React, { Component } from 'react'

class SearchBox extends Component {

  state = {
    searchInput: 'Search...'
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value })
  }

  render() {
    return (
      <div >
        {/* <input className="search" onChange={this.handleInput} value={this.state.searchInput}></input> */}
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="text" value={this.state.searchInput} onChange={this.handleInput}/>
            <button className="btn btn-primary btn-sm" type="submit">Search</button>
        </form>
     </div>
        );
       }
     };
     
export default SearchBox;