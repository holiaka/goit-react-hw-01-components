// import PropTypes from "prop-types";
import { TransactionTable } from "./TransactionHistory.styled";


export const TransactionHistory = ({ transactions }) => {
    return (<TransactionTable>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {transactions.map(({id, type, amount, currency}) => {
          return (<tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>);
        })};
  </tbody>
</TransactionTable>);
};