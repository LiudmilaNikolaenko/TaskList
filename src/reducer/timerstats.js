import {ADD_TIMER_DATA} from '../AC';
import {timerstats as defaultTimerStats} from '../data';

export default (timerStatsState = defaultTimerStats, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
    case ADD_TIMER_DATA:
      return timerStatsState
        .concat({...payload.timerdata, id: randomId});

    default:
      return timerStatsState;
  };

}