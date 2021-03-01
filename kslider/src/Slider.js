import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 10]);

  const handleChange = (event, newValue) => {
    const maxDiff = 1;
    const min = newValue[0], max = newValue[1];
    const diff = max - min;

    // const diff = +parseFloat(max - min).toFixed(2);

    console.log(min, max, diff);
    if (diff >= maxDiff) {
      setValue(newValue);
    }
  };

  return (
    <div className={classes.root}>
      <h1>Task1.1</h1>
      <Slider
        value={value}
        onChange={handleChange}
        step={0.01}
        min={0}
        max={10}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
      />
    </div>
  );
}