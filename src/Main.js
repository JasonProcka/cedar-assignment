import React from 'react';
import Assignment from './modules/Assignment/Assignment';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <div>
    <Switch>
      <Route path="/" component={Assignment}/>
    </Switch>
  </div>
);

export default Main;
