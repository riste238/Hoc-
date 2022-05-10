import React,{ Component }from 'react';
import './CadetBox.css';

class Cadet extends Component {

    state = {
        counter : 0
    }

    incCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    }
    render (){
        return (
            <div onClick={this.incCounter} className="CadetBox">{this.state.counter}</div>
            )
    }
}

export default Cadet;