import React, { Component } from 'react';

import SearchBox from './search';
import CardGrid from './card';
import Loader from './loader';
import MessageLine from './message';

import { getBooks } from './actions';

class App extends Component {
  state = {
    books: [],
    isLoading: false,
    errmsg: '',
  };
  clearMsg() {
    this.setState({ errmsg: '' });
  }
  search(title) {
    if (title) {
      this.setState({ isLoading: true });
      getBooks(title)
      .then(books => {
        this.setState({ books, isLoading: false });
      });
    } else {
      this.setState({ errmsg: 'Please enter a (partial) title' });
    }
  }
  render() {
    const { books = [], isLoading, errmsg } = this.state;
    return (
      <div className="App">
        <h1>Book Finder</h1>
        {errmsg && <MessageLine text={errmsg} onClick={this.clearMsg.bind(this)} /> }
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
