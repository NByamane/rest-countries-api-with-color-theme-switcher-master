import React from 'react';
import countryDetailStyles from '../../../css/countryDetail.module.css';

interface CountryDataItemProps {
  title: string;
  value: string | string[];
}

const CountryDetailItem: React.FC<CountryDataItemProps> = ({ title, value }) => (
  <p className={countryDetailStyles.countryDataItem}>
    <span className={countryDetailStyles.countryDataItemTtl}>{title}:</span>&nbsp;{value}
  </p>
);

export default CountryDetailItem;