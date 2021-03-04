import styled from 'styled-components';

const NextDaysContainer = ({ nextDays }) => {
  return (
    <StyledNextDays>
      <p>{parseInt(nextDays.daily[1].temp.day)}&deg;C</p>
      <p>{parseInt(nextDays.daily[2].temp.day)}&deg;C</p>
      <p>{parseInt(nextDays.daily[3].temp.day)}&deg;C</p>
    </StyledNextDays>
  );
};

const StyledNextDays = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 1);
  color: black;
  flex: 1;
  min-height: 5rem;
`;

export default NextDaysContainer;
