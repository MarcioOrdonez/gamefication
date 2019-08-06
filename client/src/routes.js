// to create routes
import React from 'react';
import { isAuthenticated} from './auth';
import { BrowserRouter, 
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register'
import Dash from './components/dashboard/dashboard';
// import App from './components/example/AppJs';
// example
import App2 from './components/example/videoExample';


const PrivateRoute= ({ component: Component, ...rest}) => (
    <Route
      {...rest}
      render={props => 
        isAuthenticated() ? (
            <Component { ...props } />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location} }} />
        )
    } />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={() => <h1>Hello, world</h1>} /> */}
            <Route exact path="/" component={ Login  } />
            <Route exact path="/register" component={ Register  } />
            <PrivateRoute exact path="/dashboard" component={ Dash } />
            <PrivateRoute exact path="/react" component={ App2 } />
        </Switch>
    </BrowserRouter>
);

export default Routes;