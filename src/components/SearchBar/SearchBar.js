import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    term: "",
  };

  search = () => {
    this.props.onSearch(this.state.term);
  };

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
          value={this.state.term}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
