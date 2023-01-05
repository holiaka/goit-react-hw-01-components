import styled from "styled-components";
import {cssUnits} from "../CssBaseUnits/CssUnits"

export const ProfilCard = styled.div`
    width: 400px;
    height: 550px;
    border-radius: ${cssUnits.borderRadius};
    font-size: ${cssUnits.sizeText.sm};
`;

export const UserInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${cssUnits.bgColor.white};
    padding: 40px;
`;

export const UserPhoto = styled.img`
    width: 150px;   
    border-radius: ${cssUnits.fullCircle};
    object-fit: cover;
    margin-bottom: 30px;
`;

export const UserName = styled.p`
    font-size: ${cssUnits.sizeText.lg};
    font-weight: 700;

`
export const UserTag = styled.p`
    font-size: ${cssUnits.sizeText.preLg};
`
export const UserLocation = styled.p`
    font-size: ${cssUnits.sizeText.preLg};
`

export const SocialData = styled.div`
    background-color: ${cssUnits.bgColor.lightGray};
    display: flex;
    justify-content: space-between;
    align-items: center;

    li{        
        border-right: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            display: block;
        }

    }
`