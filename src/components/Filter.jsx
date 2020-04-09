import React, { useEffect } from 'react';
import styled from 'styled-components';

const Filter = () => {
  useEffect(() => {});

  return <Container />;
};
export default Filter;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Filter.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       first_name: PropTypes.string.isRequired,
//       last_name: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,

//   setFilteredUsers: PropTypes.func.isRequired,
// };
