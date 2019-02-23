import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

export const Container = styled.div`
  display: flex;
  padding: 0.3rem;
  margin: 0.3rem;
  border: 1px solid black;
  border-radius: 10px;
`;

export const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.3rem;
`;

export const BookAuthor = styled.p`
  color: grey;
`;

export const BookPreviewLink = styled.a`
  padding: 0.5rem;
  text-decoration: none;
  color: white;
  background: lightgreen;
  line-height: 2rem;
  border-radius: 5px;
`;

export const BookPublisher = styled.p`
  color: lightgrey;
`;

export const BookTitle = styled.p`
`;

