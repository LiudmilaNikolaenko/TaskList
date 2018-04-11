import {createSelector} from 'reselect';

const tasksGetter = state => state.tasks;
const idGetter = (state, props) => props.id;

export const taskSelectorFactory = () => createSelector(tasksGetter, idGetter, (tasks, id) => {
    return tasks.get(id)
});