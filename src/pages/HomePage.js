import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const userStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh"
  },
  nameHover: {
    color: "#262037",
    transition: "0.3s",
    "&:hover": {
      fontSize: "7rem",
      transition: "0.3s",
      color: "#5E2BED"
    }
  }
}));
export default function HomePage() {
  const classes = userStyles();
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={classes.content}
    >
      <Grid item xs={12}>
        <Typography style={{ color: "#ffffff" }} variant="h1">
          <Box fontFamily="Ramabhadra, sans-serif" display="inline">
            Hi, I'm{" "}
          </Box>
          <Box
            fontFamily="Ramabhadra, sans-serif"
            display="inline"
            className={classes.nameHover}
          >
            Vuottek,
          </Box>
          <Box fontFamily="Ramabhadra, sans-serif">
            Full-Stack Web Developer
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
