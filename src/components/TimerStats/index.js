import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {timeToString} from '../../helpers';
import './timerstats.scss';

class TimerStats extends React.Component {
    static propTypes = {
        timerstats: PropTypes.array
    };

    state = { isOpen: false };

    render() {
        return (
            <div className="timer_list">
                <p><button onClick = {this.toggleOpen}>
                    {this.state.isOpen ? 'Close timer stats' : 'Open timer stats'}
                </button></p>
                {this.getStats()}
            </div>
        )
        
    };

    toggleOpen = () => {
        const prIsOpen = this.state.isOpen;
        this.setState({isOpen: !prIsOpen});
    };

    getStats = () => {
        if (!this.state.isOpen) return null;
        const {timerstats} = this.props;
        if (!timerstats.length) return (
            <p><span>No data.</span></p>
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                {timerstats.map(timerData => 
                    <tr key = {timerData.id}>
                        <td>
                            {timerData.taskText}
                        </td>
                        <td>
                            {timeToString(timerData.duration)}
                        </td>
                    </tr>)}
                </tbody>
	        </table>
        )
    };
};

export default connect((state) => ({
    timerstats: state.timerstats
}))(TimerStats);