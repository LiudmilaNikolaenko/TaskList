import {Record, OrderedMap} from 'immutable';
import {arrToMap} from '../helpers';
import {ADD_TASK, DELETE_TASK, MARK_TASK} from '../AC';
import {tasks} from '../data';

const TaskRecord = Record({
  id: null,
  text: null,
  completed: false
});

const defaultTasks = new OrderedMap(arrToMap(tasks,TaskRecord));

export default (tasksState = defaultTasks, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case ADD_TASK:
      return tasksState.set(randomId, 
        new TaskRecord({id: randomId, text: payload.text, completed: false}));
    case DELETE_TASK:
      return tasksState.delete(payload.id);
    case MARK_TASK: 
      return tasksState.setIn([payload.id, 'completed'], payload.completed);
    default:
      return tasksState;
  };

};