/**
  author, title, publishing company, book cover image, preview link
**/
import React from 'react';

import Card from './Card';
import { CardGrid } from './styled';

const CardList = ({ items }) =>
  <CardGrid>
    { items.map((item, i) => <Card key={i} book={item} />) }
  </CardGrid>;

export default CardList;

