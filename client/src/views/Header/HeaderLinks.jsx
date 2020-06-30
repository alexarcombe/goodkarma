import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '200px',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      padding: '30px',
    },
  },
}));

export default function HeaderLinks(props) {
  const { setToggleDrawer } = props;
  const classes = useStyles();

  const handleClick = () => {
    setToggleDrawer(false);
  };
  return (
    <List className={classes.list}>
      <ListItem
        className={classes.item}
        button
        component={Link}
        to="/truck"
        onClick={handleClick}
      >
        <ListItemText primary="Truck" />
      </ListItem>
      <ListItem
        className={classes.item}
        button
        component={Link}
        to="/cafe"
        onClick={handleClick}
      >
        <ListItemText primary="Café" />
      </ListItem>
      <ListItem
        className={classes.item}
        button
        component={Link}
        to="/about"
        onClick={handleClick}
      >
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        className={classes.item}
        button
        component={Link}
        to="/events"
        onClick={handleClick}
      >
        <ListItemText primary="Event" />
      </ListItem>
      <ListItem
        className={classes.item}
        button
        component={Link}
        to="/faq"
        onClick={handleClick}
      >
        <ListItemText primary="FAQ" />
      </ListItem>
    </List>
  );
}
