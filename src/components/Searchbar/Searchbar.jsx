import { Component } from "react";

class Searchbar extends Component {
  state = {
    searchValue: null,
  };

  handelNameChange = e => {
    const searchValue = e.currentTarget.value.toLowerCase();

    this.setState({ searchValue });
  }

  handelSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: null });
  };
 
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handelSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handelNameChange}  
          />
        </form>
      </header>
    )
  };
};

export default Searchbar;