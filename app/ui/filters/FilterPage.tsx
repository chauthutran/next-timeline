import React, { useState, useEffect } from 'react';
import OrgUnitSelector from './OrgUnitSelector';
import YearSelector from './YearSelector';

const SRHRJNeedList = [
  'Promoting sexual and gender diversity',
  'Comprehensive sexuality education to young people',
  'Preventing sexual and gender-based violence',
  'Access to safe and legal abortion',
  'Access to safe and legal abortion',
  'Promoting gender equality'
];

export default function FilterPage({ onApplyFilters }: {onApplyFilters: (selectedOrgunit: string, selectedYear: string, selectedSRHRJNeed: string) => void}) {
  const [selectedOrgunit, setSelectedOrgunit] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSRHRJNeed, setSelectedSRHRJNeed] = useState('');

  const handleApplyFilters = () => {
    onApplyFilters(selectedOrgunit, selectedYear, selectedSRHRJNeed);
  };

  return (
    <div>
      {/* Orgunit Filter */}
      <div>Select Orgunit</div>
      <OrgUnitSelector onItemSelected={(orgUnitId: string) => setSelectedOrgunit(orgUnitId)} />

      {/* Year Filter */}
      <div>Select Year</div>
      <YearSelector onItemSelected={(year: string) => setSelectedYear(year)} />

      {/* SRHRJNeed Filter */}
      <div>Select SRHRJ Need</div>
      <select
        value={selectedSRHRJNeed}
        onChange={(e) => setSelectedSRHRJNeed(e.target.value)}
      >
        <option>Select SRHRJ Need</option>
        {SRHRJNeedList.map((need: string, idx: number) => (
          <option key={idx}>{need}</option>
        ))}
      </select>

      {/* Apply Filters Button */}
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};