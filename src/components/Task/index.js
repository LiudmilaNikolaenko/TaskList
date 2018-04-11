import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTask, markTask, setTimer, addTimerData} from '../../AC';
import {taskSelectorFactory} from '../../selectors';
import {timeToString} from '../../helpers';
import './task.scss';

class Task extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        task: PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            completed: PropTypes.bool
        }),
        timer: PropTypes.shape({
            taskId: PropTypes.string,
            taskText: PropTypes.string,
            startTime: PropTypes.string,
            duration: PropTypes.number
        }),
        deleteTask: PropTypes.func, 
        markTask: PropTypes.func, 
        setTimer: PropTypes.func,
        addTimerData: PropTypes.func
    };

    render() {
        const {task, timer, setTimer} = this.props;
        if (!task) return null;
        if (timer.taskId == task.id) {
            let timeId = setTimeout(() => {
                setTimer({duration:  new Date() - Date.parse(timer.startTime)});
                clearTimeout(timeId);
            }, 1000);
        };
        const setTimerElement = !task.completed ? 
            <button onClick = {this.handleSetTimer}  className = 'right_side'> 
                {timer.taskId == task.id ? 'Stop timer' : 'Start timer'}
            </button> : null;
        const timeElement = (timer.taskId == task.id) ? 
            <span  className = 'right_side'>{timeToString(timer.duration)}</span> : null;
        return (
            <div className = 'task'>
                <p className = 'task__text' >{task.text}</p>
                <p className = 'task__options'>
                    <label className = 'left_side'>
                        <span>Completed: </span>
                        <input type = 'checkbox' checked = {task.completed} 
                               onClick = {this.handleMark} />
                    </label>
                    {setTimerElement}
                </p>
                <p className = 'task__options'>
                    <button onClick = {this.handleDelete}  className = 'left_side'>Delete task</button>
                    {timeElement}
                </p>
            </div>
        );
    };

    handleMark = () => {
        const {task, timer, markTask} = this.props;
        if (!task.completed && timer.taskId == task.id) this.stopTimer();
        markTask(task.id, !task.completed);
    };

    handleDelete = () => {
        const {task, timer, deleteTask} = this.props;
        if (timer.taskId == task.id) this.stopTimer();
        deleteTask(task.id);
    };

    handleSetTimer = () => {
        const {task, timer, setTimer} = this.props;
        if (timer.taskId) this.stopTimer();
        if (timer.taskId != task.id) 
            setTimer({taskId: task.id, taskText: task.text, startTime: new Date().toISOString(), duration: 0});
    };

    stopTimer = () => {
        const {task, timer, setTimer, addTimerData} = this.props;
        addTimerData(
            {
                taskText: timer.taskText,
                duration: timer.duration
            }
        );
        if (timer.taskId == task.id) 
            setTimer({taskId: '', taskText: '', startTime: '', duration: 0});
    };

};

const mapStateToProps = () => {
    const taskSelector = taskSelectorFactory();

    return (state, ownProps) => {
        return {
            task: taskSelector(state, ownProps),
            timer: state.timer
        }
    };
};

export default connect(mapStateToProps, { deleteTask, markTask, setTimer, addTimerData })(Task);

