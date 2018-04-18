import {combineReducers} from 'redux';
import tasklist from './tasklist';
import tasks from './tasks';
import timer from './timer';
import timerstats from './timerstats';

export default combineReducers({
  tasklist, tasks, timer, timerstats
});