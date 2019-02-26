import React from 'react';

import { ClearButton, Input, InputWrapper } from './styled';

class InputClearable extends React.Component {
  render() {
    return (
      <InputWrapper>
        <Input autoFocus type="text" onChange={this.props.onChange.bind(this)} value={this.props.text} />
        <ClearButton onClick={this.props.onClear}>x</ClearButton>
      </InputWrapper>
    );
  }
}

export default InputClearable;

