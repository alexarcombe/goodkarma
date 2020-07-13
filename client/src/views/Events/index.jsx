import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import useWindowSize from '../../hooks/useWindowSize';
import Contact from './Contact';
import useScrollTop from '../../hooks/useScrollTop';

const useStyles = makeStyles({
  image: {
    height: (props) => props.height,
    maxHeight: 'calc(100vh - 88px)',
    backgroundImage: 'url(/images/event-1.png)',
    // backgroundImage: 'url(/images/event-2.jpg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'center',
  },
});

function Events() {
  useScrollTop();
  const height = 1170;
  const width = 938;
  const size = useWindowSize();
  const imageHeight =
    size.width < width ? (height / width) * size.width : height;
  const classes = useStyles({ height: imageHeight });

  return (
    <Grid container>
      <Grid className={classes.image} item xs={12} md={5} />
      <Grid item xs={12} md={7} container justify="center">
        <Grid item xs={12} sm={11} md={10}>
          <PageHeader top="let's have a coffee" />
          <Typography variant="body1" align="center">
            serving a cup of coffee is not a hand over for us. it's a moment of
            human connection. when each guest receives a drink from one of our
            baristas we make sure to be fully engaged in that interaction. we
            like to laugh and uplift the lives of your guests.
          </Typography>
          <Typography variant="body1" align="center">
            we strive to offer the best quality coffee and a unique experience,
            thus we offer different brewing methods to turn that typical coffee
            into a special one.
          </Typography>
          <Typography variant="body1" align="center">
            we enjoy both indoor and outdoor events and power supply is not a
            problem as we can either plug into power outlets or use our solar
            power system.
          </Typography>
          <PageHeader
            top="get in touch"
            bottom="if any doubt, please refer to our  FAQ or feel free to contact us:"
          />
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Events;
