import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import 'antd/dist/antd.css';//引入antd样式
import Todo from './todo/todoIndex'

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      {/* <App /> */}
      {/* 待办事件 */}
    <Todo></Todo>
    {/* </React.StrictMode> */}
  </Provider>,
  
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
