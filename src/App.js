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
    .then(result => this.setState({ books: result.items }));
  }
  render() {
    const { books = [] } = this.state;
    console.log(books);
    return (
      <div className="App">
        <SearchBox onSearch={this.search.bind(this)} />
        <List items={books} />
      </div>
    );
  }
}

export default App;
