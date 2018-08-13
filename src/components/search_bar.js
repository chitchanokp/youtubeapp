import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ' ' };
  }

  render() {
    // const {onSearchTermChange} = this.props

      return (
        <div className="search-bar">
          <a href="https://chitchanokp.github.io/youtubeapp/" className="btn btn-danger">MYTUBE</a>
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} 
          />

        </div>
      );
    }
  
    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
  }

export default SearchBar;