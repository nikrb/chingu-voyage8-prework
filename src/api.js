const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = ({ title, startIndex = 0 }) =>
  fetch(`${BASE_URL}?q=${title}&startIndex=${startIndex}&maxResults=12`)
  .then(res => res.json());

