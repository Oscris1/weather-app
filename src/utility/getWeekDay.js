export const getWeekDay = (timestamp, timezone) => {
  const date = new Date((timestamp + timezone) * 1000);
  const weekday = date.toUTCString().split(' ')[0].split(',')[0];
  return `${weekday}`;
};
