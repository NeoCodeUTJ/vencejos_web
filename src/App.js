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
import Shippments from "pages/Shippments";

function App() {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <Switch>
      <Route exact path="/"> <Landing /> </Route>
      <Route exact path="/login" render={() => {
        return token ? <Redirect to="/Admon" /> : <Login />
      }} />
      <Route exact path="/cobertura" > <Coverage /> </Route>
      <Route exact path="/registrar"> <Register /> </Route>
      <Route exact path="/envios" render={() => {
        return !token ? <Redirect to="/" /> : <Shippments />
      }} />
      <Route exact path="/Admon" render={() => {
        return !token ? <Redirect to="/" /> : <Admon />
      }} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
