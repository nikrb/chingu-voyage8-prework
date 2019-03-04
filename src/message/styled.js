import styled from 'styled-components';

export const MessageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 10px 2.5rem 10px 10px;
  background-color: tomato;
  background-image: linear-gradient(to right, #f64, #f97);
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
  background-image: linear-gradient(to bottom, #f88, #d44);

  :hover {
    box-shadow: 0 0 10px darkred;
  }
`;

