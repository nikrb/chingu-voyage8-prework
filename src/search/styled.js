import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #88f;
  margin-bottom: 10px;
  padding: 5px;
  border: 2px solid #2a2;
  border-radius: 10px;
  box-shadow: 0 0 10px #7a7;
`;

export const SearchButtonStyle = styled.button`
  cursor: pointer;
  padding: 5px;
  background-color: #8f8;
  border-radius: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
  padding: 10px;
`;

export const Input = styled.input`
  line-height: 1.5rem;
  padding-left: 5px;
  border-radius: 5px;
  :focus {
    border: 2px solid #fff;
  }
`;

export const ClearButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
`;

