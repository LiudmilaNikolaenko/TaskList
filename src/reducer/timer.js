import {Record} from 'immutable';
import {SET_TIMER} from '../AC';
import {timer} from '../data';

const TimerRecord = Record({
  taskId: null,
  taskText: null,
  startTime: null,
  duration: 0
});

const defaultTimer = new TimerRecord(timer);

export default (timerState = defaultTimer, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_TIMER:
      return timerState.merge(payload.timer);
    default:
      return timerState;
  }

};