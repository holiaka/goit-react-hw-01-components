import styled from "styled-components";
import { cssUnits } from "components/CssBaseUnits/CssUnits";

export const TransactionTable = styled.table`    
  table-layout: fixed;
  min-width: 1200px;
  border-collapse: collapse;
  border: 1px solid ${cssUnits.color.gray};

  font-size: ${cssUnits.sizeText.smMd};
    thead {        
        border: 1px solid ${cssUnits.color.gray};
        th {
            padding: 16px;
            border: 1px solid ${cssUnits.color.gray};
            background-color: ${cssUnits.color.blue};
            color: ${cssUnits.color.white};
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }

`;