import React, { useState } from 'react';

import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

// svg
import sunset from './img/sunset.svg';
import dark_night from './img/dark-night.svg';
import cliffs from './img/cliffs.svg';

// components
import MainCard from './components/MainCard';

//helper functions
import { getBackground } from './utility/getBackground';

function App() {
  const [weatherToday, setWeatherToday] = useState(undefined);
  return (
    <div className='App'>
      <GlobalStyle />
      <StyledBackground
        bg={
          weatherToday
            ? getBackground(parseInt(weatherToday.list[0].main.temp))
            : cliffs
        }
      >
        <MainCard
          weatherToday={weatherToday}
          setWeatherToday={setWeatherToday}
        />
      </StyledBackground>
    </div>
  );
}

// background: linear-gradient(to bottom, rgb(255, 197, 201), rgb(60, 61, 88));
const StyledBackground = styled.div.attrs((props) => ({
  bg: props.bg || cliffs,
}))`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default App;
