import React from 'react'
import { Redirect } from "react-router-dom";
import UserManager from '../util/UserManager';


const RootRoute = ({ component: Component, ...rest }) => 


UserManager.isUserLoggedIn() ? <Redirect to='/home' /> : <Redirect to='/account/login'/> 

export default RootRoute