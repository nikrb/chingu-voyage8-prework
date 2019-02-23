export const getBooks = title => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
    .then(res => res.json());
};

