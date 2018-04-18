import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import SortableItem from './SortableItem';
import PropTypes from 'prop-types';

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={value} index={index} value={value} />
      ))}
    </ul>
  );
});

SortableList.propTypes = {
  items: PropTypes.array
};

export default SortableList;