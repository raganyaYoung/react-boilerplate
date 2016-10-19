//react
import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
//react-router
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware  } from 'react-router-redux'

//i18n
import { bindLocaleLoader } from './util/locale'
import {loadLocaleResource} from './locale/resource-loader'
//devtool
import DevTools from './dev-tool'
//antd
import 'antd/dist/antd.css'
//reducers
import * as reducers from './reducers'
//router
import Root from './root'

//???
bindLocaleLoader(loadLocaleResource);

Window.React = React

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(
      thunk, 
      routerMiddleware(browserHistory)
    ),
    DevTools.instrument()
  )
)

const history = syncHistoryWithStore(browserHistory, store);
history.listen(location=> { console.log('go to location ' + location.pathname); });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{Root}</Router>
  </Provider>,
  document.getElementById('root')
)