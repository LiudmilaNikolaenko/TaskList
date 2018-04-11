import randomID from 'random-id';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const MARK_TASK = 'MARK_TASK';
export const SET_TIMER = 'SET_TIMER';
export const ADD_TIMER_DATA = 'ADD_TIMER_DATA';
export const SORT_TASK_LIST = 'SORT_TASK_LIST';

export function addTask(text) {
    return {
        type: ADD_TASK,
        payload: { text },
        randomId: randomID(24,"0a")
    }
};

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: { id }
    }
};

export function markTask(id, completed) {
    return {
        type: MARK_TASK,
        payload: { id, completed }
    }
};

export function setTimer(timer) {
    return {
        type: SET_TIMER,
        payload: { timer }
    }
};

export function addTimerData(timerdata) {
    return {
        type: ADD_TIMER_DATA,
        payload: { timerdata },
        randomId: randomID(24,"0a")
    }
};

export function sortTaskList(tasklist) {
    return {
        type: SORT_TASK_LIST,
        payload: { tasklist }
    }
};
