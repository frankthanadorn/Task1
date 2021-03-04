import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


export default function DiscreteSlider(props) {
  const {value,setValue}=props
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    if (((newValue[1]-newValue[0])>0.01) && 
    ((value[1]-value[0])>0.01)) {
        setValue(newValue)
    } 
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min = {0.00}
        max = {10.00}
        step = {0.01}
      />
    </div>
  );
}