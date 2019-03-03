import React, { Component } from 'react';

import SearchBox from './search';
import CardGrid from './card';
import Loader from './loader';
import MessageLine from './message';

import { getBooks } from './actions';

import { FETCH_BOOKS_MAX } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: false,
      isLoadingMore: false,
      errmsg: '',
      history: JSON.parse(localStorage.getItem('history')) || [],
    };
    this.startIndex = 0;
    this.searchText = '';
    this.handleScroll = this.handleScroll.bind(this);
  }
  clearMsg() {
    this.setState({ errmsg: '' });
  }
  handleScroll(e) {
    if (document.documentElement.scrollHeight - (window.innerHeight + window.scrollY) < 10) {
      const { isLoading, isLoadingMore } = this.state;
      if (!isLoading && !isLoadingMore) {
        this.setState({ isLoadingMore: true });
        getBooks({
          title: this.searchText,
          startIndex: this.startIndex + FETCH_BOOKS_MAX,
          maxResults: FETCH_BOOKS_MAX,
        })
        .then(books => {
          this.startIndex += FETCH_BOOKS_MAX;
          this.setState({
            isLoadingMore: false,
            books: this.state.books.concat(books),
          });
        })
        .catch(err => {
          this.setState({
            errmsg: err.message,
            isLoadingMore: false,
          });
        });
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  search(title) {
    if (title) {
      this.searchText = title;
      this.setState({ isLoading: true });
      getBooks({ title, maxResults: FETCH_BOOKS_MAX })
      .then(books => {
        this.setState({ books, isLoading: false });
        if (!this.state.history.includes(title)) {
          const history = this.state.history.concat(title).sort();
          this.setState({ history });
          localStorage.setItem('history', JSON.stringify(history));
        }
      })
      .catch(err => {
        this.setState({
          errmsg: err,
          isLoading: false,
        });
      });
    } else {
      this.setState({ errmsg: 'Please enter a (partial) title', books: [] });
    }
  }
  render() {
    const { books = [], history, isLoading, isLoadingMore, errmsg } = this.state;
    return (
      <div className="App">
        <h1>Book Finder</h1>
        {errmsg && <MessageLine text={errmsg} onClick={this.clearMsg.bind(this)} /> }
        <SearchBox history={history} onSearch={this.search.bind(this)} />
        {isLoading
          ? <Loader/>
          : isLoadingMore
            ? <div><CardGrid items={books} /><Loader/></div>
            : books.length
              ? <CardGrid items={books} />
              : 'Nothing to see hear'
        }
      </div>
    );
  }
}

export default App;
