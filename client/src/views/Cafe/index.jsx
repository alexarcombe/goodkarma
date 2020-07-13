import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import PageHeader from '../../components/PageHeader';
import ImageBox from '../../components/ImageBox';
import useScrollTop from '../../hooks/useScrollTop';
import Modal from '../../components/Modal';

const items = [
  {
    id: '0',
    title: 'Staff',
    imageUrl: '/images/staff.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus natus quibusdam, recusandae reiciendis nostrum fugiat. Quas voluptatem nulla vitae asperiores distinctio rerum, quos voluptatum, voluptates illum provident sunt, accusantium obcaecati similique et natus laudantium quo! Consequuntur nisi ut cumque atque? ',
  },

  {
    id: '1',
    title: 'Coffee',
    imageUrl: '/images/coffee.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus natus quibusdam, recusandae reiciendis nostrum fugiat. Quas voluptatem nulla vitae asperiores distinctio rerum, quos voluptatum, voluptates illum provident sunt, accusantium obcaecati similique et natus laudantium quo! Consequuntur nisi ut cumque atque? ',
  },
  {
    id: '2',
    title: 'Bakery',
    imageUrl: '/images/bakery.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus natus quibusdam, recusandae reiciendis nostrum fugiat. Quas voluptatem nulla vitae asperiores distinctio rerum, quos voluptatum, voluptates illum provident sunt, accusantium obcaecati similique et natus laudantium quo! Consequuntur nisi ut cumque atque? ',
  },
  {
    id: '3',
    title: 'Gelato',
    imageUrl: '/images/gelato.jpg',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus natus quibusdam, recusandae reiciendis nostrum fugiat. Quas voluptatem nulla vitae asperiores distinctio rerum, quos voluptatum, voluptates illum provident sunt, accusantium obcaecati similique et natus laudantium quo! Consequuntur nisi ut cumque atque? ',
  },
];

function Cafe() {
  useScrollTop();
  const [open, setOpen] = useState(-1);
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <PageHeader
          top="our cafe"
          bottom="where we managed to fit everything we love"
        />
      </Grid>
      <Grid item xs={8}>
        <Typography align="center" variant="body2" gutterBottom>
          we couldn't fit all we like in the little truck so we realized we
          needed a bigger place.
        </Typography>
        <Typography align="center" variant="body2" gutterBottom>
          and that's why we opened our little cafe at the Auckland Fish Market
          in New Zealand.
        </Typography>
        <Typography align="center" variant="body2" gutterBottom>
          here we bake, we cook, we brew and we serve the most delicious
          Itialian gelato you can find in New Zealand.
        </Typography>
        <Typography align="center" variant="body2" gutterBottom>
          come visit us
          <br />
          22 Jellicoes st, Wynyard Quarter, Auckland, New Zealand
        </Typography>
        <Typography variant="body2"></Typography>
      </Grid>
      <Grid item xs={10} container justify="center" spacing={2}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} md={6} lg={3}>
            <ImageBox
              image={item.imageUrl}
              header={item.title}
              onClick={() => setOpen(item.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open !== -1}
        onClose={() => setOpen(-1)}
        content={items[open]}
      />
    </Grid>
  );
}

export default Cafe;
