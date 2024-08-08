'use client';
import React from "react";
import { useCountryData } from "../../../context/CountryDataContext";
import Image from "next/image";
import countryDetailStyles from "../../../css/countryDetail.module.css"; //ここ、@で指定できないのと型宣言が見つかりませんというエラーが出ますが原因がわかりません😇反映はされてます

export default function CountryDetail({ params }: { params: { cca3: string } }) {
  const { countryData, loading, error } = useCountryData();
  const cca3 = params.cca3;

  if (loading) { return <div>Loading...</div>; }
  if (error) { return <div>Error: {error}</div>; }

  //cca3と一致するデータを探して格納
  const country = countryData.find(countryItem => countryItem.cca3 === cca3);

  //テスト（後で消す）
  console.log(country.name.nativeName); 
  console.log(country); 

  //最初の言語コードを取得 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  const firstLanguageCode = Object.keys(country.languages)[0];
  //nativeNameのなかの最初の言語コードと一致するobjectのcommonを格納。ない場合はNot Foundを入れる。
  const nativeName = country.name.nativeName[firstLanguageCode]?.common || "Not Found";

  //通過の型アサーション
  const currencyNames = Object.values(country.currencies).map((countryItem) => (countryItem as { name: string; symbol: string }).name);

  return (
    <div className={countryDetailStyles.countryDetailContainer}>
      <Image
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className={countryDetailStyles.countryFlagImg}
        width={500}
        height={300}
      />
      <div className={countryDetailStyles.countryDetailContent}>
        <h2 className={countryDetailStyles.countryName}>{country.name.common}</h2>
        <div className={countryDetailStyles.countryData}>
          <div className={countryDetailStyles.countryDataBox}>
            <p className={countryDetailStyles.countryDataItem}><span className={countryDetailStyles.countryDataItemTtl}>Native Name:</span> {nativeName}</p>
            <p className={countryDetailStyles.countryDataItem}><span className={countryDetailStyles.countryDataItemTtl}>Population:</span> {country.population.toLocaleString()}</p>
            <p className={countryDetailStyles.countryDataItem}><span className={countryDetailStyles.countryDataItemTtl}>Region:</span> {country.region}</p>
            <p className={countryDetailStyles.countryDataItem}><span className={countryDetailStyles.countryDataItemTtl}>Capital:</span> {country.capital}</p>
          </div>
          <div className={countryDetailStyles.countryDataBox}>
            <p className={countryDetailStyles.countryDataItem}><span className={countryDetailStyles.countryDataItemTtl}>Top Level Domain:</span> {country.tld}</p>
            <p className={countryDetailStyles.countryDataItem}><span className={countryDetailStyles.countryDataItemTtl}>Currencies:</span> {currencyNames.join(', ')}</p>
            <p className={countryDetailStyles.countryDataItem}><span className={countryDetailStyles.countryDataItemTtl}>Languages:</span> {Object.values(country.languages).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
