import React, {Component} from 'react';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.searchText}
          onChange={event => this.handleChangeSearhText(event.target.value)}/>
      </div>
    );
  }

  handleChangeSearhText(searchText) {
    this.setState({searchText});
    this.props.onVideoSearch(searchText);
  }
};
export default SearchBar;
