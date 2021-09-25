import './App.css';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Switch>
          
        <Route exact path='/'>
          <Header/>
          <Homepage/>
        </Route>
        
        <Route path='/login'>
            <Login/>
        </Route>

        <Route path='/register'>
            <Register/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;