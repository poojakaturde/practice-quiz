import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Rules from './Rules';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/rules">
          <Rules/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
