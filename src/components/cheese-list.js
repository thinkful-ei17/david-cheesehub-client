import React from 'react';
import {connect} from 'react-redux';

import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }


  render() {
    const list = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>
    });

    return (
      <ul className='cheese-list'>
        {list}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
})
export default connect(mapStateToProps)(CheeseList);