import React from "react";
import "./App.css";
import Redux from "./redux/redux";
import Reduxd from "./redux/redux2";
import Antd from "./antd/antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import RouterPage from './routerPage'

function App() {
  return (
    <div className="App">
      {/* <Redux></Redux> */}
      {/* <Redux2></Redux2> */}
      {/* <Antd></Antd> */}
      <div>
        学习路由的界面
        <Router>
        <RouterPage></RouterPage>
          <Link to="/">跳转1</Link>
          <Link to="/index">跳转2</Link>
          <Link to="/man">跳转3</Link>
          <Switch>
            {/* 嵌套路由 */}
            <Route
              path="/man"
             
              render={() => {
                return (
                  <Reduxd>
                    <Route path="/man/index" exact component={Antd}></Route>
                  </Reduxd>
                );
              }}
            ></Route>
            <Route path="/" exact component={Redux}></Route>
            <Route path="/index" exact component={Antd}></Route>
            {/* <Route path="/man" exact component={ */}
            {/* // Reduxd */}
          

            {/* }></Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
