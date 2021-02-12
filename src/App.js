import React from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerSurveyForm from './CustomerSurveyForm';
import CutomerSurveyChart from './CutomerSurveyChart'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={CustomerSurveyForm} />
          <Route path="/analysis" exact component={CutomerSurveyChart} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
