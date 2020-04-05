import React from "react";
import Navbar from "./navbar";
import { withStyles, Container } from "@material-ui/core";

const styles = theme => ({
  content: {
    padding: theme.spacing(2),
    marginTop: "64px"
  },
  toolbar: theme.mixins.toolbar
});

class Layout extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navbar />
        <Container className={classes.content}>{this.props.children}</Container>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
