import styled from 'styled-components';

export const CardGrid = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  border: 2px solid #bbb;
  border-radius: 10px;
  margin-bottom: 10px;
  background-image: linear-gradient(to bottom, #ccf, #88c);
  box-shadow: 5px 5px 10px #aaa;

  @media (min-width: 600px) {
    margin-bottom: 0px;
  }
`;

