import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Фільтр по імені
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
