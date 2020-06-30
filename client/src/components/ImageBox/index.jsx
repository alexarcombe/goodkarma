import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { ArrowForward } from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    minHeight: '250px',
  },
  boxImage: (props) => ({
    height: '100%',
    width: '100%',
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: props.hover === '0' ? 'scale(1.2)' : 'scale(1)',
  }),
  overlay: (props) => ({
    backgroundColor: '#000',
    opacity: props.hover,
  }),
  header: (props) => ({
    fontWeight: 500,
    fontSize: '2rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: props.hover === '0' ? '0' : '1',
  }),
  arrowContainer: (props) => ({
    position: 'absolute',
    color: 'white',
    left: 'calc(50% - 17.5px)',
    top: props.hover === '0' ? 'calc(50% - 21px)' : '75%',
  }),
  overlap: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },
  transition: {
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-in',
    transitionProperty: 'all',
  },
});

function ImageBox(props) {
  const { onClick } = props;
  const [hover, setHover] = useState('0.3');
  const classes = useStyles({ ...props, hover });

  return (
    <>
      <div
        className={classes.container}
        onClick={onClick}
        onMouseOver={() => setHover('0')}
        onMouseLeave={() => setHover('0.3')}
      >
        <div className={`${classes.boxImage} ${classes.transition}`} />
        <div
          className={`${classes.overlay} ${classes.transition} ${classes.overlap}`}
        />
        <div
          className={`${classes.header} ${classes.transition} ${classes.overlap}`}
        >
          <p>{props.header}</p>
        </div>
        <div className={`${classes.arrowContainer} ${classes.transition}`}>
          <ArrowForward fontSize="large" />
        </div>
      </div>
    </>
  );
}

ImageBox.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default ImageBox;
