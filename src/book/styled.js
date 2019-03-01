import styled from 'styled-components';

export const DetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.3rem;
`;

export const BookImage = styled.img`
  display: flex;
  object-fit: contain;
  flex: 0 1 128px;
  /* just for firefox */
  max-width: 128px;
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

