import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchCity = ({ setIsLoading, setWeatherToday, setNextDays }) => {
  const [yourCity, setYourCity] = useState('');

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
  return (
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
  );
};

const StyledFormDiv = styled.form``;

const StyledButton = styled.button`
  background: black;
  color: white;
  padding: 0.5rem 2rem;
  margin: 1rem auto;
`;

export default SearchCity;
