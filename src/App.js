import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <StyledCard>
        <h1>Hello world</h1>
      </StyledCard>
    </div>
  );
}

const StyledCard = styled.div`
  background: black;
  height: 100vh;
  color: white;
`;

export default App;
