import { Component } from 'react';
export default class Logout extends Component {
    removingToken() {
        localStorage.removeItem('tokenGame');
        window.location.href = '/';
    }
    render() {
        return null;
    }
} 