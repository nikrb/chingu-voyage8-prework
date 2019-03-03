import { BASE_URL, FETCH_BOOKS_MAX } from './constants';

export const fetchBooks = ({
  title,
  maxResults = FETCH_BOOKS_MAX,
  startIndex = 0 
}) =>
  fetch(`${BASE_URL}?q=${title}&startIndex=${startIndex}&maxResults=${maxResults}`)
  .then(res => res.json());

