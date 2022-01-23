import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Body from './components/Body';
import Quiz from './components/Quiz';
import Quiz2 from './components/Quiz2';
import cartoon from './cartoon.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  return (
  <Router>
     <div className="App background">
      <img className="cartoonImage" src={cartoon} alt="./cartoon.png"/>
      <Navbar/>
    <Switch>
    <Route exact path='/'>
      <Body/>
    </Route>
    <Route exact path='/quiz'>
      <Quiz2/>
    </Route>
    <Route exact path='/quize'>
      <Quiz/>
    </Route>
  </Switch>
    </div>
</Router>
  );
}

export default App;
