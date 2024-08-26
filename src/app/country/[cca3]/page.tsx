'use client';
import React from "react";
import { useCountryData } from "../../../context/CountryDataContext";
import Image from "next/image";
import styles from "../../../css/countryDetail.module.css";
import CountryDetailItem from "./CountryDetailItem";

export default function CountryDetail({ params }: { params: { cca3: string } }) {
  const { countryData, loading, error } = useCountryData();
  const cca3 = params.cca3;

  if (loading) { return <div>Loading...</div>; }
  if (error) { return <div>Error: {error}</div>; }

  //cca3と一致するデータを探して格納
  const country = countryData.find(countryItem => countryItem.cca3 === cca3);

  //countryがundefinedの場合の早期リターン
  if(!country){
    return <div>データが見つかりませんでした。</div>;
  }

  //最初の言語コードを取得 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  const firstLanguageCode = Object.keys(country.languages)[0];
  //nativeNameのなかの最初の言語コードと一致するobjectのcommonを格納。ない場合はNot Foundを入れる。
  const nativeName = country.name.nativeName[firstLanguageCode]?.common || "Not Found";

  //通過の型アサーション
  // const currencyNames = Object.values(country.currencies).map((countryItem) => (countryItem as { name: string; symbol: string }).name);

  return (
    <div className={styles.countryDetailContainer}>
      <Image
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className={styles.countryFlagImg}
        width={500}
        height={300}
      />
      <div className={styles.countryDetailContent}>
        <h2 className={styles.countryName}>{country.name.common}</h2>
        <div className={styles.countryData}>
          <div className={styles.countryDataBox}>
            <CountryDetailItem title="Native Name" value={nativeName} />
            <CountryDetailItem title="Population" value={country.population.toLocaleString()} />
            <CountryDetailItem title="Region" value={country.region} />
            <CountryDetailItem title="Capital" value={country.capital} />
          </div>
          <div className={styles.countryDataBox}>
            <CountryDetailItem title="Top Level Domain" value={country.tld} />
            <CountryDetailItem title="Currencies" value={Object.keys(country.currencies).map(key => country.currencies[key].name).join(', ')} />
            <CountryDetailItem title="Languages" value={Object.values(country.languages).join(', ')} />
          </div>
        </div>
      </div>
    </div>
  );
}
