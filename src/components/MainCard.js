import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// svg
import cliffs from '../img/cliffs.svg';

// components
import WeatherToday from './WeatherToday';
import NextDaysContainer from './NextDaysContainer';

const MainCard = ({ weatherToday, setWeatherToday }) => {
  const [nextDays, setNextDays] = useState();

  if (nextDays != undefined) {
    return (
      <StyledCard type='space-around'>
        <WeatherToday
          weatherToday={weatherToday}
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
          setWeatherToday={setWeatherToday}
          setNextDays={setNextDays}
        />
      </StyledCard>
    );
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

export default MainCard;
