import styled from 'styled-components';

const NextDaysContainer = ({ nextDays }) => {
  return (
    <StyledNextDays>
      <div>
        <p>monday</p>
        <p>{parseInt(nextDays.daily[1].temp.day)}&deg;C</p>
        <p>lalalala</p>
      </div>
      <p>{parseInt(nextDays.daily[2].temp.day)}&deg;C</p>
      <p>{parseInt(nextDays.daily[3].temp.day)}&deg;C</p>
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
