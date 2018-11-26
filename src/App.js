import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Tabbar from './common/tabbar';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tabbar></Tabbar>
      </Provider>
    )
  }
}

export default App;
