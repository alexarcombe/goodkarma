import React from 'react';
import { Modal, Paper, Grid, makeStyles, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '80%',
    height: 'min-content',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '400px',
    },
  },
  outline: {
    outline: 'none',
  },
  image: {
    display: 'block',
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '500px',
  },
  text: {
    margin: '10px 0',
  },
}));

function CustomModal(props) {
  const { open, onClose, content } = props;
  const classes = useStyles();

  if (content === undefined) {
    return null;
  }

  return (
    <Modal className={classes.container} open={open} onClose={onClose}>
      <Fade in={open} timeout={1000}>
        <Paper className={classes.outline}>
          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <img className={classes.image} src={content.imageUrl} />
            </Grid>
            <Grid
              className={classes.text}
              item
              container
              justify="center"
              xs={10}
              md={6}
            >
              <Grid xs={12} md={10}>
                {content.text}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Modal>
  );
}

export default CustomModal;
