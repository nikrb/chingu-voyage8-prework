import React from 'react';

import { MessageBox, ClearButton } from './styled';

const MessageLine = ({ text, onClick }) =>
  <MessageBox>
    {text}
    <ClearButton onClick={onClick}>x</ClearButton>
  </MessageBox>;

export default MessageLine;

