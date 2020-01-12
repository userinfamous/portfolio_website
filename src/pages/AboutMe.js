import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";

const userStyles = makeStyles(theme => ({
  content: {
    height: "90vh"
  },
  nounHover: {
    color: "#262037",
    transition: "0.3s",
    "&:hover": {
      fontSize: "7rem",
      transition: "0.3s",
      color: "#5E2BED"
    }
  }
}));
export default function AboutMe() {
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
        <Animated>
          <Typography style={{ color: "#ffffff" }} variant="h1">
            <Box fontFamily="Ramabhadra, sans-serif" display="inline">
              Majoring in{" "}
            </Box>
            <Box
              fontFamily="Ramabhadra, sans-serif"
              display="inline"
              className={classes.nounHover}
            >
              Computer Science
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
              Javascript
            </Box>
            <Box
              style={{ color: "#9B9B9B" }}
              fontFamily="Montserrat"
              display="inline"
            >
              NodeJS, ReactJS, ExpressJS, Axios, React Router, Redux...
            </Box>
          </Animated>
          <Animated animationInDelay={1000}>
            <Box
              style={{ color: "#fff" }}
              fontSize="1.5rem"
              fontWeight="bold"
              fontFamily="Montserrat"
            >
              Python
            </Box>
            <Box
              style={{ color: "#9B9B9B" }}
              fontFamily="Montserrat"
              display="inline"
            >
              Flask, Regular Expressions, Collections Module...
            </Box>
          </Animated>
          <Animated animationInDelay={1500}>
            <Box
              style={{ color: "#fff" }}
              fontSize="1.5rem"
              fontWeight="bold"
              fontFamily="Montserrat"
            >
              Backend
            </Box>
            <Box
              style={{ color: "#9B9B9B" }}
              fontFamily="Montserrat"
              display="inline"
            >
              MYSQL, MongoDB, Heroku, APIs, Postman...
            </Box>
          </Animated>
          <Animated animationInDelay={2000}>
            <Box
              style={{ color: "#fff" }}
              fontSize="1.5rem"
              fontWeight="bold"
              fontFamily="Montserrat"
            >
              Developement/Workflow
            </Box>
            <Box
              style={{ color: "#9B9B9B" }}
              fontFamily="Montserrat"
              display="inline"
            >
              Agile Methodology, Unit testing, Gitlab, Github, Git, Docker,
              SSH...
            </Box>
          </Animated>
        </Typography>
      </Grid>
    </Grid>
  );
}
