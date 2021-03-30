import logo from './logo.svg';
import './App.css';
import BuildConfig from './config/BuildConfig'
import RootRoute from './route/RootRoute';
import PrivateRoute from './route/PrivateRoute';
import { Route, Switch} from "react-router-dom";
import { Common, Home, Onboarding } from './util/NavigationConstants';
import HomeComponent from './home/HomeComponent';
import LoginComponent from './signup/LoginComponent';
import AccountRoute from './route/AccountRoute';

function App() {
  return (
      <div>
      <Switch>
        <RootRoute path={Common.ROOT} exact/>
        <AccountRoute path="/account/*" exact />
        <PrivateRoute path={Home.BASE} exact component={HomeComponent} />
        {/* <Route path={Onboarding.LOGIN} exact component={LoginComponent} /> */}
      </Switch>
    </div>
    
  );
}

export default App;
