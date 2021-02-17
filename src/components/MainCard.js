import React from 'react';
import styled from 'styled-components';

const MainCard = () => {
  return (
    <StyledCard>
      <h1>City</h1>
      <h2>Weather</h2>
      <StyledNextDays>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
      </StyledNextDays>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: white;
  min-height: 30rem;
  min-width: 50%;
  border-radius: 1rem;
  text-align: center;
  //border: solid;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledNextDays = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default MainCard;
