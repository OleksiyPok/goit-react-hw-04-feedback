import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivPercentage = 0 }) => (
  <StatisticsList>
    <StatisticsItem>good: {good}</StatisticsItem>
    <StatisticsItem>neutral: {neutral}</StatisticsItem>
    <StatisticsItem>bad: {bad}</StatisticsItem>
    <StatisticsItem>Total: {total}</StatisticsItem>
    <StatisticsItem>Positive feedback: {positivPercentage}%</StatisticsItem>
  </StatisticsList>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
