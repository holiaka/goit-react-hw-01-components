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
    

    padding: 40px;
`;

export const UserPhoto = styled.img`
    width: 150px;
    height: 150px;
    border-radius: ${cssUnits.fullCircle};
    object-fit: cover;
    margin-bottom: 30px;
`;

export const UserName = styled.p`
    font-size: ${cssUnits.sizeText.lg};
    font-weight: 700;
`