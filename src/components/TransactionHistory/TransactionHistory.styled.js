import styled from 'styled-components';
import { cssUnits } from 'components/CssBaseUnits/CssUnits';

export const TransactionTable = styled.table`
  table-layout: fixed;
  min-width: 900px;
  border-collapse: collapse;
  border: 1px solid ${cssUnits.color.gray};
  box-shadow: 0px 3px 5px 0px rgba(170, 170, 170, 1);
  margin-bottom: 40px;

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

  tbody {
    border: 1px solid ${cssUnits.color.gray};
    color: ${cssUnits.color.darkGray};
    tr {
      :nth-child(odd) {
        background-color: ${cssUnits.color.white};
      }
      :nth-child(even) {
        background-color: ${cssUnits.color.lightGray};
      }
    }

    td {
      border: 1px solid ${cssUnits.color.gray};
      padding: 16px;
      text-align: center;

      :first-child {
        text-transform: capitalize;
      }
    }
  }
`;
