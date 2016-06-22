import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Layouts
import CoreLayout from 'layouts/CoreLayout';

// Views
import WelcomeView from 'views/WelcomeView';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={WelcomeView} />
  </Route>
)
