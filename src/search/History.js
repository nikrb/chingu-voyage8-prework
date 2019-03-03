import React from 'react';

import HistoryItem from './HistoryItem';

import { CrossButton, HistoryPane } from './styled';

const History = ({ items, onDismiss, onSelect }) =>
    <HistoryPane name="HistoryPane">
      <CrossButton onClick={onDismiss}>x</CrossButton>
      {items.map(h => <HistoryItem key={h} onSelect={onSelect} value={h} name="HistoryItem" />)}
    </HistoryPane>

export default History;
