import styled from 'styled-components';
import { getIcon } from '../utility/getIcon';

const NextDayDetail = ({ day }) => {
  return (
    <StyledNextDayDetail>
      <p>monday</p>
      <img src={getIcon(day.weather[0].icon)} alt=''></img>
      <div className='temp-box'>
        <p>{parseInt(day.temp.max)}&deg;C</p>
        <p className='minimum'>{parseInt(day.temp.min)}&deg;C</p>
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
