import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// components
import WeatherToday from './WeatherToday';
import NextDaysContainer from './NextDaysContainer';

// icons
//import { getIcon } from '../utility/getIcon';

const MainCard = ({ weatherToday, setWeatherToday }) => {
  //const [weatherToday, setWeatherToday] = useState(0);
  const [yourCity, setYourCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [nextDays, setNextDays] = useState();

  const changeHandler = (e) => {
    setYourCity(e.target.value);
  };

  const showWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${yourCity}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then((resp) => {
        setWeatherToday(resp.data);
        return resp.data;
      })
      .then((data) => {
        const lat = data.city.coord.lat;
        const lon = data.city.coord.lon;
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API}
          `);
      })
      .then((response) => {
        console.log(response.data);
        setNextDays(response.data);
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
  if (!weatherToday && !nextDays) {
    return (
      <StyledCard>
        <StyledFormDiv onSubmit={showWeather}>
          <input
            onChange={(e) => changeHandler(e)}
            type='text'
            id='city'
            name='city'
            placeholder='City'
            value={yourCity}
          />
          <div className='button-container'>
            <StyledButton type='submit'>Search</StyledButton>
          </div>
        </StyledFormDiv>
      </StyledCard>
    );
  } else {
    // get Date from dt
    const timezone =
      (weatherToday.list[0].dt + weatherToday.city.timezone) * 1000;
    //const d = new Date(weatherToday.list[0].dt * 1000);
    //console.log(d.toUTCString());
    const now = Date.now();
    const date = new Date(now + weatherToday.city.timezone * 1000);
    console.log(date.toUTCString());
    //console.log(d);
    //d.getDate(weatherToday.list[0].dt + weatherToday.city.timezone);
    //console.log(d);
    ////console.log(date.toUTCString());
    //console.log(weatherToday);
    //console.log(weatherToday.list[20].dt);
    //console.log(date.toUTCString());
    //console.log(date.toUTCString());
    //
    return (
      <StyledCard type='space-around'>
        <WeatherToday weatherToday={weatherToday} date={date} />
        <NextDaysContainer nextDays={nextDays} />
      </StyledCard>
    );
  }
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

const StyledFormDiv = styled.form``;

const StyledButton = styled.button`
  background: black;
  color: white;
  padding: 0.5rem 2rem;
  margin: 1rem auto;
`;

export default MainCard;
