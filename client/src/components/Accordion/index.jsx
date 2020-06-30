import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  transparent: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  text: {
    color: '#fff',
  },
});

export default function Accordion(props) {
  const { items } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState('');

  const handleChange = (index) => {
    if (expanded === `expand${index}`) {
      setExpanded('');
    } else {
      setExpanded(`expand${index}`);
    }
  };

  const content = items.map((item, index) => (
    <ExpansionPanel
      expanded={expanded === `expand${index}`}
      className={classes.transparent}
      key={item.id}
      onChange={() => handleChange(index)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" color="primary">
          {item.title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.text} variant="body1">
          {item.text}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ));

  return <div>{content}</div>;
}
