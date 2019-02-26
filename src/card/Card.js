import React from 'react';

import { Container } from './styled';
import { BookCover, BookDetail } from '../book';

const Card = ({ book }) =>
  <Container>
    <BookCover src={book.cover} />
    <BookDetail book={book} />
  </Container>;

export default Card;

