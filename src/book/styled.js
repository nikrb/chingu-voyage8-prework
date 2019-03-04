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
  margin: 0.5rem;
  box-shadow: 3px 5px 10px #222;
  /* just for firefox */
  max-width: 128px;
`;

export const BookAuthor = styled.p`
  color: #444;
  margin: 0.4rem;
`;

export const BookPreviewLink = styled.a`
  padding: 0.5rem;
  margin-left: 0.4rem;
  text-decoration: none;
  color: white;
  background: #8d8;
  line-height: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #444;

  :hover {
    box-shadow: none;
  }
`;

export const BookPublisher = styled.p`
  color: #ddd;
  margin: 0.4rem;
`;

export const BookTitle = styled.p`
  margin: 0.4rem;
`;

