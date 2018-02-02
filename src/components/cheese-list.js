import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';
import AddCheeseForm from './add-cheese-form';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const list = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>
    });

    return (
      <div className='cheese-list'>
        <ul>
          {list}
        </ul>
        <AddCheeseForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);