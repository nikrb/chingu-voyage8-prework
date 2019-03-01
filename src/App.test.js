import React from 'react';
import { fireEvent, render, wait } from 'react-testing-library';

import App from './App';

import * as actions from './actions';

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
  const { getByLabelText, getByText, getByTestId, getByPlaceholderText } = render(<App/>);
  const search = getByPlaceholderText('title');
  fireEvent.change(search, { target: { value: 'title' } });
  fireEvent.click(getByTestId('search_btn'));
  expect(actions.getBooks).toBeCalledWith({ title: 'title' });
  await wait(() => {
    expect(getByText('test title')).toBeDefined();
    expect(getByText('by nik')).toBeDefined();
    expect(getByText('publisher test publisher')).toBeDefined();
    expect(getByText('Preview')).toBeDefined();
  });
});

