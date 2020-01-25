import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import {
  makeStyles,
  responsiveFontSizes,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import Sketch from "react-p5";

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
  let r1 = 125;
  let r2 = 125;
  let m1 = 10;
  let m2 = 10;
  let a1 = 0;
  let a2 = 0;
  let a1_v = 0;
  let a2_v = 0;
  let g = 1;
  let px2 = -1;
  let py2 = -1;
  let cx, cy;
  let buffer;

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={classes.content}
    >
      <ThemeProvider theme={theme}>
        <Grid item xs={12} lg={7}>
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
          </Typography>

          <Typography variant="h2">
            <Animated animationInDelay={500}>
              <Box className={classes.jobHover} fontFamily="Ramabhadra, sans-serif">
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
        {window.innerWidth > 1500 ? (
          <Grid lg={5}>
            <Sketch
              setup={(p5, parentRef) => {
                p5.createCanvas(500, 500).parent(parentRef);
                p5.pixelDensity(1);
                a1 = Math.PI / 2;
                a2 = Math.PI / 2;
                cx = p5.width / 2;
                cy = 150;
                buffer = p5.createGraphics(p5.width, p5.height);
                buffer.background(0);
                buffer.translate(cx, cy);
              }}
              draw={p5 => {
                p5.background(0);
                p5.imageMode(p5.CORNER);
                p5.image(buffer, 0, 0, p5.width, p5.height);

                let num1 = -g * (2 * m1 + m2) * Math.sin(a1);
                let num2 = -m2 * g * Math.sin(a1 - 2 * a2);
                let num3 = -2 * Math.sin(a1 - a2) * m2;
                let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2);
                let den = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
                let a1_a = (num1 + num2 + num3 * num4) / den;

                num1 = 2 * Math.sin(a1 - a2);
                num2 = a1_v * a1_v * r1 * (m1 + m2);
                num3 = g * (m1 + m2) * Math.cos(a1);
                num4 = a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2);
                den = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
                let a2_a = (num1 * (num2 + num3 + num4)) / den;

                p5.translate(cx, cy);
                p5.stroke(255);
                p5.strokeWeight(2);

                let x1 = r1 * Math.sin(a1);
                let y1 = r1 * Math.cos(a1);

                let x2 = x1 + r2 * Math.sin(a2);
                let y2 = y1 + r2 * Math.cos(a2);

                p5.line(0, 0, x1, y1);
                p5.fill(255);
                p5.ellipse(x1, y1, m1, m1);

                p5.line(x1, y1, x2, y2);
                p5.fill(255);
                p5.ellipse(x2, y2, m2, m2);

                a1_v += a1_a;
                a2_v += a2_a;
                a1 += a1_v;
                a2 += a2_v;

                buffer.stroke(94, 43, 253);
                if (p5.frameCount > 1) {
                  buffer.line(px2, py2, x2, y2);
                }
                px2 = x2;
                py2 = y2;
              }}
            />
          </Grid>
        ) : null}
      </ThemeProvider>
    </Grid>
  );
}
