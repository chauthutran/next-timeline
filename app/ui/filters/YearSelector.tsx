import { JSONObject } from "@/types/definations";
import { useState } from "react";

export default function YearSelector({ onItemSelected }: { onItemSelected: (year: string) => void }) {

	const [selectedYear, setSelectedYear] = useState('');

    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 10;
        const years = [];
        for (let year = startYear; year <= currentYear; year++) {
            years.push({ label: year.toString(), value: year.toString() });
        }
        return years;
    }

	const handleItemSeleted = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setSelectedYear( selectedValue );
		onItemSelected( selectedValue );
	}

    const yearList = generateYears();

    return (
        <select
			value={selectedYear}
			onChange={(e) => handleItemSeleted(e)}
		>
			<option>[Select Orgunit]</option>
			{yearList.map((year) => (
				<option key={year.value} value={year.value}>{year.label}</option>
			))}
		</select>
    )
}