import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from 'routes'
import 'reset-css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import registerServiceWorker from './registerServiceWorker'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { enthusiasm } from 'store/reducers/index'
import { StoreState } from 'store/types/index'
import { EnthusiasmAction } from 'store/actions/index'

declare global {
  interface Window {
    devToolsExtension: any
  }
}
window.devToolsExtension = window.devToolsExtension || {}

const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension({}))
    // enhancers.push(devToolsExtension({actionsBlacklist: ['@@redux-form/CHANGE']}))
  }
}

const store = createStore<StoreState, EnthusiasmAction, {}, {}>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
  },
  ...enhancers
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
