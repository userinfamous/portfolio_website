import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import {
  makeStyles,
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Animated } from "react-animated-css";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const userStyles = makeStyles(theme => ({
  content: {
    height: "90vh"
  },
  nameHover: {
    color: "#262037",
    transition: "0.3s",
    "&:hover": {
      fontSize: "120%",
      transition: "0.3s",
      color: "#5E2BED"
    }
  },
  jobHover: {
    color: "#043960",
    transition: "0.3s",
    "&:hover": {
      fontSize: "120%",
      transition: "0.3s",
      color: "#03a9f4"
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
      <ThemeProvider theme={theme}>
        <Grid item xs={12}>
          <Typography style={{ color: "#ffffff" }} variant="h1">
            <Animated isVisible={true}>
              <Box fontFamily="Ramabhadra, sans-serif" display="inline">
                Hi, I'm{" "}
              </Box>
              <Box
                fontFamily="Ramabhadra, sans-serif"
                display="inline"
                className={classes.nameHover}
              >
                Vuottek.
              </Box>
            </Animated>

            <Animated animationInDelay={500}>
              <Box
                className={classes.jobHover}
                fontFamily="Ramabhadra, sans-serif"
              >
                Full-Stack Web Developer
              </Box>
            </Animated>
          </Typography>

          <Animated animationInDelay={1000}>
            <Typography style={{ color: "#9B9B9B" }} variant="subtitle1">
              <Box fontSize="1.5rem" fontFamily="Montserrat">
                A Computer Science and Physics Enthusiast.
              </Box>
            </Typography>
          </Animated>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}
