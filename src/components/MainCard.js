import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// svg
import clear_sky_d from '../img/clear-sky-d.svg';
import clear_sky_n from '../img/clear-sky-n.svg';
import few_clouds_d from '../img/few-clouds-d.svg';
import few_clouds_n from '../img/few-clouds-n.svg';
import clouds_d from '../img/clouds-d.svg';
import clouds_n from '../img/clouds-n.svg';
import broken_clouds_d from '../img/broken-clouds-d.svg';
import broken_clouds_n from '../img/broken-clouds-n.svg';
import shower_rain_d from '../img/shower-rain-d.svg';
import shower_rain_n from '../img/shower-rain-n.svg';
import rain_d from '../img/rain-d.svg';
import rain_n from '../img/rain-n.svg';
import thunder_d from '../img/thunder-d.svg';
import thunder_n from '../img/thunder-n.svg';
import snow_d from '../img/snow-d.svg';
import snow_n from '../img/snow-n.svg';
import mist_d from '../img/mist-d.svg';
import mist_n from '../img/mist-n.svg';

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
        `http://api.openweathermap.org/data/2.5/forecast?q=${yourCity}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
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
    const getIcon = (icon) => {
      if (icon === '01d') return clear_sky_d;
      else if (icon === '01n') return clear_sky_n;
      else if (icon === '02d') return few_clouds_d;
      else if (icon === '02n') return few_clouds_n;
      else if (icon === '03d') return clouds_d;
      else if (icon === '03n') return clouds_n;
      else if (icon === '04d') return broken_clouds_d;
      else if (icon === '04n') return broken_clouds_n;
      else if (icon === '09d') return shower_rain_d;
      else if (icon === '09n') return shower_rain_n;
      else if (icon === '10d') return rain_d;
      else if (icon === '10n') return rain_n;
      else if (icon === '11d') return thunder_d;
      else if (icon === '11n') return thunder_n;
      else if (icon === '13d') return snow_d;
      else if (icon === '13n') return snow_n;
      else if (icon === '50d') return mist_d;
      else if (icon === '50d') return mist_n;
      else return mist_n;
    };
    return (
      <StyledCard type='space-around'>
        <h1>{weatherToday.city.name}</h1>
        <StyledWeatherToday>
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
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.type};
  img {
    height: 5rem;
    //filter: invert(95%) sepia(13%) saturate(312%) hue-rotate(112deg)
    //  brightness(101%) contrast(116%);
  }
`;

const StyledWeatherToday = styled.div`
  margin: 2rem;
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .temperature {
    font-size: 4rem;
  }
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
