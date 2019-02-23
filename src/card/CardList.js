/**
  author, title, publishing company
**/
import React from 'react';

class CardList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.length
          ? items.map((item, i) => (
            <div key={i}>
              <img src={item.cover} alt='no image' />
              <p>{item.title}</p>
              <p>{item.author}</p>
              <p>{item.publisher}</p>
            </div>
          ))
          : "Nothing to see here"
        }
      </div>
    );
  }
}

export default CardList;

