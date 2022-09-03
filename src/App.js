import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Index from "./pages/Index.js";
import NotFound from "./pages/NotFound.js";
import SignIn from "./pages/SignIn.js";
import User from "./pages/User.js";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Index} path="/" />
        <Route exact component={SignIn} path="/sign-in" />
        <Route exact component={User} path="/user" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
