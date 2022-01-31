import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  render() {
    return (
      <div>
        <form
          className="add-form"
          ref={this.formRef}
          onSubmit={(event) => {
            event.preventDefault();
            this.props.onAdd(this.inputRef.current.value);
            this.formRef.current.reset();
          }}
        >
          <input
            ref={this.inputRef}
            type="text"
            className="add-input"
            placeholder="Please enter you Habit!"
          />
          <button className="add-button">Add</button>
        </form>
      </div>
    );
  }
}

export default HabitAddForm;
