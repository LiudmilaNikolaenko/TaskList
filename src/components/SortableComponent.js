import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sortTaskList} from '../AC';
import SortableList from './SortableList';
import {arrayMove} from 'react-sortable-hoc';

class SortableComponent extends React.Component {
  static propTypes = {
    tasklist: PropTypes.array,
    sortTaskList: PropTypes.func
  };

  render() {
    return <SortableList items={this.props.tasklist} onSortEnd={this.onSortEnd} />;
  };
    
  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.sortTaskList(arrayMove(this.props.tasklist, oldIndex, newIndex));
  };
}

export default connect((state) => ({
  tasklist: state.tasklist
}), { sortTaskList })(SortableComponent);