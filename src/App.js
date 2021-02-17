import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

// components
import MainCard from './components/MainCard';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <StyledBackground>
        <MainCard />
      </StyledBackground>
    </div>
  );
}

const StyledBackground = styled.div`
  background: linear-gradient(to right, #dbdfe6, #8299ca);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default App;
