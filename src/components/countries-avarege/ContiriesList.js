import React from "react";
import './CountryAvarege.css'
const countriesData = [
	{
		rank: 1,
		flag: "https://flagcdn.com/w80/jp.png",
		country: "Japan",
		points: 106
	},
	{
		rank: 2,
		flag: "https://flagcdn.com/w80/tw.png",
		country: "Taiwan",
		points: 106
	},
	{
		rank: 3,
		flag: "https://flagcdn.com/w80/sg.png",
		country: "Singapore",
		points: 106
	},
	{
		rank: 4,
		flag: "https://flagcdn.com/w80/hk.png",
		country: "Hong Kong",
		points: 105
	},
	{
		rank: 5,
		flag: "https://flagcdn.com/w80/cn.png",
		country: "China",
		points: 104
	},
	{
		rank: 6,
		flag: "https://flagcdn.com/w80/kr.png",
		country: "South Korea",
		points: 102
	},
	{
		rank: 7,
		flag: "https://flagcdn.com/w80/by.png",
		country: "Belarus",
		points: 102
	},
	{
		rank: 8,
		flag: "https://flagcdn.com/w80/fi.png",
		country: "Finland",
		points: 101
	},
	{
		rank: 9,
		flag: "https://flagcdn.com/w80/li.png",
		country: "Liechtenstein",
		points: 101
	},
	{
		rank: 10,
		flag: "https://flagcdn.com/w80/de.png",
		country: "Germany",
		points: 101
	},
	{
		rank: 11,
		flag: "https://flagcdn.com/w80/nl.png",
		country: "Netherlands",
		points: 101
	},
	{
		rank: 12,
		flag: "https://flagcdn.com/w80/ee.png",
		country: "Estonia",
		points: 101
	},
	{
		rank: 13,
		flag: "https://flagcdn.com/w80/lu.png",
		country: "Luxembourg",
		points: 100
	}
];
function CountriesList() {
	return (
		<ul>
			{countriesData.map((country) => (
				<li
					key={country.rank}
					className="country-item"
				>
					<div className="rank">{country.rank}.</div>
					<div className="flag-container">
						<img
							alt={`${country.country}'s flag`}
							loading="lazy"
							src={country.flag}
						/>
						<div className="country-name">{country.country}</div>
					</div>
					<div className="points">{country.points}</div>
				</li>
			))}
		</ul>
	);
}

export default CountriesList;