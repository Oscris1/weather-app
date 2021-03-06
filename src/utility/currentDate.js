const CurrentDate = (timezone) => {
  const now = Date.now();
  const date = new Date(now + timezone * 1000);
  const dateArray = date.toUTCString().split(' ');
  return `${dateArray[0]} ${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
};

export default CurrentDate;
