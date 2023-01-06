import styled from 'styled-components';
import { cssUnits } from '../CssBaseUnits/CssUnits';

export const ProfilCard = styled.div`
  width: 380px;
  border-radius: ${cssUnits.borderRadius};
  font-size: ${cssUnits.sizeText.sm};
  box-shadow: 0px 0px 5px 0px rgba(170, 170, 170, 1);
`;

export const UserInformation = styled.div`
  border-top-left-radius: ${cssUnits.borderRadius};
  border-top-right-radius: ${cssUnits.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  background-color: ${cssUnits.color.white};
  padding: 40px;

  p {
    margin: 0;
  }
`;

export const UserPhoto = styled.img`
  width: 150px;
  border-radius: ${cssUnits.fullCircle};
  object-fit: cover;
  margin-bottom: 25px;
`;

export const UserName = styled.p`
  font-size: ${cssUnits.sizeText.lg};
  font-weight: 700;
`;
export const UserTag = styled.p`
  font-size: ${cssUnits.sizeText.preLg};
  color: ${cssUnits.color.darkGray};
`;
export const UserLocation = styled.p`
  font-size: ${cssUnits.sizeText.preLg};
  color: ${cssUnits.color.darkGray};
`;
export const SocialData = styled.div`
  border-top: 1px solid ${cssUnits.color.gray};
  height: 100px;
  background-color: ${cssUnits.color.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-left-radius: ${cssUnits.borderRadius};
  border-bottom-right-radius: ${cssUnits.borderRadius};
  div {
    width: 100%;
    height: 100%;
    border-right: 1px solid ${cssUnits.color.gray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  div:last-child {
    border-right: none;
  }
`;
export const SocialStatName = styled.span`
  font-size: ${cssUnits.sizeText.md};
  color: ${cssUnits.color.darkGray};
`;
export const SocialStatValue = styled.span`
  font-size: ${cssUnits.sizeText.preLg};
  font-weight: 700;
`;
