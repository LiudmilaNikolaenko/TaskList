import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTask} from '../../AC';
import './taskform.scss';

class TaskForm extends React.Component {
    static propTypes = {
        addTask: PropTypes.func
    };

    state = {
        text: '',
        invalidForm: false
    };

    render() {
        const {text} = this.state;
        return (
            <div className="add_task">
                <div className="add_task__form">
                    <form onSubmit = {this.handleSubmit}>
                        <p><textarea
                            placeholder = 'Write task'
                            value = {text}
                            onChange = {this.handleChange}
                            className = {this.getClassName()} ></textarea></p>
                        <p><button type = "submit">Add task</button></p>
                     </form>
                </div>
            </div>
        );
    };

    handleChange = ev => {
        this.setState({ text: ev.target.value });
    };

    getClassName = () => {
        if (this.state.invalidForm) 
            return this.invalidValue() ? 'invalid_val' : '';
        return '';
    };

    handleSubmit = ev => {
        ev.preventDefault();
        if (this.invalidValue()) {
            this.setState({ invalidForm: true });
            return;
        };
        const {text} = this.state;
        this.props.addTask(text);
        this.setState({
            text: '',
            invalidForm: false
        });
    };

    invalidValue = () => {
        let pattern = /[a-zA-Z0-9А-Яа-я]/;
        const str = this.state.text;
        if (pattern.test(str)) {
            return false;
        } else {
            return true;
        };
    };
};

export default connect(null, { addTask })(TaskForm);