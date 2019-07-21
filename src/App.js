import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import "./App.css";

class App extends Component {
  state = {
    pageVisited: "about"
  };

  changeState = e => {
    e.preventDefault();
    const route = e.target.text.toLowerCase();
    this.setState({ pageVisited: route });
  };

  render() {
    return (
      <Fragment>
        <Header changeState={this.changeState} />
        <Body st={this.state.pageVisited} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
