import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
import Coverage from "pages/Coverage";
import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "pages/Dashboard";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Admon from "pages/Admon";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Cobertura" component={Coverage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/Admon" component={Admon}/>
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
