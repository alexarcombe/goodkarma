import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '200px',
  },
});

function Footer(props) {
  const { top, bottom, spacing = 2 } = props;
  const classes = useStyles();

  const topContent = top.map((topItem) => (
    <Grid item key={topItem.props.id}>
      {topItem}
    </Grid>
  ));
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignContent="center"
      spacing={spacing}
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          {topContent}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {bottom}
      </Grid>
    </Grid>
  );
}

export default Footer;
