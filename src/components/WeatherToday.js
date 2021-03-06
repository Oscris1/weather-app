import styled from 'styled-components';

// components
import SearchCity from './SearchCity';

// svg
import sunset from '../img/sunset.svg';

// icons
import { getIcon } from '../utility/getIcon';
import CurrentDate from '../utility/currentDate';

const WeatherToday = ({
  weatherToday,
  setIsLoading,
  setWeatherToday,
  setNextDays,
}) => {
  if (weatherToday != undefined) {
    return (
      <StyledWeatherToday>
        <SearchCity
          setIsLoading={setIsLoading}
          setWeatherToday={setWeatherToday}
          setNextDays={setNextDays}
        />
        <StyledBox>
          <div>
            <StyledLocation>
              {weatherToday.city.name}, {weatherToday.city.country}
            </StyledLocation>
            <SyledCurrentDate>
              {CurrentDate(weatherToday.city.timezone)}
            </SyledCurrentDate>
          </div>
          <StyledContentBox>
            <p className='temperature'>
              {parseInt(weatherToday.list[0].main.temp)}&deg;C
            </p>
            <StyledWeatherDescription>
              <img
                src={getIcon(weatherToday.list[0].weather[0].icon)}
                alt={weatherToday.list[0].weather[0].description}
              />
              <p>{weatherToday.list[0].weather[0].description}</p>
            </StyledWeatherDescription>
          </StyledContentBox>
        </StyledBox>
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
  flex: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const StyledBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledContentBox = styled.div`
  margin-top: 0.3rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
  .temperature {
    font-size: 8rem;
  }
`;

const StyledWeatherDescription = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLocation = styled.h1`
  font-size: 2.5rem;
`;

const SyledCurrentDate = styled.h2`
  font-family: sans-serif;
  font-weight: lighter;
  margin-bottom: 1rem;
`;

export default WeatherToday;
