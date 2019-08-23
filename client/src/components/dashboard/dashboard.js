import React, { Component } from 'react';
import MaterialTableDemo from './table'
import NavBar from './NavBar';

class Dash extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        response: ''
    };
    render() {
        return (
            <div>
            <NavBar />
            <br />
            <MaterialTableDemo />
            </div>
        );
    }
}

export default Dash;