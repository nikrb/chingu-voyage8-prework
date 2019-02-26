import React from 'react';

import InputClearable from './InputClearable';
import SearchButton from './SearchButton';

import { SearchBoxWrapper } from './styled';

class SearchBox extends React.Component {
  state = { title: '' };
  onChange(e) {
    if (e.key === 'Enter') {
      this.onClick();
    } else {
      this.setState({ title: e.target.value });
    }
  }
  onClear() {
    this.setState({ title: '' });
  }
  onClick() {
    this.props.onSearch(this.state.title);
  }
  render() {
    return (
      <SearchBoxWrapper>
        <InputClearable
          text={this.state.title}
          onChange={this.onChange.bind(this)}
          onClear={this.onClear.bind(this)}
        />
        <SearchButton onClick={this.onClick.bind(this)} />
      </SearchBoxWrapper>
    );
  }
}

export default SearchBox;

