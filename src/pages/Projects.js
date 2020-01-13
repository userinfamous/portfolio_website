import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import {
  Grid,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Animated>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Box fontFamily="Montserrat">Coding Club Website</Box>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A simple NodeJS static website with some JQuery and
                  animations. Deployed on Heroku.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://codingclubsite.herokuapp.com/"
                target="_blank"
                size="small"
                color="primary"
              >
                Live
              </Button>
              <Button
                href="https://github.com/userinfamous/codingclubwebsite"
                target="_blank"
                size="small"
                color="primary"
              >
                Code
              </Button>
            </CardActions>
          </Card>
        </Animated>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animated animationInDelay={500}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Box fontFamily="Montserrat">Johan, The Game</Box>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  My first real 2D platformer game using GameMaker, GML,
                  finite-state machine and shaders.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://user-infamous.itch.io/johan"
                target="_blank"
                size="small"
                color="primary"
              >
                Play / Download
              </Button>
            </CardActions>
          </Card>
        </Animated>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Animated animationInDelay={1000}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Box fontFamily="Montserrat">Wall Jump, The Game</Box>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A demo only, it is far from being considered a proper game.
                  But relatively polished, made using Godot Engine.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                href="https://user-infamous.itch.io/wall-jump"
                target="_blank"
                size="small"
                color="primary"
              >
                Play / Download
              </Button>
              <Button
                href="https://github.com/userinfamous/Game_Development"
                target="_blank"
                size="small"
                color="primary"
              >
                Code
              </Button>
            </CardActions>
          </Card>
        </Animated>
      </Grid>
    </Grid>
  );
}
