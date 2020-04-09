import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = ({ users }) => {
  const [amountUsers, setAmountUsers] = useState(0);

  useEffect(() => {
    setAmountUsers(users.length);
  }, [users]);
  const userItems = users.map((user) => {
    return <ListItem key={user.id} user={user} />;
  });
  return (
    <Container>
      <h3>Amount of shown employee&apos;s {amountUsers}</h3>
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
};
