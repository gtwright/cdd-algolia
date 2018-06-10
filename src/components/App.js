import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <div>
      <h1>Single Page Apps for GitHub Pages</h1>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>

    </div>
  );
}
