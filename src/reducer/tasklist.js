import {ADD_TASK, DELETE_TASK, SORT_TASK_LIST} from '../AC';
import {tasklist as defaultTaskList} from '../data';

export default (taskListState = defaultTaskList, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case ADD_TASK:
      return taskListState
        .concat(randomId);

    case DELETE_TASK:
      return taskListState
        .filter(id => id !== payload.id);

    case SORT_TASK_LIST:
      return payload.tasklist;

    default:
      return taskListState;
  };

}