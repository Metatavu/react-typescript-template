import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccessTokenRefresh from "../containers/access-token-refresh";
import MainScreen from "../screens/main-screen";

/**
 * App component
 */
const App: React.FC = () => {
  return (
    <AccessTokenRefresh>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={ MainScreen }
          />
        </Switch>
      </Router>
    </AccessTokenRefresh>
  );
};

export default App;