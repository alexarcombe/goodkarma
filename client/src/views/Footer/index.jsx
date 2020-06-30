import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';
import CustomFooter from '../../components/Footer';

const useStyle = makeStyles({
  facebook: {
    color: '#3b5998',
  },
  email: {
    textAlign: 'center',
  },
});

function Footer() {
  const classes = useStyle();

  const top = [
    <Facebook id="facebook" className={classes.facebook} fontSize="large" />,
    <Instagram id="instagram" fontSize="large" />,
  ];
  const bottom = (
    <Typography className={classes.email} variant="body1" color="primary">
      hi@goodkarmacoffee.co.nz
    </Typography>
  );
  return <CustomFooter top={top} bottom={bottom} />;
}

export default Footer;
