'use client';
import { CountryDataArray } from "@/app/types";
import countryCardStyles from "@/css/countryCard.module.css";
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
    <div className={countryCardStyles.countryCards}>
      {data.map((country) => (
        <div key={country.cca3} className={countryCardStyles.countryCard}>
          <Link href={`/country/${country.cca3}`} className={countryCardStyles.countryLink}>
            <Image
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              width={600}
              height={362}
							className={countryCardStyles.countryFlagImg}
            />
            <div className={countryCardStyles.countryContents}>
							<h2 className={countryCardStyles.countryName}>{country.name.common}</h2>
							<p className={countryCardStyles.countryPopulation}>Population: {country.population.toLocaleString()}</p>
							<p className={countryCardStyles.countryRegion}>Region: {country.region}</p>
							<p className={countryCardStyles.countryCaptial}>Capital: {country.capital}</p>
						</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
