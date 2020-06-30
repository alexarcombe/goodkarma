import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Accordion from '../../components/Accordion';
import useScrollTop from '../../hooks/useScrollTop';

const list = [
  {
    id: '1',
    title: 'How do you usually quote an event?',
    text:
      'Every event is different so we customize our offering to suit your needs. Do you want us for a fix time? Do you want only coffee or smothies and food as well? Do you want a se amount of coffees? It all depends so let us know what you need and we make sure we offer something yo and your guests will be happy with.',
  },
  {
    id: '2',
    title: 'Do you use compostable packaging?',
    text:
      "For sure. All our packaging is compostable(cups, lids, trays,plates, etc). If there're no compostable bins on site we provide ours and collect them so we make sure it will end up in commercial composting facilities.",
  },
  {
    id: '3',
    title: 'How much space do you need to set up?',
    text:
      'Our little truck fits almost everywhere! It takes about 5m x 3m x 2.7m (LxWxH)',
  },
  {
    id: '4',
    title: 'Do you need power?',
    text:
      'Depends on the type of event: 1) QUIET (up to 20 coffees per hour): our solar power system allow us to provide service off the gr so we can park anywhere without need to plug in! 2) BUSY (up to 40 coffees per hour): 10amps - normal power outlet. 3) HECTIC (more than 60 coffees per hour): 10amps or 16amps.',
  },
  {
    id: '5',
    title: 'Do you need water supply?',
    text:
      "Only if it's a multiple days event. The water tank in the truck has enough water for 1 day.",
  },
  {
    id: '6',
    title: 'Do you serve food as well?',
    text:
      'Yes. We can bring all our delicious baking, food and cakes to our events.',
  },
];

const useStyles = makeStyles({
  root: {
    padding: '100px 0',
    backgroundImage: 'url(/images/faq-background.webp)',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

function FAQ() {
  useScrollTop();
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item xs={10}>
        <Accordion items={list} />
      </Grid>
    </Grid>
  );
}

export default FAQ;
