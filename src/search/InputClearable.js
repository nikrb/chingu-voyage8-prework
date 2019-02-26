import React from 'react';

import { ClearButton, Input, InputWrapper } from './styled';

class InputClearable extends React.Component {
  constructor(props) {
    super(props);
    this.ipRef = React.createRef();
    this.onClear = this.onClear.bind(this);
  }
  onClear(e) {
    this.props.onClear();
    this.ipRef.current.focus();
  }
  render() {
    const { onChange, text } = this.props;
    return (
      <InputWrapper>
        <Input
          autoFocus
          placeholder="title"
          type="text"
          onChange={onChange}
          onKeyDown={onChange}
          value={text}
          ref={this.ipRef}
        />
        <ClearButton onClick={this.onClear}>x</ClearButton>
      </InputWrapper>
    );
  }
}

export default InputClearable;

