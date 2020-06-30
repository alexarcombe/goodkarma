import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Drawer,
  makeStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import {} from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
  container: {
    color: (props) => props.color,
    backgroundColor: (props) =>
      props.backgroundColor ? props.backgroundColor : null,
    padding: '10px 0',
  },
  filler: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const {
    brand,
    logo,
    leftLinks,
    rightLinks,
    color,
    backgroundColor,
    toggleDrawer,
    setToggleDrawer,
  } = props;
  const classes = useStyle({ color, backgroundColor });

  return (
    <AppBar className={classes.container} color="primary">
      <Toolbar>
        {logo}
        {brand}
        {leftLinks ? <Hidden smDown>{leftLinks}</Hidden> : null}
        <div className={classes.filler} />
        {rightLinks ? <Hidden smDown>{rightLinks}</Hidden> : null}
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setToggleDrawer((state) => !state)}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp>
        <Drawer
          anchor="right"
          open={toggleDrawer}
          onClose={() => setToggleDrawer(false)}
          transitionDuration={500}
          variant="temporary"
        >
          {leftLinks}
          {rightLinks}
        </Drawer>
      </Hidden>
    </AppBar>
  );
}
