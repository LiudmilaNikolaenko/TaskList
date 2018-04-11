import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import Task from './Task';
import PropTypes from 'prop-types';

const SortableItem = SortableElement(({value}) =>
    <li><Task id = {value} /></li>
);

SortableItem.propTypes = {
    value: PropTypes.string
};

export default SortableItem;