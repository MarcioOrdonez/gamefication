import { Component } from 'react';
export default class Logout extends Component {
    removingToken() {
        localStorage.removeItem('tokenGame');
        window.location.href = '/ ';
        this.props.history.push('/ ');
    }
    render() {
        return null;
    }
} 