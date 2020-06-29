import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TheCard = ({ type, nama, price, ready }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {type}
        </Typography>
        <Typography variant="h5" component="h2">
          {nama}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {price}
        </Typography>
        <Typography variant="body2" component="p">
          {ready ? "Ready" : "Out of Stock"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default TheCard;
