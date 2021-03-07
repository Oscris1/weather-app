import styled from 'styled-components';

import NextDayDetail from './NextDayDetail';

const NextDaysContainer = ({ nextDays }) => {
  return (
    <StyledNextDays>
      <NextDayDetail day={nextDays.daily[1]} />
      <NextDayDetail day={nextDays.daily[2]} />
      <NextDayDetail day={nextDays.daily[3]} />
    </StyledNextDays>
  );
};

const StyledNextDays = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  color: black;
`;

export default NextDaysContainer;
