import React from 'react';

class BookCover extends React.Component {
  render() {
    return (
      <img src={this.props.src} alt='missing' />
    );
  }
}

export default BookCover;

