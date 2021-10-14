import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Detail from "Routes/Detail/index";
import Home from "Routes/Home/index";
import Search from "Routes/Search/index";
import Tv from "Routes/Tv/index";
import Header from "./Header";

//일치되는 라우터가 없는 경우 redirect로 이동
// switch 가 없는 경우 /tv/act 라는 페이지로 이동시 /tv 와 /tv/act가 동시에 렌더링되는 문제가 발생한다.
export default () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" exact component={Tv}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
      <Route path="/show/:id" component={Detail}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
