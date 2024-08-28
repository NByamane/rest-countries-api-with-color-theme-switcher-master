'use client';
import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { CountryData } from "@/app/types"; 

//CountryDataContextの型定義
interface CountryDataContextType {
  countryData: CountryData[];
  loading: boolean;
  error: string | null;
}

//定義した型の初期値設定
const CountryDataContext = createContext<CountryDataContextType>({
  countryData: [],
  loading: true,
  error: null,
});

//Provider
export const CountryDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //APIリクエスト
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('何かしらのエラーが発生しました');
        }
        const result: CountryData[] = await response.json();
        setCountryData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <CountryDataContext.Provider value={{ countryData, loading, error }}>
      {children}
    </CountryDataContext.Provider>
  );
};

//カスタムフックの作成
export const useCountryData = () => {
  return useContext(CountryDataContext);
};
