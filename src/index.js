import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from 'redux/store/configureStore';
import Root from 'containers/Root'
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';

// TODO: pass in initial localStorage state here.
const store = configureStore();
const history = browserHistory;

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;

    render(
      <AppContainer >
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
