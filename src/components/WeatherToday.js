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
            <div className='temperature'>
              <p>{parseInt(weatherToday.list[0].main.temp)}°C</p>
            </div>
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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)),
    url(${sunset});
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
  padding: 0.5rem;
`;

const StyledContentBox = styled.div`
  margin-top: 0.3rem;
  margin: 1rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  .temperature {
    text-align: center;
    font-size: calc(5rem + 4vw);
    line-height: calc(6rem + 4vw);
  }
`;

const StyledWeatherDescription = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

const StyledLocation = styled.h1`
  font-size: calc(2rem + 1.3vw);
  line-height: calc(3rem + 1vw);
`;

const SyledCurrentDate = styled.h2`
  font-family: sans-serif;
  font-weight: lighter;
  margin-top: 0.3rem;
`;

export default WeatherToday;
