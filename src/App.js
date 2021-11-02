import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
import Coverage from "pages/Coverage";
import Login from "pages/Login";
import Register from "pages/Register";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Cobertura" component={Coverage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
