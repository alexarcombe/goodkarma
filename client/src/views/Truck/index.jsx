import React, { useState, useEffect } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import useWindowSize from '../../hooks/useWindowSize';
import PageHeader from '../../components/PageHeader';
import DisplayImage from '../../components/DisplayImage';
import useScrollTop from '../../hooks/useScrollTop';

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: 'calc(100vh - 88px)',
    width: 'auto !important',
    margin: 'auto',
  },
}));

function Truck() {
  useScrollTop();
  const classes = useStyles();
  const size = useWindowSize();
  const [paddingTop, setPaddingTop] = useState(null);

  useEffect(() => {
    const maxHeight = size.height - 88;
    const aspectRatioHeight = (1 / (40 / 23)) * size.width;
    if (maxHeight < aspectRatioHeight) {
      setPaddingTop(maxHeight);
    } else {
      setPaddingTop(aspectRatioHeight);
    }
  }, [size]);

  const style = { display: 'flex', justifyContent: 'center' };

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12}>
          <DisplayImage image="/images/truck.webp" width={2400} height={1380} />
        </Grid>
        <Grid item xs={12}>
          <PageHeader top="our little truck" bottom="where it all began" />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography align="center" variant="body2" gutterBottom>
            This boxy shaped truck was manufactured back in 1995. We imported it
            from Japan, (which was a nightmare) but long story short, it landed
            in New Zealand in November 2016. And it was love at first sight.
          </Typography>
          <Typography align="center" variant="body2" gutterBottom>
            During 2017 we've been fitting it out and by the end of the year the
            truck was ready to hit the road.
          </Typography>

          <Typography align="center" variant="body2" gutterBottom>
            Since then, it's been a hell of a ride going to markets, festivals,
            functions, meeting unforgettable people and going to amazing places.
          </Typography>
          <Typography align="center" variant="body2">
            ​You can find this beauty roaming around events and markets in
            Auckland, New Zealand. If you'd love to have this truck at your
            event or function please contact us. You can also hire it for
            extended promotional work, marketing campaigns and advertising
            productions.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Truck;
