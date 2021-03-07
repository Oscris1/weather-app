import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// svg
import sunset from '../img/sunset.svg';

// components
import WeatherToday from './WeatherToday';
import NextDaysContainer from './NextDaysContainer';

const MainCard = ({ weatherToday, setWeatherToday }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextDays, setNextDays] = useState();

  if (isLoading) {
    return (
      <StyledLoadingCard>
        <h1>Loading...</h1>
      </StyledLoadingCard>
    );
  } else {
    if (nextDays != undefined) {
      return (
        <StyledCard type='space-around'>
          <WeatherToday
            weatherToday={weatherToday}
            setIsLoading={setIsLoading}
            setWeatherToday={setWeatherToday}
            setNextDays={setNextDays}
          />
          <NextDaysContainer nextDays={nextDays} />
        </StyledCard>
      );
    } else {
      return (
        <StyledCard type='space-around'>
          <WeatherToday
            weatherToday={weatherToday}
            setIsLoading={setIsLoading}
            setWeatherToday={setWeatherToday}
            setNextDays={setNextDays}
          />
        </StyledCard>
      );
    }
  }
  //
};

const StyledCard = styled.div`
  overflow: hidden;
  color: white;
  min-height: 95vh;
  min-width: 90%;
  border-radius: 2rem;
  text-align: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    min-height: 100vh;
    width: 100%;
    border-radius: 0rem;
  }
`;

const StyledLoadingCard = styled(StyledCard)`
  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent), url(${sunset});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1.2rem + 2vw);
`;

export default MainCard;
