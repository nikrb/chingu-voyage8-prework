export const getBooks = title => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=12`)
    .then(res => res.json());
};

