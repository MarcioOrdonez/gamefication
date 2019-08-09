import React, {Component} from 'react';
import './dashboard.css';
import './../../styles.css';

class Dash extends Component {
    state = {
        response: ''
    };
    render() {
        return (
            <div className="dash">
                <h1>hello!</h1>
            </div>
        );
    }
}

export default Dash;