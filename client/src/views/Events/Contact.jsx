import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export default function Contact() {
  return (
    <form>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={11} md={6}>
          <TextField id="name" label="Name" fullWidth />
          <TextField id="email" label="Email" fullWidth />
          <TextField id="phone" label="Phone" fullWidth />
          <TextField id="subject" label="Subject" fullWidth />
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            id="message"
            label="Message"
            multiline
            rows={8}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
}
