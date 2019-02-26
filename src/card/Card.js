import React from 'react';

import { Container } from './styled';
import BookCover from './BookCover';
import BookDetail from './BookDetail';

const Card = ({ book }) =>
  <Container>
    <BookCover src={book.cover} />
    <BookDetail book={book} />
  </Container>;

export default Card;

