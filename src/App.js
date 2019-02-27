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
    .then(books => {
      this.setState({ books, isLoading: false });
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
