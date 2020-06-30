import React from 'react';
import { makeStyles } from '@material-ui/core';
import useWindowSize from '../../hooks/useWindowSize';

const useStyles = makeStyles({
  image: {
    maxHeight: 'calc(100vh - 88px)',
    height: (props) => props.height,
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
});

function DisplayImage(props) {
  const { image, height, width } = props;
  const aspectRatio = width / height;
  const size = useWindowSize();
  const imageHeight =
    width > size.width ? Math.ceil(size.width / aspectRatio) : height;
  const classes = useStyles({ height: imageHeight, image });

  return <div className={classes.image} />;
}

export default DisplayImage;
