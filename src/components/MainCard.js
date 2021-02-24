import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainCard = ({ weatherToday, setWeatherToday }) => {
  //const [weatherToday, setWeatherToday] = useState(0);
  const [yourCity, setYourCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    setYourCity(e.target.value);
  };

  const showWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Warszawa&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((resp) => {
        setWeatherToday(resp.data);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <StyledCard>
        <h1>Loading...</h1>
      </StyledCard>
    );
  }
  if (!weatherToday) {
    return (
      <StyledCard>
        <StyledFormDiv>
          <input
            onChange={(e) => changeHandler(e)}
            type='text'
            id='city'
            name='city'
            placeholder='City'
            value={yourCity}
          />
        </StyledFormDiv>
        <StyledButton onClick={showWeather}>Search</StyledButton>
      </StyledCard>
    );
  } else {
    return (
      <StyledCard type='space-around'>
        <h1>{weatherToday.city.name}</h1>
        <StyledWeatherToday>
          <p>{weatherToday.list[0].weather[0].description}</p>
          <p>{weatherToday.list[0].weather[0].icon}</p>
          <p>{parseInt(weatherToday.list[0].main.temp)} &deg;C</p>
        </StyledWeatherToday>
        <StyledNextDays>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
        </StyledNextDays>
      </StyledCard>
    );
  }
};

const StyledCard = styled.div.attrs((props) => ({
  type: props.type || 'center',
}))`
  background: white;
  min-height: 60vh;
  min-width: 50%;
  border-radius: 1rem;
  text-align: center;
  //border: solid;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.type};
`;

const StyledWeatherToday = styled.div`
  margin: 2rem;
`;

const StyledNextDays = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledFormDiv = styled.form``;

const StyledButton = styled.button`
  background: black;
  color: white;
  padding: 0.5rem 2rem;
  margin: 1rem auto;
`;

export default MainCard;
