import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HistoryPane = styled.div`
  background-color: white;
  position: absolute;
  top: 3rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #8ff;
  border-radius: 5px;
  box-shadow: 0 0 10px #7a7;
`;

export const HistoryItemWrapper = styled.div`
  padding: 5px;

  :hover {
    background-color: #eef;
  }
`;

export const SearchBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #88f, #ccf);
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
  background-image: linear-gradient(to bottom, #afa, #6b6);
  border-radius: 10px;
  box-shadow: 2px 2px 4px #aaa;

  :hover {
    background-image: linear-gradient( to bottom, #6b6, #afa);
    box-shadow: none;
  }
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

export const CrossButton = styled.div`
  position: absolute;
  font-size: 0.8rem;
  cursor: pointer;
  top: 0;
  right: 0;
  padding: 0 0.2rem;

  :hover {
    box-shadow: 0 0 5px darkred;
  }
`;

