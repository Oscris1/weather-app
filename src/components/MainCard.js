import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// components
import WeatherToday from './WeatherToday';
import NextDaysContainer from './NextDaysContainer';

const MainCard = ({ weatherToday, setWeatherToday }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextDays, setNextDays] = useState();

  if (isLoading) {
    return (
      <StyledCard>
        <h1>Loading...</h1>
      </StyledCard>
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

const StyledCard = styled.div.attrs((props) => ({
  type: props.type || 'center',
}))`
  overflow: hidden;
  color: white;
  min-height: 95vh;
  min-width: 90%;
  border-radius: 2rem;
  text-align: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  //justify-content: ${(props) => props.type};
  img {
    height: 5rem;
    filter: invert(95%) sepia(13%) saturate(312%) hue-rotate(112deg)
      brightness(101%) contrast(116%);
  }
`;

export default MainCard;
