import React from 'react';

import { ClearButton, Input, InputWrapper } from './styled';

const InputClearable = ({ onChange, onClear, text }) =>
  <InputWrapper>
    <Input
      autoFocus
      placeholder="title"
      type="text"
      onChange={onChange}
      onKeyDown={onChange}
      value={text}
    />
    <ClearButton onClick={onClear}>x</ClearButton>
  </InputWrapper>;

export default InputClearable;

