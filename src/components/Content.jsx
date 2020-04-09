import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getUsers from '../service/userService';
import Filter from './Filter';
import List from './List';
import Searchbox from './SearchBox';

const Content = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('UX Designer');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [selectedFilter]);

  return (
    <Container>
      <Searchbox searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput}
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <List
        searchInput={searchInput}
        selectedFilter={selectedFilter}
        searchInput={searchInput}
        users={users}
      />
      <p>{error}</p>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
