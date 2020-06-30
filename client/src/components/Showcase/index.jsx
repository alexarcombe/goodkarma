import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

function Showcase(props) {
  const { items, duration } = props;

  return (
    <Carousel interval={duration} navButtonsAlwaysVisible>
      {items.map((i) => (
        <Item
          key={i.id}
          name={i.name}
          description={i.description}
          image={i.imageURL}
        />
      ))}
    </Carousel>
  );
}

const useStyle = makeStyles({
  image: {
    height: 'calc(100vh - 117px)',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
  },
});

function Item(props) {
  const classes = useStyle({ image: props.image });
  return <Paper className={classes.image}></Paper>;
}

export default Showcase;
