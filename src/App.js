import React, { Component } from 'react';

import SearchBox from './search';
import CardGrid from './card';
import Loader from './loader';

import { getBooks } from './actions';

class App extends Component {
  state = {
    books: [],
    isLoading: false,
  };
  search(title) {
    this.setState({ isLoading: true });
    getBooks(title)
    .then(result => {
      if (result.totalItems) {
        this.setState({ isLoading: false,
          books: result.items.map(item => {
            const {
              authors,
              imageLinks,
              publisher = 'Unknown',
              previewLink,
              title = 'Unknown',
            } = item.volumeInfo;
            const author = authors && authors.length ? authors[0] : 'Unknown';
            const cover = imageLinks
              ? imageLinks.smallThumbnail
              : '//via.placeholder.com/128x194?No Cover';
            return { author, cover, previewLink, publisher, title };
          }),
        });
      } else {
        this.setState({ books: [], isLoading: false });
      }
    });
  }
  render() {
    const { books = [], isLoading } = this.state;
    return (
      <div className="App">
        <h1>Book Finder</h1>
        <SearchBox onSearch={this.search.bind(this)} />
        {isLoading
          ? <Loader/>
          : books.length
            ? <CardGrid items={books} />
            : 'Nothing to see hear'
        }
      </div>
    );
  }
}

export default App;
