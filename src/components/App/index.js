import React  from 'react';
import SortableComponent from '../SortableComponent';
import TaskForm from '../TaskForm';
import TimerStats from '../TimerStats';
import './app.scss';

class App extends React.Component {
    render() {
        return (
            <div className = 'wrapper'>
                <h2>Task List</h2>
                <h4>with time tracking</h4>
                <SortableComponent />
                <TaskForm />
                <TimerStats />
            </div>
        )
    }
}

export default App;