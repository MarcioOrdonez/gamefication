import React, { Component } from 'react';
import './register.css';
import './../../styles.css';
import axios from 'axios';
import RegisterForm from './registerForm'



class Register extends Component {
  state = {
    response: ''
  };
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      person_name: '',
      person_email: '',
      person_password: ''
    };
  };
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangePersonEmail(e) {
    this.setState({
      person_email: e.target.value
    });
  }
  onChangePersonPassword(e) {
    this.setState({
      person_password: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.person_name}, ${this.state.person_email}, and ${this.state.person_password}`);
    const obj = {
      name: this.state.person_name,
      email: this.state.person_email,
      password: this.state.person_password,
      isadmin: true
    }
    console.log(obj + "o que vai enviar");
    axios.post('http://localhost:3001/game/cadastrar', obj)
      .then(res => console.log(res.data));
    this.setState({
      person_name: '',
      person_email: '',
      person_password: ''
    })
  }
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
};

export default Register;
