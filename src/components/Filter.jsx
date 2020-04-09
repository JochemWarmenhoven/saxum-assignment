import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const filters = [
  'UX Designer',
  'Frontend Developer',
  'Infra',
  'iOS Developer',
  'PHP Developer',
];

const Filter = ({ selectedFilter, setSelectedFilter }) => {
  const checkBoxes = filters.map((filter) => {
    return (
      <div key={filter}>
        <input
          type="radio"
          id={filter}
          name="filterGroup"
          value={filter}
          checked={selectedFilter === filter}
          onChange={() => setSelectedFilter(filter)}
        />
        <label htmlFor={filter}>{filter}</label>
      </div>
    );
  });
  return (
    <>
      <h1>Filter</h1>
      <Container>{checkBoxes}</Container>
    </>
  );
};
export default Filter;

const Container = styled.div`
  display: flex;
`;

Filter.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired,
};
