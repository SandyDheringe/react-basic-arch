import React from 'react'
import { Route, Redirect } from "react-router-dom";
import UserManager from '../util/UserManager';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      UserManager.isUserLoggedIn()
        ? <Component {...props} />
        : <Redirect to='/account/login' />
    )} />
  )

export default PrivateRoute


