import styled from 'styled-components';
import { cssUnits } from '../CssBaseUnits/CssUnits';


export const StatisticBashboard = styled.section`
  background-color: ${cssUnits.color.white};
  width: 380px;
`;

export const SectionTitle = styled.h2`
  margin-top: 36px;
  margin-bottom: 36px;
  font-size: ${cssUnits.sizeText.lg};
  text-transform: uppercase;
  text-align: center;
`;

export const StatInformation = styled.ul`
  list-style: none;
margin: 0;
padding: 0;

  display: flex;
  flex-wrap: wrap;
  
  
  
`;

export const StatParameters = styled.li`
    flex-basis: 19.7%;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${cssUnits.color.white};
    
    padding: 10px;
    padding-bottom: 20px;

    text-align: center;
`;

export const StatLabel = styled.span`
  font-size: ${cssUnits.sizeText.preLg}; 
`;

export const StatPercentage = styled.span`
  font-size: ${cssUnits.sizeText.lg};
`;
