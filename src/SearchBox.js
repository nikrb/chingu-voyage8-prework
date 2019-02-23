import React from 'react';

class SearchBox extends React.Component {
  state = { title: '' };
  onChange(e) {
    this.setState({ title: e.target.value });
  }
  onClick() {
    this.props.onSearch(this.state.title);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)} />
        <button type="button" onClick={this.onClick.bind(this)} >Search</button>
      </div>
    );
  }
}

export default SearchBox;

