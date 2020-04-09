import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = ({ users, selectedFilter }) => {
  const filteredUsers = users.filter((user) => user.title === selectedFilter);

  const userItems = filteredUsers.map((user) => {
    if (user.title === selectedFilter) {
      return <ListItem key={user.id} user={user} />;
    }
    return null;
  });

  return (
    <Container>
      <h3>Amount of shown employee&apos;s {userItems.length}</h3>
      {userItems}
    </Container>
  );
};
export default List;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

List.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedFilter: PropTypes.string.isRequired,
};
