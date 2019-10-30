import React, {Component} from 'react';
import './Counter.css'

class CounterClass extends Component {
    constructor(props){
        // wywołuje konstruktor dla Component
        super(props);
    }

    render() {
        const text = 'Komponent klasowy Counter';
        const color = {
            'backgroundColor': this.props.color
        }
        return (
            <div className="counter counter--dark" style={color}>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default CounterClass;