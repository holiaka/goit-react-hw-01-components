import styled from 'styled-components';
import { cssUnits } from 'components/CssBaseUnits/CssUnits';

export const CardWrapper = styled.li`
  min-width: 200px;
  background-color: ${cssUnits.color.white};
  box-shadow: 0px 3px 5px 0px rgba(170, 170, 170, 1);

  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;

  padding: 8px;
`;

export const FriendStatus = styled.span`
  color: ${({ isOnline }) => {
    return isOnline ? '#00ff00' : '#ff0000';
  }};
`;

export const FriendAvatar = styled.img`
  border-radius: ${cssUnits.borderRadius};
`;

export const FriendName = styled.p`
  margin: 0;
  font-size: ${cssUnits.sizeText.preLg};
`;
