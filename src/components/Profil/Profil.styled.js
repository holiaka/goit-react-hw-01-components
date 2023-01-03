import styled from "styled-components";
import {cssUnits} from "../CssBaseUnits/CssUnits"

export const ProfilCard = styled.div`
    border-radius: ${cssUnits.borderRadius};
    font-size: ${cssUnits.sizeText.sm};
`;

export const UserInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `