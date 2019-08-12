import React, { Component } from 'react';
import './dashboard.css';
import './../../styles.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

class Dash extends Component {
    // constructor (props) {
    //     super(props);
    //     this.classes = useStyles();
    // }
    state = {
        response: ''
    };
    render() {
        return (
            <div className="dash">
                <div
                    // className={classes.root}
                >
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start"
                                // className={this.classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                // className={this.classes.title}
                            >
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                    <button>
                        <Link to="/logout"> Log Out </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Dash;