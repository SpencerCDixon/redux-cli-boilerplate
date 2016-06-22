import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'redux/store/configureStore';
import { browserHistory } from 'react-router';
import Root from 'containers/Root'

// TODO: pass in initial localStorage state here.
const store = configureStore();
const history = browserHistory;

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
