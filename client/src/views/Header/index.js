import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Image from 'material-ui-image';
import HeaderLinks from './HeaderLinks';
import Navbar from '../../components/Navbar';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(1),
    width: '74px !important',
    height: '68px !important',
  },
  brand: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

function Header() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const classes = useStyles();

  const logo = (
    <NavLink className={classes.logo} to="/">
      <Image
        imageStyle={{ width: '150px', height: '150px', top: '-40px' }}
        src="images/GK_logo_white_2020.png"
        color="primary"
      />
    </NavLink>
  );
  // const brand = (
  //   <Typography
  //     className={classes.brand}
  //     variant="h4"
  //     component={NavLink}
  //     to="/"
  //   >
  //     GOOD KARMA
  //   </Typography>
  // );
  const rightLinks = <HeaderLinks setToggleDrawer={setToggleDrawer} />;

  return (
    <Navbar
      logo={logo}
      color="#fff"
      rightLinks={rightLinks}
      toggleDrawer={toggleDrawer}
      setToggleDrawer={setToggleDrawer}
    />
  );
}

export default Header;
