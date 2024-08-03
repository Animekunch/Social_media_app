import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  outline: none;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search..." />
    </SearchContainer>
  );
};

export default Search;
