import React from 'react';

import {
  BookAuthor,
  BookPreviewLink,
  BookPublisher,
  BookTitle,
  DetailBlock,
} from './styled';

const BookDetail = ({ book: { author, previewLink, publisher, title } }) =>
  <DetailBlock>
    <BookTitle>{title}</BookTitle>
    <BookAuthor>by {author}</BookAuthor>
    <BookPublisher>publisher {publisher}</BookPublisher>
    <div>
      <BookPreviewLink href={previewLink} target="_blank">
        Preview
      </BookPreviewLink>
    </div>
  </DetailBlock>;

export default BookDetail;

