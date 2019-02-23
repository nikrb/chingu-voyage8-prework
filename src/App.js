import React, { Component } from 'react';

import SearchBox from './SearchBox';
import List from './card/CardList';

import { getBooks } from './actions';

class App extends Component {
  state = {
    books: [],
  };
  search(title) {
    getBooks(title)
    .then(result => {
      if (result.totalItems) {
        console.log(result);
        this.setState({
          books: result.items.map(item => {
            const { authors, imageLinks, publisher = 'Unknown', title = 'Unknown' } = item.volumeInfo;
            const author = authors && authors.length ? authors[0] : 'Unknown';
            const cover = imageLinks ? imageLinks.smallThumbnail : '//via.placeholder.com/128x194?No Cover';
            return { author, cover, publisher, title };
          }),
        })
      } else {
        this.setState({ books: [] });
      }
    });
  }
  render() {
    const { books = [] } = this.state;
    return (
      <div className="App">
        <SearchBox onSearch={this.search.bind(this)} />
        <List items={books} />
      </div>
    );
  }
}

export default App;
