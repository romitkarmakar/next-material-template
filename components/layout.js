import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "./navbar";

const styles = (theme) => ({});
class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
