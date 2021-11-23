import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
import Coverage from "pages/Coverage";
import Login from "pages/Login";
import Register from "pages/Register";
import Users from "pages/Users";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Admon from "pages/Admon";
import Shippments from "pages/Shippments";
import AddShippments from "pages/AddShippments";
import Addusers from "pages/AddUsers"

function App() {
  const token = localStorage.getItem("token");
  return (
    <Switch>
      <Route exact path="/">
        {" "}
        <Landing />{" "}
      </Route>
      <Route
        exact
        path="/login"
        render={() => {
          return token ? <Redirect to="/Admon" /> : <Login />;
        }}
      />
      <Route exact path="/cobertura">
        {" "}
        <Coverage />{" "}
      </Route>
      <Route exact path="/registrar">
        {" "}
        <Register />{" "}
      </Route>
      <Route
        exact
        path="/AgregaEnvio"
        render={() => {
          return !token ? <Redirect to="/" /> : <AddShippments />;
        }}
      />
      <Route
        exact
        path="/envios"
        render={() => {
          return !token ? <Redirect to="/" /> : <Shippments />;
        }}
      />
      <Route
        exact
        path="/Admon"
        render={() => {
          return !token ? <Redirect to="/" /> : <Admon />;
        }}
      />
      <Route exact path="/usuarios" render={() => {
        return !token ? <Redirect to="/" /> : <Users />
      }} />
      <Route exact path="/addusers" render={() => {
        return !token ? <Redirect to="/" /> : <Addusers />
      }} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
