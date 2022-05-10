import React, { Component } from 'react';
import './TomatoBox.css';
import withCounter from '../hoc/withCounter';


class Tomato extends Component {
    render() {
        return (
            <div className="TomatoBox" onClick={this.props.incCounter}>
                {this.props.counter}
            </div>
        )
    }
}

export default withCounter(Tomato);