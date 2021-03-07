export const getWeekDay = (timestamp, timezone) => {
  const date = new Date((timestamp + timezone) * 1000);
  const dateArray = date.toUTCString().split(' ');
  return `${dateArray[0].split(',')[0]}`;
};
