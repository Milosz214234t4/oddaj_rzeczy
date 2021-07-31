import React from "react";
import Home from "./components/Home"
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";

function App() {
  
  return (
  <HashRouter>
  <Switch>
  <Route exact path='/Login'></Route>
  <Route exact path='/CreateAccount'></Route>

    <Route exact path='/' component={Home} />
    </Switch>
    </HashRouter>
    );
}

export default App;
