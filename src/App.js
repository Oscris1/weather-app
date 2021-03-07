import React, { useState } from 'react';

import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

import sunset from './img/sunset.svg';

// components
import MainCard from './components/MainCard';

function App() {
  const [weatherToday, setWeatherToday] = useState(undefined);
  return (
    <div className='App'>
      <GlobalStyle />
      <StyledBackground>
        <MainCard
          weatherToday={weatherToday}
          setWeatherToday={setWeatherToday}
        />
      </StyledBackground>
    </div>
  );
}

// background: linear-gradient(to bottom, rgb(255, 197, 201), rgb(60, 61, 88));
const StyledBackground = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(${sunset});
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
