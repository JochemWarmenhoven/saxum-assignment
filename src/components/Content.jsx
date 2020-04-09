import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getUsers from '../service/userService';
import Filter from './Filter';
import List from './List';

const Content = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        const tempArray = [];
        data.map((user) => {
          tempArray.push(user.title);
        });

        console.log(tempArray);

        if (selectedFilter) {
          data.filter((user) => {
            return user.title === selectedFilter;
          });
        }
        setUsers(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [filters, selectedFilter, users]);

  return (
    <Container>
      <Filter filters={filters} setSelectedFilter={setSelectedFilter} />
      <List users={users} />
      <p>{error}</p>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
