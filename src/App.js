import React, { Component } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import AdminCard from "./components/AdminCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <div>Home</div>;
            }}
          />
          <Route
            exact
            path="/admin"
            render={() => {
              return (
                <div>
                  <AdminCard />
                </div>
              );
            }}
          />
          />
          <Route
            exact
            path="*"
            render={() => {
              return <div>Get the heck outta here</div>;
            }}
          />
          />
        </Switch>
      </div>
    );
  }
}

export default App;
