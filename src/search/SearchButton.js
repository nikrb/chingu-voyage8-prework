import React from 'react';

import { SearchButtonStyle } from './styled';

const SearchButton = ({ onClick }) =>
  <SearchButtonStyle data-testid="search_btn" onClick={onClick}>
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path d="M12.86 11.32L18 16.5 16.5 18l-5.18-5.14v-.35a7 7 0 1 1 1.19-1.19h.35zM7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10z"></path>
    </svg>
  </SearchButtonStyle>;

export default SearchButton;

