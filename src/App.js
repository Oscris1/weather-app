import React, { useState } from 'react';

import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

// components
import MainCard from './components/MainCard';

function App() {
  const [weatherToday, setWeatherToday] = useState();
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

const StyledBackground = styled.div`
  background: linear-gradient(to bottom, #8299ca, #dbdfe6);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default App;
