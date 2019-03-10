import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import PostsContainer from './components/postsContainer';
import store from './redux/store';
import './index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PostsContainer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
