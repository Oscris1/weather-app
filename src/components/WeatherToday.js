import styled from 'styled-components';

// components
import SearchCity from './SearchCity';

// svg
import sunset from '../img/sunset.svg';

// icons
import { getIcon } from '../utility/getIcon';

const WeatherToday = ({
  weatherToday,
  setIsLoading,
  setWeatherToday,
  setNextDays,
}) => {
  if (weatherToday != undefined) {
    const now = Date.now();
    const date = new Date(now + weatherToday.city.timezone * 1000);

    return (
      <StyledWeatherToday>
        <SearchCity
          setIsLoading={setIsLoading}
          setWeatherToday={setWeatherToday}
          setNextDays={setNextDays}
        />
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
  } else {
    return (
      <StyledWeatherToday>
        <SearchCity
          setIsLoading={setIsLoading}
          setWeatherToday={setWeatherToday}
          setNextDays={setNextDays}
        />
      </StyledWeatherToday>
    );
  }
};

const StyledWeatherToday = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent), url(${sunset});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 5;
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .temperature {
    font-size: 4rem;
  }
`;

export default WeatherToday;
