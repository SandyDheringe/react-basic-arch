import SANDBOX from "./sandbox.json"
import RELEASE from './release.json';
import Environment from './Environment';

const BuildConfig = () => {
    let env = process.env.REACT_APP_ENVIRONMENT ? process.env.REACT_APP_ENVIRONMENT : Environment.PRODUCTION
    console.log('env. => ' + env)
    switch (env.trim()) {
        case Environment.SANDBOX:
            return SANDBOX;
        case Environment.PRODUCTION:
            return RELEASE;
        default:
            return RELEASE;
    }
};

export default BuildConfig();