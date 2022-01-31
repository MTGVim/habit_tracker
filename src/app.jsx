import './app.css';
import Habits from './components/habits';

import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
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

  handleReset = () => {
    this.setState({
      ...this.state,
      habits: [],
    });
  };

  handleAdd = (name) => {
    this.setState({
      ...this.state,
      habits: [
        ...this.state.habits,
        { id: new Date().getTime(), name, count: 0 },
      ],
    });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((cand) => cand.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
