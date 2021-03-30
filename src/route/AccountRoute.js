import React from 'react'
import { Route, Switch } from "react-router-dom";
import LoginComponent from '../signup/LoginComponent';
import { Onboarding } from '../util/NavigationConstants';


const AccountRoute = ({ component: Component, ...rest }) => {

    return <Switch>
        <Route path={Onboarding.LOGIN} exact component={LoginComponent} />
    </Switch>
}

export default AccountRoute

