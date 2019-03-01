import { fetchBooks } from './api';

/*
error {
  code,
  message,
  errors: [{
    domain,
    reason,
    message,
    locationType: "parameter",
    location: {param name},
  }]
}
*/
export const getBooks = payload => {
  return fetchBooks(payload)
  .then(result => {
    if (result.error) {
      const { code, message } = result.error;
      throw new Error(`${code}: ${message}`);
    }
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
};

