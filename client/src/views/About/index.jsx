import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import DisplayImage from '../../components/DisplayImage';
import useScrollTop from '../../hooks/useScrollTop';

function About() {
  useScrollTop();
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <DisplayImage image="/images/hands.jpg" width={2880} height={1923} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom>
          We aim to create an oasis for people to take a minute out of their day
          to fill themselves with good energy and spirit.
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          The name Good Karma comes from our belief that every moment returns to
          us in a similar way, so good intentions and interactions with everyone
          we come across will bring us all a happier future.
        </Typography>

        <Typography variant="body1" align="center">
          why organic? as Karma believers we believe that you get what you give
          and this includes the soil. The love you give to the soil is the love
          you receive from it, so the more you care and the more considerate you
          are with it lives on through to the final product.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
