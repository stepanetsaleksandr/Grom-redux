import React, { Component } from "react";
import TodoList from "./tasks/components/TodoList.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

class App extends Component {
  render() {
    return (
      <div id="root">
        <Provider store={store}>
          <TodoList />
        </Provider>
      </div>
    );
  }
}

export default App;
