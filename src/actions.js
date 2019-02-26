import { fetchBooks } from './api';

export const getBooks = title =>
  fetchBooks(title)
    .then(result => {
      return result.items.map(item => {
        const {
          authors,
          imageLinks,
          publisher = 'Unknown',
          previewLink,
          title = 'Unknown',
        } = item.volumeInfo;
        const author = authors && authors.length ? authors[0] : 'Unknown';
        const cover = imageLinks
          ? imageLinks.smallThumbnail
          : '//via.placeholder.com/128x194?No Cover';
        return { author, cover, previewLink, publisher, title };
      });
    });

