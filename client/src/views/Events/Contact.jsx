import React from 'react';
import { Grid, TextField, Button, makeStyles } from '@material-ui/core';
import useFormFields, {
  CHANGE,
  SET_FIELDS,
  SET_ERRORS,
} from '../../hooks/useFormFields';

const useStyles = makeStyles({
  center: {
    textAlign: 'center',
  },
  white: {
    color: '#fff',
  },
});

const initValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const classes = useStyles();
  const [{ values, errors }, dispatch] = useFormFields(initValues);

  const onChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: CHANGE, payload: { id, value } });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch({ type: SET_FIELDS, payload: { values: initValues } });
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={11} md={6}>
          <TextField
            id="name"
            label="Name"
            value={values.name}
            onChange={onChange}
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            value={values.email}
            onChange={onChange}
            fullWidth
          />
          <TextField
            id="phone"
            label="Phone"
            value={values.phone}
            onChange={onChange}
            fullWidth
          />
          <TextField
            id="subject"
            label="Subject"
            value={values.subject}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            id="message"
            label="Message"
            value={values.message}
            onChange={onChange}
            multiline
            rows={8}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={classes.center}>
          <Button
            className={classes.white}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
