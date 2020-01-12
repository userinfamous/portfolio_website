import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const userStyles = makeStyles(theme => ({
  content: {
    height: "90vh"
  },
  nounHover: {
    color: "#262037",
    transition: "0.3s",
    "&:hover": {
      fontSize: "120%",
      transition: "0.3s",
      color: "#5E2BED"
    }
  }
}));
export default function Contact() {
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
          <Animated>
            <Typography style={{ color: "#ffffff" }} variant="h1">
              <Box
                fontFamily="Ramabhadra, sans-serif"
                display="inline"
                className={classes.nounHover}
              >
                Contact
              </Box>
            </Typography>
          </Animated>

          <Typography style={{ marginTop: "2rem" }}>
            <Animated animationInDelay="500">
              <Box
                style={{ color: "#fff" }}
                fontSize="1.5rem"
                fontWeight="bold"
                fontFamily="Montserrat"
              >
                Email
              </Box>
              <Box
                style={{ color: "#9B9B9B" }}
                fontFamily="Montserrat"
                display="inline"
              >
                {" "}
                buildinit.studio@gmail.com
              </Box>
            </Animated>
            <Animated animationInDelay="1000">
              <Box
                style={{ color: "#fff" }}
                fontSize="1.5rem"
                fontWeight="bold"
                fontFamily="Montserrat"
              >
                Social Media
              </Box>
              <Box
                style={{ color: "#9B9B9B" }}
                fontFamily="Montserrat"
                display="inline"
              >
                Add me on one of the social media platforms and dm.
              </Box>
            </Animated>
          </Typography>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}
