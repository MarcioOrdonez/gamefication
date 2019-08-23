import React from 'react';
import { isAuthenticated } from './auth';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register'
import Dash from './components/dashboard/dashboard';
import Logout from './logout';
import Teste from './components/example/teste'
// example
// import App2 from './components/example/videoExample';
// import App from './components/example/AppJs';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
        } />
)
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/teste" component={Teste} />
            {/* require login */}
            <PrivateRoute exact path="/dashboard" component={Dash} />
            {/* example
            <PrivateRoute exact path="/react" component={ App2 } /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;
