'use client';
import searchSelectStyles from "@/css/searchSelect.module.css";

interface RegionSelectProps {
  onRegionChange: (region: string) => void;
}

export const RegionSelect: React.FC<RegionSelectProps> = ({ onRegionChange }) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onRegionChange(event.target.value);
  };

	return(
		<div className="regionSelect">
			<select
				name="regionSelect"
				id="regionSelect"
				className={searchSelectStyles.regionSelect}
				onChange={handleChange}
			>
				<option value="all">Filter by Region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Antarctic">Antarctic</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	)
}