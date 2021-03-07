import styled from 'styled-components';
import { getIcon } from '../utility/getIcon';
import { getWeekDay } from '../utility/getWeekDay';

const NextDayDetail = ({ nextDays, day }) => {
  return (
    <StyledNextDayDetail>
      <p>{getWeekDay(nextDays.daily[day].dt, nextDays.timezone_offset)}</p>
      <img src={getIcon(nextDays.daily[day].weather[0].icon)} alt=''></img>
      <div className='temp-box'>
        <p>{parseInt(nextDays.daily[day].temp.max)}&deg;C</p>
        <p className='minimum'>
          {parseInt(nextDays.daily[day].temp.min)}&deg;C
        </p>
      </div>
    </StyledNextDayDetail>
  );
};

const StyledNextDayDetail = styled.div`
  .temp-box {
    display: flex;
    justify-content: space-between;
    .minimum {
      color: grey;
      padding-left: 0.5rem;
    }
  }
`;
export default NextDayDetail;
