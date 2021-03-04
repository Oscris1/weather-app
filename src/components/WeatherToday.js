import styled from 'styled-components';

// svg
import mountain from '../img/mountain.svg';
import blood from '../img/Blood.webp';
import sunset from '../img/sunset.svg';

// icons
import { getIcon } from '../utility/getIcon';

const WeatherToday = ({ weatherToday, date }) => {
  return (
    <StyledWeatherToday>
      <h1>
        {weatherToday.city.name}, {weatherToday.city.country}
      </h1>
      <h2>{date.toUTCString()}</h2>
      <p>{weatherToday.list[0].weather[0].description}</p>
      <div className='box'>
        <img
          src={getIcon(weatherToday.list[0].weather[0].icon)}
          alt={weatherToday.list[0].weather[0].description}
        />
        <p className='temperature'>
          {parseInt(weatherToday.list[0].main.temp)}&deg;C
        </p>
      </div>
    </StyledWeatherToday>
  );
};

const StyledWeatherToday = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), transparent), url(${sunset});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 4;
  position: relative;
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .temperature {
    font-size: 4rem;
  }
`;

export default WeatherToday;