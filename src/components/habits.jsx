import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    this.setState({
      ...this.state,
      habits: this.state.habits.map((cand) =>
        cand.id === habit.id ? { ...cand, count: cand.count + 1 } : cand
      ),
    });
  };
  handleDecrement = (habit) => {
    this.setState({
      ...this.state,
      habits: this.state.habits.map((cand) =>
        cand.id === habit.id && cand.count > 0
          ? { ...cand, count: cand.count - 1 }
          : cand
      ),
    });
  };
  handleDelete = (habit) => {
    this.setState({
      ...this.state,
      habits: this.state.habits.filter((cand) => cand.id !== habit.id),
    });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={() => this.handleIncrement(habit)}
            onDecrement={() => this.handleDecrement(habit)}
            onDelete={() => this.handleDelete(habit)}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
