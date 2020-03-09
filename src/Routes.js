import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from "./components/AppliedRoute";
import Home from './containers/Home';
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Login from "./containers/Login";
import Settings from "./containers/Settings";
import NotFound from "./containers/NotFound";


export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AppliedRoute path="/settings" exact component={Settings} appProps={appProps} />
      <AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AppliedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
