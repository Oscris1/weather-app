import styled from 'styled-components';

import NextDayDetail from './NextDayDetail';

const NextDaysContainer = ({ nextDays }) => {
  return (
    <StyledNextDays>
      <NextDayDetail nextDays={nextDays} day={1} />
      <NextDayDetail nextDays={nextDays} day={2} />
      <NextDayDetail nextDays={nextDays} day={3} />
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
