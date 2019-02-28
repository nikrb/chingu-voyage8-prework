import styled from 'styled-components';

export const MessageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 10px 2.5rem 10px 10px;
  background-color: tomato;
  color: white;
  border-radius: 10px;
`;

export const ClearButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0.6rem;
  right: 0.5rem;
  border: 2px solid #f88;
  border-radius: 100%;
  padding: 0 5px;
  background-color: red;

  :hover {
    box-shadow: 0 0 10px darkred;
  }
`;

