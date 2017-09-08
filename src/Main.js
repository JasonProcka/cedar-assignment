import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import SelectTextbook from './modules/SelectTextbook/SelectTextbook'
import Assignment from './modules/Assignment/Assignment'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Assignment} />
      <Route path="/textbook" component={SelectTextbook} />
    </Switch>
  </main>
)

export default Main
