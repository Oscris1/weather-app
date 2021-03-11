import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import magnifier from '../img/magnifier.svg';

const SearchCity = ({ setWeatherToday, setNextDays, setIsError }) => {
  const [yourCity, setYourCity] = useState('');

  const changeHandler = (e) => {
    setYourCity(e.target.value);
  };

  if (yourCity) {
  }
  const showWeather = async (e) => {
    e.preventDefault();
    if (yourCity) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${yourCity}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
        )
        .then((resp) => {
          setYourCity('');
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
          //console.log(response.data);
          setNextDays(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.clear();
            setWeatherToday(undefined);
            setNextDays(undefined);
            setYourCity('');
            setIsError(true);
          }
        });
    }
  };
  return (
    <StyledFormDiv onSubmit={showWeather}>
      <input
        onChange={(e) => changeHandler(e)}
        type='text'
        id='city'
        name='city'
        placeholder='Search...'
        value={yourCity}
      />
      <StyledButton type='submit'>
        <img src={magnifier} />
      </StyledButton>
    </StyledFormDiv>
  );
};

const StyledFormDiv = styled.form`
  display: flex;
  height: 3rem;
  margin: 1.5rem;
  #city {
    width: 60vw;
    padding: 0.8rem;
    border-bottom-left-radius: 0.6rem;
    border-top-left-radius: 0.6rem;
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: none;
  border-bottom-right-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  outline: none;
  cursor: pointer;
  img {
    height: 60%;
    width: 60%;
    filter: invert(95%) sepia(13%) saturate(312%) hue-rotate(112deg)
      brightness(101%) contrast(116%);
  }
`;

export default SearchCity;
