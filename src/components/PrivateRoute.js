import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route
        render = {
            props => localStorage.getItem('token') ? 
            <Component {...props}/> : <Redirect to='login'/>
        }
    />
}

export default PrivateRoute;