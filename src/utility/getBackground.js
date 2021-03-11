import hot_day from '../img/hot-day.svg';
import winter from '../img/winter.svg';
import mountain_day from '../img/mountain-day.svg';

export const getBackground = (temperature) => {
  if (temperature < 1) {
    return winter;
  } else if (temperature < 20) {
    return mountain_day;
  } else {
    return hot_day;
  }
};
