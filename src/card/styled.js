import styled from 'styled-components';

export const CardGrid = styled.div`
  display: flex;
  justifty-content: flex-start;
  flex: 1;
  /* align-items: flex-start; */

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
  }
`;

export const Container = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  padding: 0.3rem;
  margin: 0.3rem;
  border: 1px solid black;
  border-radius: 10px;
`;

