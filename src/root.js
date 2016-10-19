import React from 'react'
import { Provider } from 'react-redux'
import { Route, IndexRoute } from 'react-router'

import Home from './components/home'
import Base from './components/Base'
import App from './containers/app'

const Root = (
  <Route path="/" component={Base}>
    <IndexRoute component={Home} />
    <Route path="todomvc" component={App} />
  </Route>
)

export default Root