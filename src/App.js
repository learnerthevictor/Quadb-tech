import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowListScreen from './components/ShowListScreen';
import ShowSummaryScreen from './components/ShowSummaryScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/" components={ShowListScreen} />
        <Route path="/show/:id" components={ShowSummaryScreen} />
      </Switch>
    </Router>
  );
}

export default App;