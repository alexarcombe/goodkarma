import React from 'react';
import { Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '15px 0',
  },
  headers: {
    textAlign: 'center',
  },
  divider: {
    width: '45px',
    height: '3px',
    margin: '3px auto',
    borderRadius: '2px',
    background: theme.palette.primary.main,
  },
}));

function PageHeader(props) {
  const { top, bottom } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.headers} variant="h4" color="primary">
        {top}
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.headers} variant="h5" color="primary">
        {bottom}
      </Typography>
    </div>
  );
}

export default PageHeader;
