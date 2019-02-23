import React from 'react';

import { Container } from './styled';
import BookCover from './BookCover';
import BookDetail from './BookDetail';

class Card extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <Container>
        <BookCover src={book.cover} />
        <BookDetail book={book} />
      </Container>
    );
  }
}

export default Card;

