import PropTypes from 'prop-types';
import {
  SectionTitle,
  StatInformation,
  StatisticBashboard,
  StatLabel,
  StatParameters,
  StatPercentage,
} from './Statistic.styled';
import { getRandomColor } from './RandomColorGenerator';

export const Statistic = ({ title, data }) => {
  return (
    <StatisticBashboard>
      {(title && <SectionTitle>{title}</SectionTitle>)}
      <StatInformation>
        {data.map(item => (
          <StatParameters
            key={item.id}
            style={{ backgroundColor: `${getRandomColor()}` }}
          >
            <StatLabel>{item.label}</StatLabel>
            <StatPercentage>{`${item.percentage}%`}</StatPercentage>
          </StatParameters>
        ))}
      </StatInformation>
    </StatisticBashboard>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
