import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SearchBox = ({ searchInput, setSearchInput }) => {
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <>
      <h1>Search All</h1>
      <Container>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
      </Container>
    </>
  );
};
export default SearchBox;

const Container = styled.div`
  display: flex;
`;

SearchBox.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
};
