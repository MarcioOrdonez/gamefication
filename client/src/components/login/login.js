import React, { Component } from 'react';
import './login.css';
import './../../styles.css';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import axios from 'axios';

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}
            <Link color="inherit" href="https://material-ui.com/">
                Image development interns
            </Link>
            {' team.'}
        </Typography>
    );
}

// const useStyles = makeStyles(theme => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class Login extends Component {
    // export default function Register() {  

    // classes = useStyles();

    state = {
        response: ''
    };

    constructor(props) {

        super(props);
        this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
        this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
        this.signIn = this.signIn.bind(this);

        this.state = {
            person_email: '',
            person_password: ''
        };
    };
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
    signIn(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.person_email}, and ${this.state.person_password}`);
        const obj = {
            email: this.state.person_email,
            password: this.state.person_password
        }
        console.log(obj + "o que vai enviar");
        axios.post('http://localhost:3001/game/login', obj)
            .then(res => console.log(res.data))
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                throw new Error("Login inválido...");
            })
            .then(token => {
                localStorage.setItem('token', token);
                this.props.history.push("/admin");
                return;
            })
            .catch(e => {
                this.setState({ message: e.message });
            }); 

        this.setState({
            person_email: '',
            person_password: ''
        })
    }

    //   localStorage.set('itemName', value)
    // localStorage.get('itemName')
    render() {
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div
                    // className={classes.paper}
                    >
                        <Avatar
                        // className={classes.avatar}
                        >
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Entrar
                        </Typography>
                        <form
                            // className={classes.form}
                            noValidate
                            onSubmit={this.signIn}
                        >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={this.state.person_email}
                                onChange={this.onChangePersonEmail}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={this.state.person_password}
                                onChange={this.onChangePersonPassword}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Lembrar-me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                // className={classes.submit}
                                value="login userSchema"
                            >
                                Entrar
                            </Button>
                        </form>
                    </div>
                    <Box mt={5}>
                        <MadeWithLove />
                    </Box>
                </Container>
            </div>
        );
    }
};
export default Login;
