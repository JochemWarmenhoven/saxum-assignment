import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ListItem = ({ user }) => {
  return (
    <Item>
      <Text>
        {user.first_name} {user.last_name}
      </Text>
      <Subtext>
        <p>{user.title}</p>
        <p>{user.email}</p>
      </Subtext>
    </Item>
  );
};
export default ListItem;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Text = styled.p`
  margin: 0;
`;
const Subtext = styled.div`
  font-size: 12px;
  text-align: left;
  color: darkgray;
  p {
    margin: 0;
  }
`;

ListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
