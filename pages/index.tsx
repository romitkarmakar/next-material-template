import React from "react";
import { Grid, Typography, Fab } from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Layout from "../components/layout";
import { Add } from "@material-ui/icons";
import store from "../lib/reducer";
import Count from "../components/Count";

const styles = createStyles(() => ({
  "@global": {
    body: {
      backgroundColor: "black",
    },
  },
  "@keyframes move": {
    from: {
      transform: "translate(-50%, 200%)",
      opacity: 0,
    },
    to: {
      transform: "translate(-50%, -50%)",
      opacity: 1,
    },
  },
  hero: {
    position: "absolute",
    left: "50%",
    top: "50%",
    color: "red",
    transform: "translate(-50%, -50%)",
    animation: "$move 1s ease-in-out",
    textAlign: "center",
  },
  fab: {
    position: "fixed",
    bottom: "3%",
    right: "3%",
  },
}));

interface IProps {
  classes: any;
}

class IndexPage extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <Grid container>
          <div className={classes.hero}>
            <Typography variant="h2">Next Material Template</Typography>
            <Count />
          </div>
        </Grid>
        <Fab
          color="primary"
          className={classes.fab}
          onClick={() => store.dispatch({ type: "INCREASED" })}
        >
          <Add />
        </Fab>
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
