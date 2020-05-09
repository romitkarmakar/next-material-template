import React from "react";
import {} from "@material-ui/icons";
import {} from "@material-ui/core/styles";
import Navbar from "./navbar";
import {} from "@material-ui/core";
import { Provider } from "react-redux";
import store from "../lib/reducer";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Navbar />
          {this.props.children}
        </Provider>
      </React.Fragment>
    );
  }
}

export default Layout;
