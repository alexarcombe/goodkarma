import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';
import CustomFooter from '../../components/Footer';

const useStyle = makeStyles({
  facebook: {
    color: '#3b5998',
  },
  instagram: {
    color: '#000',
  },
  email: {
    textAlign: 'center',
  },
});

function Footer() {
  const classes = useStyle();

  const top = [
    <a
      href="https://www.facebook.com/goodkarmacoffeenz/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Facebook id="facebook" className={classes.facebook} fontSize="large" />,
    </a>,
    <a
      href="https://www.instagram.com/goodkarmacoffeenz/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram
        id="instagram"
        className={classes.instagram}
        fontSize="large"
      />
    </a>,
  ];
  const bottom = (
    <Typography className={classes.email} variant="body1" color="primary">
      hi@goodkarmacoffee.co.nz
    </Typography>
  );
  return <CustomFooter top={top} bottom={bottom} />;
}

export default Footer;
