'use client';
import { CountryDataArray } from "@/app/types";
import styles from "@/css/countryCard.module.css";
import Link from "next/link";
import Image from "next/image";

interface CountryCardProps {
  data: CountryDataArray;
}

export const CountryCard: React.FC<CountryCardProps> = ({ data }) => {
  if (!data.length) {
    return <div>データがありません</div>;
  }

  return (
    <div className={styles.countryCards}>
      {data.map((country) => (
        <div key={country.cca3} className={styles.countryCard}>
          <Link href={`/country/${country.cca3}`} className={styles.countryLink}>
            <Image
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              width={600}
              height={362}
							className={styles.countryFlagImg}
            />
            <div className={styles.countryContents}>
							<h2 className={styles.countryName}>{country.name.common}</h2>
							<p className={styles.countryPopulation}>Population: {country.population.toLocaleString()}</p>
							<p className={styles.countryRegion}>Region: {country.region}</p>
							<p className={styles.countryCaptial}>Capital: {country.capital}</p>
						</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
