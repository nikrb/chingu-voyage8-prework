import React from 'react';
import { cleanup, fireEvent, render, wait } from 'react-testing-library';

import App from './App';

import * as actions from './actions';
import { FETCH_BOOKS_MAX } from './constants';

afterEach(cleanup);

it('should render landing page', () => {
  const { getByPlaceholderText, getByText } = render(<App/>);
  expect(getByText('Book Finder')).toBeDefined();
  expect(getByPlaceholderText('title')).toBeDefined();
  expect(getByText('Nothing to see hear')).toBeDefined();
});

it('should display fetched books on search title', async () => {
  actions.getBooks = jest.fn(() => Promise.resolve([{
    author: 'nik',
    cover: 'via.placeholder.com/128x194?No Cover',
    previewLink: 'via.placeholder.com/64x64?No Preview',
    publisher: 'test publisher',
    title: 'test title',
  },
  ]));
  const { getByText, getByTestId, getByPlaceholderText } = render(<App/>);
  const search = getByPlaceholderText('title');
  fireEvent.change(search, { target: { value: 'title' } });
  fireEvent.click(getByTestId('search_btn'));
  expect(actions.getBooks).toBeCalledWith({ title: 'title', maxResults: FETCH_BOOKS_MAX });
  await wait(() => {
    expect(getByText('test title')).toBeDefined();
    expect(getByText('by nik')).toBeDefined();
    expect(getByText('publisher test publisher')).toBeDefined();
    expect(getByText('Preview')).toBeDefined();
  });
});

it('should display message if there is no search term', async () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(<App/>);
  fireEvent.change(getByPlaceholderText('title'), { target: { value: '' }});
  fireEvent.click(getByTestId('search_btn'));
  await wait(() => {
    expect(getByText('Please enter a (partial) title')).toBeDefined();
  });
});

it('should display message on error', async () => {
  actions.getBooks = jest.fn(title => Promise.reject('my test error'));
  const { getByPlaceholderText, getByTestId, getByText } = render(<App/>);
  fireEvent.change(getByPlaceholderText('title'), { target: { value: 'quilting' }});
  fireEvent.click(getByTestId('search_btn'));
  expect(actions.getBooks).toBeCalledWith({ title: 'quilting', maxResults: FETCH_BOOKS_MAX });
  await wait(() => {
    expect(getByText(/my test error/)).toBeDefined();
  });
});

it('should display History pane', async () => {
  localStorage.setItem('history', JSON.stringify(['ada', 'adams', 'javascript']));
  const { getByPlaceholderText, getByText, queryByText } = render(<App/>);
  fireEvent.change(getByPlaceholderText('title'), { target: { value: 'd' }});
  await wait(() => {
    expect(queryByText(/javascript/)).toBeNull();
    expect(getByText(/ada/)).toBeDefined();
  });
});

