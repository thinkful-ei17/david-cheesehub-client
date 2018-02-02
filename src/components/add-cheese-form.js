import React from 'react';
import {connect} from 'react-redux';
import {addCheese} from '../actions.cheese';

export class AddCheeseForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const cheese = this.input.value;
    this.props.dispatch(addCheese(cheese));
  }

  render() {

    return (
      <form className='add-cheese-form' onSubmit={e=>this.onSubmit}>
        <input type="text" ref={input => this.input = input} />
        <button>Add Cheese</button>
      </form>
    )
  }
}

export default connect()(AddCheeseForm);