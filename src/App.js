import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Add from "./component/Add";
import Systeme from "./component/Systeme";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Add">
          <i className="fas fa-plus-circle"></i>
        </Link>
        <Switch>
          <Route path="/Add">
            <Add />
          </Route>
        </Switch>
      </Router>
      <Systeme />
    </div>
  );
}

export default App;
