import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

// icons
import { getIcon } from '../utility/getIcon';

import mountain from '../img/mountain.svg';
import blood from '../img/Blood.webp';
import sunset from '../img/sunset.svg';

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
        <StyledNextDays>
          <p>{parseInt(nextDays.daily[1].temp.day)}&deg;C</p>
          <p>{parseInt(nextDays.daily[2].temp.day)}&deg;C</p>
          <p>{parseInt(nextDays.daily[3].temp.day)}&deg;C</p>
        </StyledNextDays>
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
  justify-content: ${(props) => props.type};
  img {
    height: 5rem;
    filter: invert(95%) sepia(13%) saturate(312%) hue-rotate(112deg)
      brightness(101%) contrast(116%);
  }
`;

const StyledWeatherToday = styled.div`
  background: url(${sunset});
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

const StyledNextDays = styled.div`
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 1);
  color: black;
  flex: 1;
  min-height: 5rem;
`;

const StyledFormDiv = styled.form``;

const StyledButton = styled.button`
  background: black;
  color: white;
  padding: 0.5rem 2rem;
  margin: 1rem auto;
`;

export default MainCard;
