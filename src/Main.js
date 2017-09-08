import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import SelectTextbook from './modules/SelectTextbook/SelectTextbook'
import Assignment from './modules/Assignment/Assignment'

const Main = () => (
  <main style={{mainStyles}}>
    <Switch>
      <Route exact path="/" component={Assignment} />
      <Route path="/textbook" component={SelectTextbook} />
    </Switch>
  </main>
)

var mainStyles = {
  textAlign: 'center',
  padding: 10 + 'px',
  boxSizing: 'border-box',
  borderTop: 2 + 'px solid rgb(46, 204, 113)'
}

export default Main
