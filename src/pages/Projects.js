import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Animated>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Box fontFamily="Montserrat">Coding Club Website</Box>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A simple NodeJS static website with some JQuery and animations.
              Deployed on Heroku.
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
  );
}
