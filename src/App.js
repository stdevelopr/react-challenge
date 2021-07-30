import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './app/components/Header/Header'
import routes from './app/routes'

const App = props => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;