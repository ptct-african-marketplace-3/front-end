import './App.css';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import UserPage from './components/UserPage';
import CreateListing from './components/CreateListing';
import ItemPage from './components/ItemPage';
import EditListing from './components/EditListing';

function App() {
  return (
    <Router> 
      <Header/>
      <Switch>

        <Route exact path='/' component={Homepage}/>
        <PrivateRoute path='/browse' component={ItemsList}/>
        <PrivateRoute path='/user/:ownerID' component={UserPage}/>
        <PrivateRoute path='/items/:itemID' component={ItemPage}/>
        <PrivateRoute path='/createListing' component={CreateListing}/>
        <PrivateRoute path='/editListing' component={EditListing}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>

      </Switch>
    </Router>

  );
}

export default App;