import styled from "styled-components";
import { cssUnits } from "components/CssBaseUnits/CssUnits";

export const CardWrapper = styled.li`
width: 200px;
background-color: ${cssUnits.color.white};

display: flex;
justify-content: left;
align-items: center;
gap: 10px;

padding: 5px;
`;

export const FriendStatus = styled.span`

`;

export const FriendAvatar = styled.img`
border-radius: ${cssUnits.borderRadius};
`;

export const FriendName = styled.p`
margin: 0;
font-size: ${cssUnits.sizeText.lg}`;