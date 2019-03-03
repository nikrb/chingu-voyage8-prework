import React from 'react';

import { HistoryItemWrapper } from './styled';

class HistoryItem extends React.Component {
  onClick() {
    const { onSelect, value } = this.props;
    onSelect( value);
  }
  render() {
    const { value } = this.props;
    return (
      <HistoryItemWrapper name="HistoryItemWrapper" onClick={this.onClick.bind(this)}>
        {value}
      </HistoryItemWrapper>
    );
  }
}

export default HistoryItem;

