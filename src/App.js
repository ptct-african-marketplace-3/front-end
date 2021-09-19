import './App.css';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <Header/>

      <Switch>
        <Route exact path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
