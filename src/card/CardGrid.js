/**
  author, title, publishing company, book cover image, preview link
**/
import React from 'react';

import Card from './Card';
import { CardGrid } from './styled';

class CardList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <CardGrid>
        {items.length
          ? items.map((item, i) => <Card key={i} book={item} />)
          : "Nothing to see here"
        }
      </CardGrid>
    );
  }
}

export default CardList;

