import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LocationView from './views/LocationView';
import DepartmentView from './views/DepartmentView';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={DepartmentView}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}