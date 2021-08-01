import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

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
  <Route exact path='/Login' component={Login}></Route>
  <Route exact path='/CreateAccount' component = {CreateAccount}></Route>

    <Route exact path='/' component={Home} />
    </Switch>
    </HashRouter>
    );
}

export default App;
