import React from 'react';

import InputClearable from './InputClearable';
import SearchButton from './SearchButton';
import History from './History';

import { HistoryWrapper, SearchBoxWrapper } from './styled';
import { HISTORY_SHOW_MAX } from '../constants';

class SearchBox extends React.Component {
  state = {
    displayHistory: [],
    title: '',
    showAllHistory: false,
  };
  onChange(e) {
    switch(e.key) {
      case 'Enter':
        this.onSearch();
        break;
      case 'Escape':
        this.setState({ displayHistory: [] });
        break;
      default:
        const title = e.target.value;
        const { history } = this.props;
        const displayHistory = history.filter(h => h.indexOf(title) > -1);
        this.setState({ displayHistory, title });
        break;
    }
  }
  onClear() {
    this.setState({ title: '' });
  }
  onSearch() {
    const { title } = this.state;
    this.setState({ displayHistory: [] });
    this.props.onSearch(title);
  }
  onDismissHistory() {
    this.setState({ displayHistory: [] });
  }
  onSelectHistory(title) {
    this.setState({ displayHistory: [], title });
    this.props.onSearch(title);
  }
  render() {
    const { displayHistory, showAllHistory, title } = this.state;
    if (displayHistory.length > HISTORY_SHOW_MAX && !showAllHistory) {
      displayHistory.length = HISTORY_SHOW_MAX;
    }
    return (
      <HistoryWrapper>
        <SearchBoxWrapper>
          <InputClearable
            text={title}
            onChange={this.onChange.bind(this)}
            onClear={this.onClear.bind(this)}
          />
          <SearchButton onClick={this.onSearch.bind(this)} />
        </SearchBoxWrapper>
        {displayHistory.length
          ? <History
              items={displayHistory}
              onDismiss={this.onDismissHistory.bind(this)}
              onSelect={this.onSelectHistory.bind(this)}
            />
          : null
        }
      </HistoryWrapper>
    );
  }
}

export default SearchBox;

