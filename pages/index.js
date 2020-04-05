import React from "react";
import Layout from "../components/layout";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    padding: theme.spacing(2)
  }
});
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
