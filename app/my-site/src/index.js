import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'

const mdContent = require("./posts/20171216.md");
const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    content: "# Test Title",
    nav: {
     isOpen: false
    },
    name: "Test Subject 01"
  }

});

console.log(mdContent);

const render = (Component, store) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(App, store)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => { render(App, store) })
}
