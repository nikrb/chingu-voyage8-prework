import React from 'react';

class CardList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.length
          ? items.map((item, i) => <p key={i}>{item.volumeInfo.title}</p>)
          : "Nothing to see here"
        }
      </div>
    );
  }
}

export default CardList;

