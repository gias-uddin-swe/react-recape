import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Menubar from "./components/Menubar/Menubar";
import Details from "./components/Details/Details";

function App() {
  return (
    <div>
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:userId">
            <Details></Details>
          </Route>
          <Route path="/*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
