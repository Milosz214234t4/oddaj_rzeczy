import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import PrivateRoute from "./components/firebase/PrivateRoute";
import Userpage from "./components/Userpage";

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import { AuthProvider } from "./components/firebase/Auth";

function App() {
  
  return (
    <AuthProvider>
  <HashRouter>
  <Switch>
  <PrivateRoute exact path="/Userpage" component={Userpage} />

  <Route exact path='/Login' component={Login}></Route>
  <Route exact path='/CreateAccount' component = {CreateAccount}></Route>

    <Route exact path='/' component={Home} />
    </Switch>
    </HashRouter>
    </AuthProvider>
    );
}

export default App;
