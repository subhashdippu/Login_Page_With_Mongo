import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Header/Header';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import SignOut from './Component/SignOut/SignOut';
import Home from './Component/Home/Home';
import About from './Component/About/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    < Router >
      <div>
        <Header />
        <Switch>
          <Route path="/data">
            <About />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signout'>
            <SignOut />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >


  );
}

export default App;
