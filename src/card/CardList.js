/**
  author, title, publishing company, book cover image, preview link
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
              <img src={item.cover} alt='missing' />
              <p>{item.title}</p>
              <p>{item.author}</p>
              <p>{item.publisher}</p>
              <a href={item.previewLink} >Preview</a>
            </div>
          ))
          : "Nothing to see here"
        }
      </div>
    );
  }
}

export default CardList;

