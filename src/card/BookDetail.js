import React from 'react';

import {
  BookAuthor,
  BookPreviewLink,
  BookPublisher,
  BookTitle,
  DetailBlock,
} from './styled';

class BookDetail extends React.Component {
  render() {
    const { author, previewLink, publisher, title } = this.props.book;
    return (
      <DetailBlock>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>by {author}</BookAuthor>
        <BookPublisher>publisher {publisher}</BookPublisher>
        <div>
          <BookPreviewLink href={previewLink} target="_blank">Preview</BookPreviewLink>
        </div>
      </DetailBlock>
    );
  }
}

export default BookDetail;

