'use client';
import styles from "@/css/page.module.css";
import { Search } from "@/components/Search";
import { RegionSelect } from "@/components/RegionSelect";
import { CountryCard } from "@/components/CountryCard";
import { useState } from "react";
import { useCountryData } from "@/context/CountryDataContext"; //カスタムフック使ってAPIデータ使うよ

export default function Home() {
  //RegionSelectのための状態保管
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  //Searchのための状態保管
  const [searchQuery, setSearchQuery] = useState<string>('');
  //CountryDataContextで作ったカスタムフックを使用
  const { countryData, loading, error } = useCountryData();
  //RegionSelect
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
  };
  
  //検索などによるフィルタリング
  const filteredCountries = countryData.filter(country => 
    (selectedRegion === 'all' || country.region === selectedRegion) &&
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //Search
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className={styles.main}>
      {/* 常に検索フォームとセレクトボタンは表示 */}
      <div className={styles.searchSelectBox}>
        <Search onSearchSubmit={handleSearchChange} />
        <RegionSelect onRegionChange={handleRegionChange} />
      </div>
      {/* エラーの場合はエラーメッセージ表示 */}
      {error && <div>Error: {error}</div>}
      {/* 読み込みが終わったらCountryCardを表示 */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CountryCard data={filteredCountries} />
      )}
    </main>
  );
}
